"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  FileText,     // Icon for pages
  Package,      // Icon for products
  Tags,         // Icon for categories
  Send,         // Icon for actions
  Building2,    // Icon for sections/other?
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DialogTitle,
} from "@/components/ui/dialog"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator, // Keep in case needed later
} from "@/components/ui/command"
import { searchableItems, SearchableItem } from "@/lib/search-data"

// Helper to get icon based on type
const getItemIcon = (type: SearchableItem['type']) => {
  switch (type) {
    case 'page':
      return <FileText className="mr-2 h-4 w-4" />
    case 'product':
      return <Package className="mr-2 h-4 w-4" />
    case 'category':
      return <Tags className="mr-2 h-4 w-4" />
    case 'action':
      return <Send className="mr-2 h-4 w-4" />
    case 'section': // Example for section
      return <Building2 className="mr-2 h-4 w-4" />
    default:
      return <FileText className="mr-2 h-4 w-4" /> // Default icon
  }
}

export default function SearchBar() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("") // Input's immediate value
  const [debouncedQuery, setDebouncedQuery] = React.useState("") // Debounced value for filtering

  // Debounce effect
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(inputValue)
    }, 300) // 300ms delay

    return () => {
      clearTimeout(handler)
    }
  }, [inputValue])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    // Reset input value when a command is run
    setInputValue("")
    command()
  }, [])

  const handleSelect = (item: SearchableItem) => {
    runCommand(() => router.push(item.href))
  }

  // Filtering logic now uses debouncedQuery
  const filteredItems = debouncedQuery
    ? searchableItems.filter(
      (item) =>
        item.label.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        item.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
    )
    : searchableItems // Show all items initially if query is empty

  // Group items by type
  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      const type = item.type || 'page'
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(item)
      return acc
    },
    {} as Record<SearchableItem['type'], SearchableItem[]>
  )

  return (
    <>
      <Button
        variant="outline"
        className="h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Buscar...</span>
        <span className="inline-flex lg:hidden">Buscar...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Buscar en el sitio</DialogTitle>
        <CommandInput
          placeholder="Escribe un comando o busca..."
          value={inputValue} // Input value controlled by inputValue state
          onValueChange={setInputValue} // Update inputValue directly
        />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          {/* Sort groups or items within groups - sorting items within groups here */}
          {Object.entries(groupedItems)
            // Optional: Sort groups themselves if needed (e.g., pages first)
            // .sort(([typeA], [typeB]) => typeA.localeCompare(typeB))
            .map(([type, items]) => (
              <CommandGroup key={type} heading={type.charAt(0).toUpperCase() + type.slice(1)}>
                {items
                  // Sort items alphabetically by label within each group
                  .sort((a, b) => a.label.localeCompare(b.label))
                  .map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`${item.label} ${item.keywords?.join(' ') || ''}`}
                      onSelect={() => handleSelect(item)}
                      className="cursor-pointer"
                    >
                      {getItemIcon(item.type)} {/* Render icon */}
                      <span>{item.label}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

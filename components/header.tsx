"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"

// Agregar la importación del componente SearchBar
import SearchBar from "@/components/search-bar"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Modificar el componente Header para incluir la barra de búsqueda */}
      {/* Agregar la barra de búsqueda después del logo y antes de la navegación de escritorio */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <Image
            src="/logo%20fm.png"
            alt="Fabrimallas Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xs font-bold text-primary font-heading mt-1">
            Fabrimallas®
          </span>
        </Link>

        {/* Search Bar - Visible only on desktop */}
        <div className="hidden md:flex md:flex-1 md:justify-center md:px-4">
          <SearchBar />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-light/50 hover:text-foreground focus:bg-neutral-light/50 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-light/50 data-[state=open]:bg-neutral-light/50",
                  )}
                >
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-background hover:bg-neutral-light/50 focus:bg-neutral-light/50">
                Productos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral/50 to-neutral p-6 no-underline outline-none focus:shadow-md"
                        href="/productos"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Catálogo Completo</div>
                        <p className="text-sm leading-tight text-white/90">
                          Explora nuestra gama completa de productos para cerramientos, gaviones y mallas.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/productos/mallas"
                      >
                        <div className="text-sm font-medium leading-none">Mallas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Malla Triple Torsión, Eslabonada y más
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/productos/gaviones"
                      >
                        <div className="text-sm font-medium leading-none">Gaviones</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Gaviones para contención y decoración
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/productos/cerramientos"
                      >
                        <div className="text-sm font-medium leading-none">Cerramientos Integrales</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Soluciones completas para todo tipo de proyectos
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-background hover:bg-neutral-light/50 focus:bg-neutral-light/50">
                Sectores
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/sectores/construccion"
                      >
                        <div className="text-sm font-medium leading-none">Construcción</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Soluciones para obras civiles e infraestructura
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/sectores/industria-agro"
                      >
                        <div className="text-sm font-medium leading-none">Industria y Agro</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Cerramientos y protecciones para entornos industriales
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/sectores/residencial"
                      >
                        <div className="text-sm font-medium leading-none">Residencial</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Soluciones estéticas y funcionales para propiedades
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/proyectos" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-light/50 hover:text-foreground focus:bg-neutral-light/50 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-light/50 data-[state=open]:bg-neutral-light/50",
                  )}
                >
                  Proyectos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-background hover:bg-neutral-light/50 focus:bg-neutral-light/50">
                Nosotros
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/nosotros/empresa"
                      >
                        <div className="text-sm font-medium leading-none">Empresa</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Historia, misión, visión y valores
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/nosotros/proceso-artesanal"
                      >
                        <div className="text-sm font-medium leading-none">Proceso Artesanal</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Conoce cómo fabricamos nuestros gaviones
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/nosotros/equipo"
                      >
                        <div className="text-sm font-medium leading-none">Equipo</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Nuestro talento y certificaciones
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-light/50 focus:bg-neutral-light/50"
                        href="/blog"
                      >
                        <div className="text-sm font-medium leading-none">Blog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-neutral/80">
                          Artículos y noticias del sector
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contacto" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-light/50 hover:text-foreground focus:bg-neutral-light/50 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-light/50 data-[state=open]:bg-neutral-light/50",
                  )}
                >
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contacto">COTIZA TU PROYECTO</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-4">
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contacto">COTIZAR</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium py-2 hover:text-primary" onClick={() => setIsOpen(false)}>
                  Inicio
                </Link>

                <div className="border-t pt-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href="/productos"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Productos
                    </Link>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="pl-4 flex flex-col gap-2 mt-1">
                    <Link
                      href="/productos/mallas"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Mallas
                    </Link>
                    <Link
                      href="/productos/gaviones"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Gaviones
                    </Link>
                    <Link
                      href="/productos/cerramientos"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Cerramientos Integrales
                    </Link>
                  </div>
                </div>

                <div className="border-t pt-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href="/sectores"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Sectores
                    </Link>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="pl-4 flex flex-col gap-2 mt-1">
                    <Link
                      href="/sectores/construccion"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Construcción
                    </Link>
                    <Link
                      href="/sectores/industria-agro"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Industria y Agro
                    </Link>
                    <Link
                      href="/sectores/residencial"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Residencial
                    </Link>
                  </div>
                </div>

                <Link
                  href="/proyectos"
                  className="text-lg font-medium py-2 border-t hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Proyectos
                </Link>

                <div className="border-t pt-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href="/nosotros"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Nosotros
                    </Link>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="pl-4 flex flex-col gap-2 mt-1">
                    <Link
                      href="/nosotros/empresa"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Empresa
                    </Link>
                    <Link
                      href="/nosotros/proceso-artesanal"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Proceso Artesanal
                    </Link>
                    <Link
                      href="/nosotros/equipo"
                      className="text-sm py-1 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Equipo
                    </Link>
                    <Link href="/blog" className="text-sm py-1 hover:text-primary" onClick={() => setIsOpen(false)}>
                      Blog
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contacto"
                  className="text-lg font-medium py-2 border-t hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>

                <div className="mt-4 pt-4 border-t">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href="/contacto" onClick={() => setIsOpen(false)}>
                      COTIZA TU PROYECTO
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Datos de ejemplo para la búsqueda
const productos = [
  {
    id: 1,
    nombre: "Malla Triple Torsión",
    descripcion: "Malla hexagonal de alambre galvanizado para cerramientos y gaviones.",
    imagen: "/placeholder.svg?height=300&width=300",
    url: "/productos/malla-triple-torsion",
  },
  {
    id: 2,
    nombre: "Gaviones",
    descripcion: "Contenedores de malla metálica para muros de contención y decoración.",
    imagen: "/placeholder.svg?height=300&width=300",
    url: "/productos/gaviones",
  },
  {
    id: 3,
    nombre: "Malla Eslabonada",
    descripcion: "Malla versátil para cerramientos de todo tipo.",
    imagen: "/placeholder.svg?height=300&width=300",
    url: "/productos/malla-eslabonada",
  },
  {
    id: 4,
    nombre: "Cerramientos Integrales",
    descripcion: "Soluciones completas para cerramientos residenciales e industriales.",
    imagen: "/placeholder.svg?height=300&width=300",
    url: "/productos/cerramientos",
  },
]

const proyectos = [
  {
    id: 1,
    nombre: "Estabilización de Taludes - Vía Cali-Buenaventura",
    descripcion: "Proyecto de infraestructura vial con gaviones.",
    imagen: "/placeholder.svg?height=300&width=500",
    url: "/proyectos/estabilizacion-taludes-via-cali",
  },
  {
    id: 2,
    nombre: "Cerramiento Industrial - Planta Yumbo",
    descripcion: "Cerramiento perimetral para complejo industrial.",
    imagen: "/placeholder.svg?height=300&width=500",
    url: "/proyectos/cerramiento-industrial-yumbo",
  },
  {
    id: 3,
    nombre: "Muros de Contención - Urbanización Los Alpes",
    descripcion: "Muros de gaviones para desarrollo urbanístico.",
    imagen: "/placeholder.svg?height=300&width=500",
    url: "/proyectos/muros-contencion-urbanizacion",
  },
]

export default function BusquedaPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [activeTab, setActiveTab] = useState("todos")
  const [filteredProductos, setFilteredProductos] = useState(productos)
  const [filteredProyectos, setFilteredProyectos] = useState(proyectos)

  useEffect(() => {
    if (query) {
      const queryLower = query.toLowerCase()

      // Filtrar productos
      const productosResult = productos.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(queryLower) || producto.descripcion.toLowerCase().includes(queryLower),
      )
      setFilteredProductos(productosResult)

      // Filtrar proyectos
      const proyectosResult = proyectos.filter(
        (proyecto) =>
          proyecto.nombre.toLowerCase().includes(queryLower) || proyecto.descripcion.toLowerCase().includes(queryLower),
      )
      setFilteredProyectos(proyectosResult)
    } else {
      setFilteredProductos([])
      setFilteredProyectos([])
    }
  }, [query])

  const totalResults = filteredProductos.length + filteredProyectos.length

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 font-heading">Resultados de búsqueda</h1>
      <p className="text-lg mb-8 text-neutral-dark/70">
        {query ? (
          <>
            Se encontraron <span className="font-semibold">{totalResults}</span> resultados para:
            <span className="font-semibold"> "{query}"</span>
          </>
        ) : (
          "Ingrese un término de búsqueda para ver resultados"
        )}
      </p>

      {totalResults > 0 && (
        <Tabs defaultValue="todos" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="todos">Todos ({totalResults})</TabsTrigger>
            <TabsTrigger value="productos">Productos ({filteredProductos.length})</TabsTrigger>
            <TabsTrigger value="proyectos">Proyectos ({filteredProyectos.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="todos">
            {filteredProductos.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4 font-heading">Productos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {filteredProductos.map((producto) => (
                    <Card key={producto.id} className="overflow-hidden border-none shadow-md">
                      <div className="h-48 relative">
                        <Image
                          src={producto.imagen || "/placeholder.svg"}
                          alt={producto.nombre}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 font-heading">{producto.nombre}</h3>
                        <p className="mb-4 text-neutral-dark/70">{producto.descripcion}</p>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                          <Link href={producto.url}>Ver Producto</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {filteredProyectos.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-4 font-heading">Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProyectos.map((proyecto) => (
                    <Card key={proyecto.id} className="overflow-hidden border-none shadow-md">
                      <div className="h-48 relative">
                        <Image
                          src={proyecto.imagen || "/placeholder.svg"}
                          alt={proyecto.nombre}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 font-heading">{proyecto.nombre}</h3>
                        <p className="mb-4 text-neutral-dark/70">{proyecto.descripcion}</p>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                          <Link href={proyecto.url}>Ver Proyecto</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="productos">
            {filteredProductos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProductos.map((producto) => (
                  <Card key={producto.id} className="overflow-hidden border-none shadow-md">
                    <div className="h-48 relative">
                      <Image
                        src={producto.imagen || "/placeholder.svg"}
                        alt={producto.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 font-heading">{producto.nombre}</h3>
                      <p className="mb-4 text-neutral-dark/70">{producto.descripcion}</p>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Link href={producto.url}>Ver Producto</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-neutral-dark/70">
                No se encontraron productos que coincidan con su búsqueda.
              </p>
            )}
          </TabsContent>

          <TabsContent value="proyectos">
            {filteredProyectos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProyectos.map((proyecto) => (
                  <Card key={proyecto.id} className="overflow-hidden border-none shadow-md">
                    <div className="h-48 relative">
                      <Image
                        src={proyecto.imagen || "/placeholder.svg"}
                        alt={proyecto.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 font-heading">{proyecto.nombre}</h3>
                      <p className="mb-4 text-neutral-dark/70">{proyecto.descripcion}</p>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Link href={proyecto.url}>Ver Proyecto</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-neutral-dark/70">
                No se encontraron proyectos que coincidan con su búsqueda.
              </p>
            )}
          </TabsContent>
        </Tabs>
      )}

      {query && totalResults === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4 font-heading">No se encontraron resultados</h2>
          <p className="mb-8 text-neutral-dark/70">
            No hemos encontrado resultados que coincidan con "{query}". Por favor, intente con otros términos.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

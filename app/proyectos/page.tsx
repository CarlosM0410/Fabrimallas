"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProjectCard from "@/components/project-card"

// Datos de ejemplo para proyectos
const proyectos = [
  {
    id: 1,
    title: "Cerramiento Industrial Zona Franca",
    location: "Cali, Valle del Cauca",
    category: "Cerramiento Industrial",
    sector: "Industria",
    imageSrc: "/PuertaAlmacenFinca2.jpg",
    url: "/proyectos/cerramiento-industrial-zona-franca",
  },
  {
    id: 2,
    title: "Gaviones para Control de Erosión",
    location: "Popayán, Cauca",
    category: "Gaviones",
    sector: "Construcción",
    imageSrc: "/Gaviones3.jpg",
    url: "/proyectos/gaviones-control-erosion-popayan",
  },
  {
    id: 3,
    title: "Cerramiento Residencial Condominio",
    location: "Jamundí, Valle del Cauca",
    category: "Cerramiento Residencial",
    sector: "Residencial",
    imageSrc: "/RejaCasa.jpg",
    url: "/proyectos/cerramiento-residencial-condominio",
  },
  {
    id: 4,
    title: "Malla Eslabonada para Talud",
    location: "Buenaventura, Valle del Cauca",
    category: "Malla Eslabonada",
    sector: "Construcción",
    imageSrc: "/Malla7.jpg",
    url: "/proyectos/malla-triple-torsion-talud",
  },
  {
    id: 5,
    title: "Cerramiento Agroindustrial",
    location: "Palmira, Valle del Cauca",
    category: "Cerramiento Industrial",
    sector: "Industria",
    imageSrc: "/MallaGalpon.jpg",
    url: "/proyectos/cerramiento-agroindustrial",
  },
  {
    id: 6,
    title: "Gaviones Decorativos Centro Comercial",
    location: "Cali, Valle del Cauca",
    category: "Gaviones",
    sector: "Comercial",
    imageSrc: "/Gaviones4.jpg",
    url: "/proyectos/gaviones-decorativos-centro-comercial",
  },
  {
    id: 7,
    title: "Cerramiento Cancha Deportiva",
    location: "Tuluá, Valle del Cauca",
    category: "Cerramiento Deportivo",
    sector: "Institucional",
    imageSrc: "/CanchasFutbol.jpg",
    url: "/proyectos/cerramiento-cancha-deportiva",
  },
  {
    id: 8,
    title: "Malla Eslabonada Colegio",
    location: "Buga, Valle del Cauca",
    category: "Malla Eslabonada",
    sector: "Institucional",
    imageSrc: "/Malla5.jpg",
    url: "/proyectos/malla-eslabonada-colegio",
  },
  {
    id: 9,
    title: "Cerramiento Conjunto Residencial",
    location: "Cali, Valle del Cauca",
    category: "Cerramiento Residencial",
    sector: "Residencial",
    imageSrc: "/Fachada3.jpg",
    url: "/proyectos/cerramiento-conjunto-residencial",
  },
]

export default function ProyectosPage() {
  const [filtroSector, setFiltroSector] = useState<string>("todos")
  const [filtroProducto, setFiltroProducto] = useState<string>("todos")

  // Obtener categorías únicas para los filtros
  const sectores = ["todos", ...new Set(proyectos.map((proyecto) => proyecto.sector))]
  const productos = ["todos", ...new Set(proyectos.map((proyecto) => proyecto.category))]

  // Filtrar proyectos según los filtros seleccionados
  const proyectosFiltrados = proyectos.filter((proyecto) => {
    const cumpleFiltroSector = filtroSector === "todos" || proyecto.sector === filtroSector
    const cumpleFiltroProducto = filtroProducto === "todos" || proyecto.category === filtroProducto
    return cumpleFiltroSector && cumpleFiltroProducto
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Nuestro Portafolio de Proyectos
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Explora nuestros proyectos exitosos en diferentes sectores y con distintos productos.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="w-full md:w-64">
              <Select value={filtroSector} onValueChange={setFiltroSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por Sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectores.map((sector) => (
                    <SelectItem key={sector} value={sector}>
                      {sector === "todos" ? "Todos los Sectores" : sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-64">
              <Select value={filtroProducto} onValueChange={setFiltroProducto}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por Producto" />
                </SelectTrigger>
                <SelectContent>
                  {productos.map((producto) => (
                    <SelectItem key={producto} value={producto}>
                      {producto === "todos" ? "Todos los Productos" : producto}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => {
                setFiltroSector("todos")
                setFiltroProducto("todos")
              }}
            >
              Limpiar Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {proyectosFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No se encontraron proyectos</h3>
              <p className="text-neutral/70">
                No hay proyectos que coincidan con los filtros seleccionados. Intenta con otros criterios.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectosFiltrados.map((proyecto) => (
                <ProjectCard
                  key={proyecto.id}
                  title={proyecto.title}
                  location={proyecto.location}
                  category={proyecto.category}
                  imageSrc={proyecto.imageSrc}
                  url={proyecto.url}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

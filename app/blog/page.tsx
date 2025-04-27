import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

// Datos de ejemplo para artículos del blog
const articulos = [
  {
    id: 1,
    title: "Gaviones: Una solución sostenible para el control de erosión",
    excerpt:
      "Descubre cómo los gaviones se han convertido en una alternativa ecológica y duradera para el control de erosión en diferentes tipos de terrenos.",
    date: "15 de marzo, 2023",
    author: "Ing. María Rodríguez",
    category: "Construcción",
    imageSrc: "/placeholder.svg?height=300&width=500",
    slug: "gaviones-solucion-sostenible-control-erosion",
  },
  {
    id: 2,
    title: "Cerramientos industriales: Seguridad y cumplimiento normativo",
    excerpt:
      "Analizamos los requisitos de seguridad y las normativas que deben cumplir los cerramientos industriales en Colombia.",
    date: "28 de febrero, 2023",
    author: "Ing. Carlos Martínez",
    category: "Industria",
    imageSrc: "/placeholder.svg?height=300&width=500",
    slug: "cerramientos-industriales-seguridad-normativas",
  },
  {
    id: 4,
    title: "Cerramientos residenciales: Tendencias de diseño para 2023",
    excerpt:
      "Las últimas tendencias en diseño de cerramientos para propiedades residenciales que combinan seguridad y estética.",
    date: "5 de enero, 2023",
    author: "Arq. Javier Ramírez",
    category: "Residencial",
    imageSrc: "/placeholder.svg?height=300&width=500",
    slug: "cerramientos-residenciales-tendencias-diseno-2023",
  },
  {
    id: 5,
    title: "Mantenimiento de cerramientos: Guía completa",
    excerpt:
      "Todo lo que necesitas saber para mantener tus cerramientos en óptimas condiciones y prolongar su vida útil.",
    date: "20 de diciembre, 2022",
    author: "Téc. Roberto Sánchez",
    category: "Mantenimiento",
    imageSrc: "/placeholder.svg?height=300&width=500",
    slug: "mantenimiento-cerramientos-guia-completa",
  },
  {
    id: 6,
    title: "Gaviones decorativos: Integrando funcionalidad y diseño",
    excerpt:
      "Cómo los gaviones han evolucionado de ser elementos puramente funcionales a convertirse en elementos decorativos en arquitectura y paisajismo.",
    date: "5 de diciembre, 2022",
    author: "Arq. Patricia Londoño",
    category: "Diseño",
    imageSrc: "/placeholder.svg?height=300&width=500",
    slug: "gaviones-decorativos-funcionalidad-diseno",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">Blog Fabrimallas®</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Artículos, noticias y recursos sobre cerramientos, gaviones, mallas y tendencias del sector.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
              <Card key={articulo.id} className="overflow-hidden border-none shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={articulo.imageSrc || "/placeholder.svg"}
                      alt={articulo.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                      {articulo.category}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral/70 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{articulo.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{articulo.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{articulo.title}</h3>
                  <p className="text-neutral/80">{articulo.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href={`/blog/${articulo.slug}`} className="flex items-center justify-center">
                      Leer Más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              <Button variant="outline" className="bg-primary text-white hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Siguiente</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

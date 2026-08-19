import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react"
import { notFound } from "next/navigation"
import CTABanner from "@/components/cta-banner"
import ProjectCard from "@/components/project-card"
import { proyectos } from "@/lib/proyectos-data"

export default function ProyectoDetallePage({ params }: { params: { slug: string } }) {
  const proyecto = proyectos.find((p) => p.slug === params.slug)

  if (!proyecto) {
    notFound()
  }

  const proyectosRelacionados = proyectos.filter((p) => p.slug !== proyecto.slug).slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Project Header */}
      <section className="py-12 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/proyectos" className="flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Proyectos
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">{proyecto.title}</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-neutral/80">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{proyecto.location}</span>
            </div>
            <div className="flex items-center text-neutral/80">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Completado: {proyecto.date}</span>
            </div>
            <div className="flex items-center text-neutral/80">
              <User className="h-4 w-4 mr-1" />
              <span>Cliente: {proyecto.client}</span>
            </div>
          </div>

          <div className="bg-primary text-white px-4 py-2 inline-block rounded-md mb-8">{proyecto.category}</div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative aspect-video overflow-hidden rounded-lg max-w-4xl mx-auto">
            <Image
              src={proyecto.imageSrc || "/placeholder.svg"}
              alt={proyecto.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="descripcion" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="descripcion">Descripcion del Proyecto</TabsTrigger>
              <TabsTrigger value="desafios">Desafios y Soluciones</TabsTrigger>
              <TabsTrigger value="resultados">Resultados</TabsTrigger>
            </TabsList>

            <TabsContent value="descripcion" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Descripcion del Proyecto</h3>
                  {proyecto.descripcion.map((parrafo, i) => (
                    <p key={i} className="mb-4">
                      {parrafo}
                    </p>
                  ))}
                </div>

                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-4 font-heading">Detalles Tecnicos</h3>
                  <ul className="space-y-2">
                    {proyecto.detallesTecnicos.map((detalle, i) => (
                      <li key={i} className="flex items-start">
                        <span className="font-bold mr-2">{detalle.label}:</span>
                        <span>{detalle.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="desafios" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Desafios</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {proyecto.desafios.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Soluciones Implementadas</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {proyecto.soluciones.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resultados" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Resultados del Proyecto</h3>
                  {proyecto.resultados.map((parrafo, i) => (
                    <p key={i} className="mb-4">
                      {parrafo}
                    </p>
                  ))}
                </div>

                <div className="md:w-1/3">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 font-heading">Testimonio del Cliente</h3>
                    <blockquote className="italic mb-4">{proyecto.testimonio.texto}</blockquote>
                    <p className="font-bold">{proyecto.testimonio.autor}</p>
                    <p className="text-sm">{proyecto.testimonio.cargo}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Proyectos Relacionados</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {proyectosRelacionados.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                location={p.location}
                category={p.category}
                imageSrc={p.imageSrc}
                url={`/proyectos/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas un proyecto similar?"
        description="Nuestro equipo esta listo para asesorarte y ofrecerte la mejor solucion para tus necesidades especificas."
        buttonText="SOLICITAR COTIZACION"
        buttonUrl="/contacto"
      />
    </div>
  )
}

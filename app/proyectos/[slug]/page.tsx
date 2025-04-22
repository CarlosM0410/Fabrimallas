import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react"
import CTABanner from "@/components/cta-banner"
import ProjectCard from "@/components/project-card"

// Datos de ejemplo para proyectos relacionados
const proyectosRelacionados = [
  {
    id: 1,
    title: "Cerramiento Industrial Zona Franca",
    location: "Cali, Valle del Cauca",
    category: "Cerramiento Industrial",
    imageSrc: "/placeholder.svg?height=300&width=400",
    url: "/proyectos/cerramiento-industrial-zona-franca",
  },
  {
    id: 2,
    title: "Gaviones para Control de Erosión",
    location: "Popayán, Cauca",
    category: "Gaviones",
    imageSrc: "/placeholder.svg?height=300&width=400",
    url: "/proyectos/gaviones-control-erosion-popayan",
  },
  {
    id: 3,
    title: "Cerramiento Residencial Condominio",
    location: "Jamundí, Valle del Cauca",
    category: "Cerramiento Residencial",
    imageSrc: "/placeholder.svg?height=300&width=400",
    url: "/proyectos/cerramiento-residencial-condominio",
  },
]

export default function ProyectoDetallePage({ params }: { params: { slug: string } }) {
  // En una implementación real, aquí se buscaría el proyecto por su slug en una base de datos
  const slug = params.slug

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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Cerramiento Industrial Zona Franca
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-neutral/80">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Cali, Valle del Cauca</span>
            </div>
            <div className="flex items-center text-neutral/80">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Completado: Marzo 2023</span>
            </div>
            <div className="flex items-center text-neutral/80">
              <User className="h-4 w-4 mr-1" />
              <span>Cliente: Zona Franca del Pacífico</span>
            </div>
          </div>

          <div className="bg-primary text-white px-4 py-2 inline-block rounded-md mb-8">Cerramiento Industrial</div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Cerramiento Industrial Zona Franca - Vista Principal"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cerramiento Industrial Zona Franca - Detalle 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cerramiento Industrial Zona Franca - Detalle 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cerramiento Industrial Zona Franca - Detalle 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cerramiento Industrial Zona Franca - Detalle 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="descripcion" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="descripcion">Descripción del Proyecto</TabsTrigger>
              <TabsTrigger value="desafios">Desafíos y Soluciones</TabsTrigger>
              <TabsTrigger value="resultados">Resultados</TabsTrigger>
            </TabsList>

            <TabsContent value="descripcion" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Descripción del Proyecto</h3>
                  <p className="mb-4">
                    Este proyecto consistió en la instalación de un cerramiento perimetral de alta seguridad para las
                    instalaciones de la Zona Franca del Pacífico, ubicada en Cali, Valle del Cauca. El cerramiento
                    abarcó un perímetro total de 1,200 metros lineales, utilizando malla eslabonada galvanizada calibre
                    10 con postes metálicos y concertina de seguridad en la parte superior.
                  </p>
                  <p className="mb-4">
                    El objetivo principal del proyecto fue proporcionar un nivel óptimo de seguridad para las
                    instalaciones industriales, cumpliendo con los estándares internacionales de protección perimetral
                    para zonas francas, mientras se mantenía una estética acorde con la imagen corporativa del cliente.
                  </p>
                  <p>
                    El proyecto incluyó la fabricación e instalación de puertas de acceso vehicular y peatonal, así como
                    la integración con los sistemas de seguridad electrónica existentes en las instalaciones.
                  </p>
                </div>

                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-4 font-heading">Detalles Técnicos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Producto:</span>
                      <span>Cerramiento Industrial con Malla Eslabonada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Extensión:</span>
                      <span>1,200 metros lineales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Altura:</span>
                      <span>2.5 metros + concertina de seguridad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Material:</span>
                      <span>Malla eslabonada galvanizada calibre 10</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Estructura:</span>
                      <span>Postes metálicos galvanizados con platinas de anclaje</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Seguridad adicional:</span>
                      <span>Concertina de acero inoxidable de 18 pulgadas de diámetro</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Tiempo de ejecución:</span>
                      <span>45 días</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="desafios" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Desafíos</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Terreno irregular con pendientes pronunciadas en varios tramos del perímetro, lo que dificultaba
                      la instalación estándar.
                    </li>
                    <li>
                      Necesidad de mantener la operación continua de la zona franca durante todo el proceso de
                      instalación, sin interrumpir el flujo de vehículos y personas.
                    </li>
                    <li>
                      Requerimientos específicos de seguridad para cumplir con normativas internacionales de zonas
                      francas.
                    </li>
                    <li>
                      Condiciones climáticas adversas durante parte del periodo de instalación, con fuertes lluvias
                      típicas de la región.
                    </li>
                    <li>
                      Integración con sistemas de seguridad electrónica preexistentes sin afectar su funcionamiento.
                    </li>
                  </ul>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Soluciones Implementadas</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Diseño personalizado de postes y anclajes para adaptarse a las irregularidades del terreno,
                      garantizando la estabilidad y alineación del cerramiento.
                    </li>
                    <li>
                      Planificación detallada por fases y coordinación con el departamento de seguridad del cliente para
                      mantener la operación sin interrupciones.
                    </li>
                    <li>
                      Implementación de refuerzos adicionales y concertina de seguridad de alta especificación para
                      cumplir con los estándares internacionales.
                    </li>
                    <li>
                      Adaptación del cronograma de trabajo y uso de técnicas de instalación que permitieran avanzar
                      incluso en condiciones de lluvia moderada.
                    </li>
                    <li>
                      Trabajo conjunto con el equipo técnico del cliente para la correcta integración con los sistemas
                      electrónicos de seguridad.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resultados" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Resultados del Proyecto</h3>
                  <p className="mb-4">
                    El cerramiento industrial para la Zona Franca del Pacífico fue completado exitosamente dentro del
                    plazo establecido y cumpliendo con todos los requerimientos técnicos y de seguridad especificados
                    por el cliente.
                  </p>
                  <p className="mb-4">
                    La solución implementada proporcionó un perímetro de seguridad robusto que ha demostrado su
                    efectividad, sin registrarse incidentes de intrusión desde su instalación. El cerramiento ha
                    resistido adecuadamente las condiciones climáticas de la región, manteniendo su integridad
                    estructural y apariencia.
                  </p>
                  <p className="mb-4">
                    La integración con los sistemas electrónicos de seguridad funciona perfectamente, permitiendo un
                    monitoreo eficiente de todo el perímetro. El cliente ha expresado su satisfacción con la calidad del
                    trabajo realizado y el profesionalismo del equipo de Fabrimallas® durante todo el proceso.
                  </p>
                  <p>
                    Este proyecto se ha convertido en un referente para otras zonas francas de la región, que han
                    mostrado interés en implementar soluciones similares para sus instalaciones.
                  </p>
                </div>

                <div className="md:w-1/3">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 font-heading">Testimonio del Cliente</h3>
                    <blockquote className="italic mb-4">
                      "El cerramiento instalado por Fabrimallas® ha superado nuestras expectativas en términos de
                      calidad, seguridad y estética. Su equipo demostró gran profesionalismo y capacidad para resolver
                      los desafíos que surgieron durante el proyecto. Recomendamos ampliamente sus servicios."
                    </blockquote>
                    <p className="font-bold">Ing. Carlos Ramírez</p>
                    <p className="text-sm">Director de Infraestructura - Zona Franca del Pacífico</p>
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
            {proyectosRelacionados.map((proyecto) => (
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
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas un proyecto similar?"
        description="Nuestro equipo está listo para asesorarte y ofrecerte la mejor solución para tus necesidades específicas."
        buttonText="SOLICITAR COTIZACIÓN"
        buttonUrl="/contacto"
      />
    </div>
  )
}

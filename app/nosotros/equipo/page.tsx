import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CTABanner from "@/components/cta-banner"
import { Linkedin, Mail } from "lucide-react"

export default function EquipoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">Nuestro Talento</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Conoce al equipo de profesionales y artesanos que hacen posible la excelencia en cada proyecto de
            Fabrimallas®.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">El Valor de Nuestro Equipo</h2>
              <p className="mb-4">
                En Fabrimallas®, nuestro mayor activo es el talento humano. Contamos con un equipo multidisciplinario de
                profesionales, técnicos y artesanos que combinan experiencia, conocimiento y pasión por la excelencia en
                cada proyecto que realizamos.
              </p>
              <p>
                Desde ingenieros y arquitectos hasta artesanos con décadas de experiencia en el tejido manual de mallas
                y gaviones, cada miembro de nuestro equipo aporta habilidades únicas que nos permiten ofrecer soluciones
                integrales y de la más alta calidad para nuestros clientes.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo Fabrimallas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Equipo Directivo</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Director General */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Carlos Ramírez - Director General"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 font-heading">Carlos Ramírez</h3>
                <p className="text-primary font-medium mb-3">Director General</p>
                <p className="text-neutral/80 mb-4">
                  Ingeniero Civil con más de 20 años de experiencia en el sector de la construcción. Fundador de
                  Fabrimallas® y visionario detrás de nuestro enfoque artesanal.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral/70 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-neutral/70 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Directora Técnica */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="María Fernanda López - Directora Técnica"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 font-heading">María Fernanda López</h3>
                <p className="text-primary font-medium mb-3">Directora Técnica</p>
                <p className="text-neutral/80 mb-4">
                  Ingeniera Civil especializada en Geotecnia. Lidera nuestro departamento técnico y supervisa todos los
                  proyectos para garantizar el cumplimiento de las normas y especificaciones.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral/70 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-neutral/70 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Director de Producción */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Javier Martínez - Director de Producción"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 font-heading">Javier Martínez</h3>
                <p className="text-primary font-medium mb-3">Director de Producción</p>
                <p className="text-neutral/80 mb-4">
                  Maestro artesano con 30 años de experiencia en la fabricación de mallas y gaviones. Supervisa todos
                  los procesos de producción y capacita a los nuevos artesanos.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral/70 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-neutral/70 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Equipo Técnico</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Ingeniero de Proyectos */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Roberto Sánchez - Ingeniero de Proyectos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1 font-heading">Roberto Sánchez</h3>
                <p className="text-primary font-medium mb-2">Ingeniero de Proyectos</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Ing. Civil
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Certificado PMP
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Arquitecta */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Laura Gómez - Arquitecta"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1 font-heading">Laura Gómez</h3>
                <p className="text-primary font-medium mb-2">Arquitecta</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Diseño Sostenible
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    BIM
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Supervisor de Instalaciones */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Pedro Morales - Supervisor de Instalaciones"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1 font-heading">Pedro Morales</h3>
                <p className="text-primary font-medium mb-2">Supervisor de Instalaciones</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Técnico Constructor
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Certificado SENA
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Asesor Técnico */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Ana María Rodríguez - Asesora Técnica"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1 font-heading">Ana María Rodríguez</h3>
                <p className="text-primary font-medium mb-2">Asesora Técnica</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Ing. Ambiental
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Esp. Geotecnia
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Artisan Team */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Nuestros Artesanos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Maestros Artesanos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-3 font-heading">Maestros Artesanos</h3>
                <p className="mb-4">
                  Nuestros maestros artesanos son el corazón de Fabrimallas®. Con décadas de experiencia en el tejido
                  manual de mallas y gaviones, transmiten su conocimiento a las nuevas generaciones y garantizan que
                  cada pieza cumpla con los más altos estándares de calidad.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-white">Tejido Manual</Badge>
                  <Badge className="bg-primary text-white">Control de Calidad</Badge>
                  <Badge className="bg-primary text-white">Técnicas Tradicionales</Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Instaladores Certificados"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-3 font-heading">Instaladores Certificados</h3>
                <p className="mb-4">
                  Nuestro equipo de instaladores certificados cuenta con la formación y experiencia necesarias para
                  garantizar que cada proyecto se ejecute correctamente. Conocen a fondo las características de nuestros
                  productos y las mejores prácticas para su instalación.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-white">Certificación SENA</Badge>
                  <Badge className="bg-primary text-white">Trabajo en Altura</Badge>
                  <Badge className="bg-primary text-white">Seguridad Industrial</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Certificaciones y Formación</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-primary"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Certificaciones Técnicas</h4>
                  <p className="mb-4">
                    Nuestro personal técnico cuenta con certificaciones en áreas como geotecnia, control de erosión,
                    estabilización de taludes y diseño de estructuras de contención.
                  </p>
                  <ul className="list-disc list-inside text-left">
                    <li>Certificación en Normas INVÍAS</li>
                    <li>Especialización en Geotecnia</li>
                    <li>Certificación en Control de Erosión</li>
                    <li>Diseño de Estructuras de Contención</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-primary"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Formación Artesanal</h4>
                  <p className="mb-4">
                    Mantenemos viva la tradición artesanal a través de programas de formación internos donde nuestros
                    maestros artesanos transmiten su conocimiento a las nuevas generaciones.
                  </p>
                  <ul className="list-disc list-inside text-left">
                    <li>Programa de Aprendices</li>
                    <li>Técnicas Tradicionales de Tejido</li>
                    <li>Control de Calidad Artesanal</li>
                    <li>Innovación en Procesos Artesanales</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Seguridad y Salud</h4>
                  <p className="mb-4">
                    Todo nuestro personal cuenta con formación en seguridad industrial y salud ocupacional, garantizando
                    prácticas seguras tanto en la fabricación como en la instalación.
                  </p>
                  <ul className="list-disc list-inside text-left">
                    <li>Certificación en Trabajo en Altura</li>
                    <li>Manejo Seguro de Herramientas</li>
                    <li>Primeros Auxilios</li>
                    <li>Sistema de Gestión de Seguridad y Salud</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Únete a Nuestro Equipo</h2>
          <p className="max-w-2xl mx-auto mb-8">
            En Fabrimallas® estamos siempre en busca de talento que comparta nuestra pasión por la excelencia y el
            trabajo artesanal. Si estás interesado en formar parte de nuestro equipo, envíanos tu hoja de vida.
          </p>
          <a
            href="mailto:rrhh@fabrimallas.com"
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            Enviar CV a rrhh@fabrimallas.com
          </a>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Quieres conocer más sobre nuestro equipo?"
        description="Contáctanos para obtener más información sobre nuestra empresa y cómo podemos ayudarte con tu proyecto."
        buttonText="CONTÁCTANOS"
        buttonLink="/contacto"
      />
    </div>
  )
}

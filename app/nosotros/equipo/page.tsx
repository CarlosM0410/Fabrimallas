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
                En Fabrimallas®, nuestro mayor activo es el talento humano. Integramos un equipo multidisciplinario donde convergen:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Profesionales técnicos —ingenieros, arquitectos y especialistas en producción— que garantizan diseño, cálculo y cumplimiento normativo.</li>
                <li>Maestros artesanos con décadas de experiencia en el tejido manual de mallas y gaviones, custodios de la tradición y la calidad manual.</li>
                <li>Operarios y personal de campo comprometidos con la instalación segura, la eficiencia y la mejora continua.</li>
              </ul>
              <p>
                La combinación de conocimiento académico, pericia artesanal y pasión por la excelencia nos permite ofrecer soluciones integrales y productos de la más alta resistencia para cada proyecto.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/Fachada1.jpg"
                  alt="Fachada de Fabrimallas"
                  fill
                  className="object-cover object-top"
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
            {/* Gerente General */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-80 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="Julian Marquez Chaparro - Gerente General"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 font-heading">Julian Marquez Chaparro</h3>
                <p className="text-primary font-medium mb-3">Gerente General</p>
                <p className="text-neutral/80 mb-4">
                  Lidera la operación con visión de crecimiento y calidad, integrando lo productivo, administrativo y comercial.
                </p>
              </CardContent>
            </Card>

            {/* Secretaría Ejecutiva */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-80 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="Leydi Cerquera Henao - Secretaría Ejecutiva"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 font-heading">Leydi Cerquera Henao</h3>
                <p className="text-primary font-medium mb-3">Secretaría Ejecutiva</p>
                <p className="text-neutral/80 mb-4">
                  Coordina agendas y documentación; es el puente organizativo que mantiene fluyendo cada área.
                </p>
              </CardContent>
            </Card>

            {/* Encargado de SST */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-80 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="ROBERT GEOVANNI GARCIA - Encargado de SST"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 font-heading">ROBERT GEOVANNI GARCIA</h3>
                <p className="text-primary font-medium mb-3">Encargado de SST</p>
                <p className="text-neutral/80 mb-4">
                  Vigila la seguridad laboral y capacita al personal, asegurando un entorno de trabajo seguro y normativo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Equipo Técnico</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Servicios Generales */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="Claudia Duque Arias - Servicios Generales"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1 font-heading">Claudia Duque Arias</h3>
                <p className="text-primary font-medium mb-2">Servicios Generales</p>
              </CardContent>
            </Card>

            {/* Operario Mallas */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="Julian David Molano - Operario Mallas"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1 font-heading">Julian David Molano</h3>
                <p className="text-primary font-medium mb-2">Operario Mallas</p>
              </CardContent>
            </Card>

            {/* Operario Gaviones */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="Dilan Osorio - Operario Gaviones"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1 font-heading">Dilan Osorio</h3>
                <p className="text-primary font-medium mb-2">Operario Gaviones</p>
              </CardContent>
            </Card>

            {/* Instalador Mallas */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="Jhon Fredy Montoya Arias - Instalador Mallas"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1 font-heading">Jhon Fredy Montoya Arias</h3>
                <p className="text-primary font-medium mb-2">Instalador Mallas</p>
              </CardContent>
            </Card>

            {/* Tecnico en Puertas */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 w-full bg-neutral-light/50 flex items-center justify-center">
                <Image
                  src="/logo fm.png"
                  alt="Mauricio Mejia Baena - Tecnico en Puertas"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1 font-heading">Mauricio Mejia Baena</h3>
                <p className="text-primary font-medium mb-2">Técnico en Puertas</p>
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
            href="mailto:fabrimallas2011@hotmail.com"
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            Enviar CV a fabrimallas2011@hotmail.com
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

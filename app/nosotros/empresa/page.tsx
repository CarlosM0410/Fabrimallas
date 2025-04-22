import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CTABanner from "@/components/cta-banner"
import { CheckCircle } from "lucide-react"

export default function EmpresaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">Nuestra Empresa</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Conoce la historia, misión, visión y valores que impulsan a Fabrimallas® a ser líderes en soluciones de
            cerramientos y gaviones.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">Quiénes Somos</h2>
              <p className="mb-4">
                Fabrimallas® es una empresa colombiana especializada en la fabricación e instalación de soluciones de
                cerramientos, mallas y gaviones para los sectores de construcción, industria, agricultura y residencial.
              </p>
              <p className="mb-4">
                Fundada en 2005 en Cali, Valle del Cauca, nuestra empresa ha crecido hasta convertirse en un referente
                regional en el suroccidente colombiano, destacándonos por la calidad artesanal de nuestros productos y
                nuestro servicio integral llave por la calidad artesanal de nuestros productos y nuestro servicio
                integral llave en mano.
              </p>
              <p>
                Con más de 15 años de experiencia en el mercado, hemos ejecutado con éxito cientos de proyectos que
                avalan nuestra trayectoria y compromiso con la excelencia. Nuestro enfoque en la artesanía, la calidad
                de los materiales y la satisfacción del cliente nos ha permitido construir relaciones duraderas con
                empresas constructoras, industrias, entidades gubernamentales y clientes residenciales.
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

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mision" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="mision">Misión</TabsTrigger>
              <TabsTrigger value="vision">Visión</TabsTrigger>
              <TabsTrigger value="valores">Valores</TabsTrigger>
            </TabsList>

            <TabsContent value="mision" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Misión Fabrimallas"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Nuestra Misión</h3>
                  <p className="mb-4">
                    Proporcionar soluciones de cerramientos, mallas y gaviones de la más alta calidad, combinando la
                    artesanía tradicional con tecnología moderna para satisfacer las necesidades específicas de nuestros
                    clientes en los sectores de construcción, industria, agricultura y residencial.
                  </p>
                  <p>
                    Nos comprometemos a ofrecer un servicio integral que incluye asesoría técnica, diseño, fabricación e
                    instalación, garantizando la durabilidad, seguridad y estética de cada proyecto, mientras
                    contribuimos al desarrollo sostenible de la región suroccidental de Colombia.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vision" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Visión Fabrimallas"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Nuestra Visión</h3>
                  <p className="mb-4">
                    Para 2030, Fabrimallas® será reconocida como la empresa líder en soluciones de cerramientos y
                    gaviones en el suroccidente colombiano, destacándose por la innovación, la calidad artesanal y el
                    compromiso con la sostenibilidad.
                  </p>
                  <p>
                    Aspiramos a expandir nuestra presencia a nivel nacional, manteniendo nuestro enfoque en la
                    excelencia técnica y el servicio personalizado. Seremos referentes en la implementación de
                    soluciones que combinen funcionalidad, durabilidad y respeto por el medio ambiente, contribuyendo
                    activamente al desarrollo de infraestructuras seguras y sostenibles.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="valores" className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 font-heading text-center">Nuestros Valores</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 font-heading">Excelencia</h4>
                      <p>
                        Buscamos la perfección en cada detalle de nuestros productos y servicios, superando las
                        expectativas de nuestros clientes.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 font-heading">Integridad</h4>
                      <p>
                        Actuamos con honestidad, transparencia y ética en todas nuestras relaciones comerciales y
                        laborales.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 font-heading">Compromiso</h4>
                      <p>
                        Nos dedicamos plenamente a cumplir nuestras promesas y a entregar proyectos que satisfagan todas
                        las necesidades de nuestros clientes.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 font-heading">Innovación</h4>
                      <p>
                        Buscamos constantemente nuevas formas de mejorar nuestros productos y procesos, adaptándonos a
                        las necesidades cambiantes del mercado.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 font-heading">Sostenibilidad</h4>
                      <p>
                        Nos comprometemos con prácticas empresariales que respeten el medio ambiente y contribuyan al
                        desarrollo sostenible de nuestra región.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 font-heading">Trabajo en Equipo</h4>
                      <p>
                        Valoramos la colaboración, el respeto mutuo y la comunicación efectiva como bases para lograr
                        resultados excepcionales.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Nuestra Historia</h2>

          <div className="relative border-l-4 border-primary ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 md:pl-0">
            {/* 2005 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold font-heading">2005</h3>
                <p className="text-neutral/80">Fundación de Fabrimallas®</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <p>
                  Fabrimallas® inicia operaciones en Cali como un pequeño taller especializado en la fabricación
                  artesanal de mallas y gaviones.
                </p>
              </div>
            </div>

            {/* 2008 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p>
                  Expansión de la línea de productos para incluir cerramientos residenciales e industriales. Primer
                  proyecto importante para una constructora local.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold font-heading">2008</h3>
                <p className="text-neutral/80">Diversificación de Productos</p>
              </div>
            </div>

            {/* 2012 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold font-heading">2012</h3>
                <p className="text-neutral/80">Certificación de Calidad</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <p>
                  Obtención de certificaciones de calidad para nuestros productos. Implementación de procesos
                  estandarizados de fabricación e instalación.
                </p>
              </div>
            </div>

            {/* 2015 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p>
                  Traslado a instalaciones más amplias. Adquisición de equipos especializados para mejorar la
                  producción. Ampliación del equipo de trabajo.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold font-heading">2015</h3>
                <p className="text-neutral/80">Crecimiento y Expansión</p>
              </div>
            </div>

            {/* 2018 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold font-heading">2018</h3>
                <p className="text-neutral/80">Servicio Integral</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <p>
                  Implementación del servicio integral "llave en mano" que incluye asesoría, diseño, fabricación e
                  instalación. Formación de equipos especializados por sector.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p>
                  Adaptación a los desafíos de la pandemia. Implementación de protocolos de bioseguridad y nuevas
                  modalidades de trabajo. Desarrollo de canales digitales.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold font-heading">2020</h3>
                <p className="text-neutral/80">Resiliencia e Innovación</p>
              </div>
            </div>

            {/* 2023 */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold font-heading">2023</h3>
                <p className="text-neutral/80">Presente y Futuro</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <p>
                  Consolidación como referente regional en soluciones de cerramientos y gaviones. Implementación de
                  prácticas sostenibles y enfoque en la responsabilidad social empresarial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Quieres conocer más sobre Fabrimallas®?"
        description="Contáctanos para obtener más información sobre nuestra empresa y cómo podemos ayudarte con tu proyecto."
        buttonText="CONTÁCTANOS"
        buttonUrl="/contacto"
      />
    </div>
  )
}

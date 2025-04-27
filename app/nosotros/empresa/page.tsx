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
                Nuestra historia, un legado tejido con amor y acero. Hace más de cuatro décadas,{' '}
                <strong>Carlos Alberto Márquez Londoño</strong> soñó con proteger los campos y hogares de Tuluá. Con sus propias
                manos comenzó a entrelazar alambre galvanizado, pieza tras pieza, hasta formar las primeras mallas que
                darían nombre a <strong>FABRIMALLAS</strong>. Su dedicación, su palabra empeñada y el cariño por su gente
                hicieron que, muy pronto, la empresa se convirtiera en sinónimo de confianza y seguridad en todo el
                corazón del Valle del Cauca.
              </p>
              <p className="mb-4">
                Hoy ese sueño late con la misma fuerza en las manos de su hijo, <strong>Julián Márquez</strong>. Con la
                pasión heredada y la mirada puesta en el futuro, Julián ha llevado nuestra marca más allá de las montañas
                que nos vieron nacer, llegando a nuevos departamentos y conquistando proyectos de toda escala. Cada
                metro de malla, cada gavión y cada cerramiento que sale de nuestro taller lleva impreso algo más que
                acero: lleva la historia de una familia que ama lo que hace y el compromiso de proteger lo que más
                amas.
              </p>
              <p className="mb-4">
                Porque en <strong>FABRIMALLAS</strong> no solo soldamos tubos y entretejemos alambres; soldamos
                generaciones y entretejemos sueños. Seguimos creciendo, sí, pero sin olvidar de dónde venimos ni el
                propósito que nos une: brindar seguridad que perdura y un servicio que se siente tan cercano como un
                apretón de manos entre vecinos.
              </p>
              <p>
                Gracias por confiar en nuestra familia para cuidar la tuya.
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
            {/* 1983 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold font-heading">1983</h3>
                <p className="text-neutral/80">Fundación en Tuluá por Carlos Alberto Márquez Londoño.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                {/* Puedes añadir un texto descriptivo más largo aquí si lo tienes */}
              </div>
            </div>

            {/* 1998 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p>
                  Apertura de la primera planta propia de producción semiautomática, elevando la capacidad a 20 t/mes de
                  alambre procesado.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold font-heading">1998</h3>
                <p className="text-neutral/80">Primera planta propia</p>
              </div>
            </div>

            {/* 2008 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold font-heading">2008</h3>
                <p className="text-neutral/80">+100 km instalados</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <p>
                  Superamos los 100 km de malla instalada en todo el Valle del Cauca, reflejo de la confianza de
                  nuestros clientes.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p>
                  Obtención de la certificación de soldadura AWS y actualización integral de los protocolos de
                  Seguridad y Salud en el Trabajo (Res. 0312/2019).
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold font-heading">2020</h3>
                <p className="text-neutral/80">Certificación AWS y SG-SST</p>
              </div>
            </div>

            {/* 2023 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold font-heading">2023</h3>
                <p className="text-neutral/80">Proyecto récord</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-1.5 md:mt-0"></div>
              <div className="md:w-1/2 md:pl-8">
                <p>
                  Culminación del proyecto de malla más grande hasta la fecha (5.000 Mts) en el Valle del Cauca.
                </p>
              </div>
            </div>

            {/* Fin de la línea */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-neutral-light rounded-full -ml-2 md:-ml-2 mt-1.5"></div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Quieres conocer más sobre Fabrimallas®?"
        description="Nuestro equipo está preparado para asesorarte y ofrecerte la mejor solución."
        buttonText="COTIZA AHORA"
        buttonLink="/contacto"
      />
    </div>
  )
}

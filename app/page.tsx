import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, PenToolIcon as Tool, Truck } from "lucide-react"
import CTABanner from "@/components/cta-banner"
import ProductCard from "@/components/product-card"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/Malla6.jpg"
          alt="Cerramiento Fabrimallas"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6">
              Fabrimallas®: Más de 40 años tejiendo protección y seguridad.
            </h1>
            <p className="text-xl text-white mb-8">
              Soluciones de cerramientos y gaviones con la más alta calidad artesanal para proyectos residenciales,
              industriales y de construcción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contacto">COTIZA TU PROYECTO</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/productos">VER PRODUCTOS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores Section */}
      <section className="py-20 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">
            Soluciones para Todos los Sectores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Construcción */}
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tool className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Construcción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral">
                  Soluciones de gaviones y mallas para control de erosión, estabilización de taludes y proyectos de
                  infraestructura que cumplen con las normas INVÍAS E-681 y NTC 2403.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/sectores/construccion" className="text-primary font-medium flex items-center">
                  Ver soluciones para Construcción
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Industria/Agro */}
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Industria y Agro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral">
                  Cerramientos de seguridad, divisiones y protecciones para entornos industriales y agrícolas que
                  garantizan durabilidad y resistencia en condiciones exigentes.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/sectores/industria-agro" className="text-primary font-medium flex items-center">
                  Ver soluciones para Industria y Agro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Residencial */}
            <Card className="border-none shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Residencial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral">
                  Cerramientos estéticos y funcionales para propiedades residenciales que combinan seguridad,
                  durabilidad y un acabado profesional que realza el valor de su propiedad.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/sectores/residencial" className="text-primary font-medium flex items-center">
                  Ver soluciones para Residencial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciadores Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">
            ¿Por qué elegir Fabrimallas®?
          </h2>

          <Tabs defaultValue="artesania" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="artesania">Artesanía en Gaviones</TabsTrigger>
              <TabsTrigger value="malla">Malla Eslabonada</TabsTrigger>
              <TabsTrigger value="servicio">Servicio Llave en Mano</TabsTrigger>
              <TabsTrigger value="regional">Enfoque Regional</TabsTrigger>
            </TabsList>

            <TabsContent value="artesania" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/Gaviones1.jpg"
                    alt="Artesanía en Gaviones"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Artesanía en Gaviones (también conocidos como malla de triple torsión)</h3>
                  <p className="mb-4">
                    Nuestros gaviones son tejidos a mano por artesanos expertos, garantizando una calidad superior y una
                    resistencia excepcional. Cada pieza es inspeccionada individualmente para asegurar la máxima
                    durabilidad.
                  </p>
                  <p>
                    A diferencia de los productos industriales, nuestros gaviones artesanales ofrecen mayor resistencia
                    a la tensión, mejor adaptabilidad al terreno y una estética superior que realza cualquier proyecto.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="malla" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/Malla1.jpg"
                    alt="Malla Triple Torsión"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Malla Eslabonada</h3>
                  <p className="mb-4">
                    Nuestra malla eslabonada cumple con las normas aplicables, garantizando la máxima resistencia y durabilidad en cualquier condición climática.
                  </p>
                  <p>
                    El galvanizado de alta calidad proporciona una protección superior contra la corrosión, extendiendo
                    significativamente la vida útil de nuestros productos en comparación con alternativas estándar del
                    mercado.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="servicio" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/PuertaAlmacenFinca.jpg"
                    alt="Servicio Llave en Mano"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Servicio Llave en Mano</h3>
                  <p className="mb-4">
                    Ofrecemos un servicio integral que incluye asesoría técnica, diseño, fabricación e instalación,
                    permitiéndole despreocuparse completamente del proyecto.
                  </p>
                  <p>
                    Nuestro equipo de instaladores certificados garantiza un acabado profesional y una ejecución
                    perfecta, cumpliendo con los más altos estándares de calidad y seguridad.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="regional" className="p-6 bg-neutral-light/20 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/Malla5.jpg"
                    alt="Enfoque Regional"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">Enfoque Regional Suroccidente</h3>
                  <p className="mb-4">
                    Nuestra especialización en el suroccidente colombiano nos permite ofrecer tiempos de respuesta más
                    rápidos y un conocimiento profundo de las necesidades y condiciones locales.
                  </p>
                  <p>
                    Contamos con una red logística optimizada para la región, reduciendo costos y tiempos de entrega, y
                    ofreciendo un soporte técnico cercano y personalizado para cada cliente.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">Nuestros Productos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Malla Eslabonada"
              description="Malla tejida de alambre galvanizado ideal para cerramientos perimetrales."
              imageSrc="/Malla7.jpg"
              url="/productos/malla-triple-torsion"
            />

            <ProductCard
              title="Gaviones"
              description="Estructuras de contención y decorativas fabricadas artesanalmente con la más alta calidad (también conocidos como malla de triple torsión)."
              imageSrc="/Gaviones1.jpg"
              url="/productos/gaviones"
            />

            <ProductCard
              title="Cerramientos Integrales"
              description="Soluciones completas de cerramiento para propiedades residenciales, industriales y comerciales."
              imageSrc="/MallaEnBodega.jpg"
              url="/productos/cerramientos-integrales"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/productos">
                Ver todos los productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proyectos Recientes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">Proyectos Exitosos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Cerramiento Industrial Zona Franca"
              location="Cali, Valle del Cauca"
              category="Cerramiento Industrial"
              imageSrc="/PuertaAlmacenFinca2.jpg"
              url="/proyectos/cerramiento-industrial-zona-franca"
            />

            <ProjectCard
              title="Gaviones para Control de Erosión"
              location="Popayán, Cauca"
              category="Gaviones"
              imageSrc="/Gaviones3.jpg"
              url="/proyectos/gaviones-control-erosion-popayan"
            />

            <ProjectCard
              title="Cerramiento Residencial Condominio"
              location="Jamundí, Valle del Cauca"
              category="Cerramiento Residencial"
              imageSrc="/RejaCasa.jpg"
              url="/proyectos/cerramiento-residencial-condominio"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/proyectos">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proceso Artesanal en Acción -> Replaced with YouTube Embed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-heading">
            Nuestro Proceso Artesanal en Acción
          </h2>
          <p className="text-center text-lg text-neutral/80 max-w-2xl mx-auto mb-12">
            Mira cómo nuestros artesanos expertos transforman el alambre en soluciones duraderas y confiables.
          </p>
          <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            {/* YouTube Iframe Embed */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/a6N4uMUi5yg"
              title="Proceso Artesanal Fabrimallas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">
            Lo que dicen nuestros clientes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="La calidad de los gaviones de Fabrimallas es excepcional. El acabado artesanal marca una diferencia notable comparado con otros proveedores que habíamos utilizado anteriormente."
              author="Ing. Carlos Martínez"
              company="Constructora Occidental"
            />

            <TestimonialCard
              quote="El servicio llave en mano nos permitió despreocuparnos completamente del proyecto de cerramiento. Cumplieron con los plazos y el resultado final superó nuestras expectativas."
              author="María Fernanda López"
              company="Agroindustrias del Valle"
            />

            <TestimonialCard
              quote="La asesoría técnica fue fundamental para elegir la solución adecuada para nuestro terreno. El equipo de Fabrimallas demostró un conocimiento profundo y nos ofreció alternativas que no habíamos considerado."
              author="Arq. Javier Ramírez"
              company="Estudio de Arquitectura Ramírez & Asociados"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Listo para iniciar tu proyecto?"
        description="Nuestro equipo está preparado para asesorarte y ofrecerte la mejor solución para tus necesidades."
        buttonText="COTIZA TU PROYECTO"
        buttonLink="/contacto"
      />
    </div>
  )
}

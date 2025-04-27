import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import ProductCard from "@/components/product-card"
import ProductCardCarousel from "@/components/product-card-carousel"
import CTABanner from "@/components/cta-banner"

export default function ProductosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Nuestros Productos
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Descubre nuestra gama completa de soluciones en cerramientos, mallas y gaviones fabricados con la más alta
            calidad artesanal.
          </p>
          <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            <a href="/Fabrimallas_Especificaciones_Sectores_v2.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Descargar Guía de Especificaciones (PDF)
            </a>
          </Button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-12">
              <TabsTrigger value="todos">Todos los Productos</TabsTrigger>
              <TabsTrigger value="mallas">Mallas</TabsTrigger>
              <TabsTrigger value="gaviones">Gaviones</TabsTrigger>
              <TabsTrigger value="cerramientos">Cerramientos</TabsTrigger>
            </TabsList>

            {/* Todos los Productos */}
            <TabsContent value="todos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProductCard
                  title="Gaviones"
                  description="Estructuras de contención y decorativas fabricadas artesanalmente con la más alta calidad (también conocidos como malla de triple torsión)."
                  imageSrc="/Gaviones1.jpg"
                  url="/productos/gaviones"
                />

                <ProductCard
                  title="Cerramientos Integrales"
                  description="Soluciones completas de cerramiento para propiedades residenciales, industriales y comerciales."
                  imageSrc="/Fachada1.jpg"
                  url="/productos/cerramientos-integrales"
                />

                <ProductCard
                  title="Malla Eslabonada"
                  description="Malla versátil para cerramientos de seguridad con excelente relación costo-beneficio."
                  imageSrc="/Malla7.jpg"
                  url="/productos/malla-eslabonada"
                />

                <ProductCard
                  title="Concertina"
                  description="Alambre de seguridad en espiral para reforzar la protección de cerramientos perimetrales."
                  imageSrc="/Concertina1.jpg"
                  url="/productos/concertina"
                />

                <ProductCard
                  title="Malla Electrosoldada"
                  description="Malla rígida de alta resistencia para cerramientos industriales y de seguridad."
                  imageSrc="/Malla3.jpg"
                  url="/productos/malla-electrosoldada"
                />

                <ProductCard
                  title="Gaviones Decorativos"
                  description="Soluciones estéticas para paisajismo y arquitectura con acabados personalizados."
                  imageSrc="/Gaviones4.jpg"
                  url="/productos/gaviones-decorativos"
                />

                <ProductCard
                  title="Cerramientos Industriales"
                  description="Sistemas de alta seguridad para protección de instalaciones industriales y comerciales."
                  imageSrc="/PuertaAlmacenFinca.jpg"
                  url="/productos/cerramientos-industriales"
                />

                <ProductCard
                  title="Cerramientos Residenciales"
                  description="Soluciones estéticas y funcionales para propiedades residenciales y condominios."
                  imageSrc="/RejaCasa.jpg"
                  url="/productos/cerramientos-residenciales"
                />

                <ProductCard
                  title="Juegos infantiles"
                  description="Diversión segura al estilo de los parques de la ciudad. Diseñamos y fabricamos columpios, resbaladeros y módulos trepadores con estructura de acero galvanizado y acabados de pintura epóxica no tóxica. Cumplen normas de seguridad, resisten la intemperie y llegan listos para instalar y disfrutar."
                  imageSrc="/Juegos1.png"
                  url="/productos/juegos-infantiles"
                />

                <ProductCard
                  title="Tapones de aluminio"
                  description="Sella el poste, bloquea la humedad. Nuestros tapones a presión evitan que el agua entre al tubo, frenan la corrosión y dan un remate limpio y profesional a tu cerramiento. Diámetros disponibles: 1″, 1 ¼″, 1 ½″, 2″, 2 ½″, 3″ y 4″."
                  imageSrc="/Tapones2.jpg"
                  url="/productos/tapones-aluminio"
                />

                <ProductCardCarousel
                  title="Puertas"
                  description="Madera: calidez y carácter en tablones macizos, tratada contra humedad e insectos. Malla eslabonada: acceso ligero y seguro, ideal para fincas y áreas deportivas; marco tubular soldado. Malla electrosoldada: máxima rigidez para industrias y bodegas; cuadriculado uniforme y acabado galvanizado. Cada modelo se fabrica a medida, incluye bisagras de alta resistencia y opción de cerradura integrada."
                  imageSrcs={["/Puerta7.jpg", "/Puerta1.jpg", "/Puerta2.jpg"]}
                  url="/productos/puertas"
                />

                <ProductCard
                  title="Cerrajería"
                  description="Remata tus escaleras con nuestros pasamanos de acero: soldadura continua, pintura anticorrosiva y anclajes firmes para una sujeción cómoda y duradera. También desarrollamos barandas, barbollas y otros trabajos de cerrajería a la medida, con el mismo sello de calidad Fabrimallas®."
                  imageSrc="/Cerrajeria1.png"
                  url="/productos/cerrajeria"
                />
              </div>
            </TabsContent>

            {/* Mallas */}
            <TabsContent value="mallas">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProductCard
                  title="Malla Eslabonada"
                  description="Malla versátil para cerramientos de seguridad con excelente relación costo-beneficio."
                  imageSrc="/Malla7.jpg"
                  url="/productos/malla-eslabonada"
                />

                <ProductCard
                  title="Malla Electrosoldada"
                  description="Malla rígida de alta resistencia para cerramientos industriales y de seguridad."
                  imageSrc="/Malla3.jpg"
                  url="/productos/malla-electrosoldada"
                />
              </div>
            </TabsContent>

            {/* Gaviones */}
            <TabsContent value="gaviones">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProductCard
                  title="Gaviones"
                  description="Estructuras de contención y decorativas fabricadas artesanalmente con la más alta calidad (también conocidos como malla de triple torsión)."
                  imageSrc="/Gaviones1.jpg"
                  url="/productos/gaviones"
                />

                <ProductCard
                  title="Gaviones Decorativos"
                  description="Soluciones estéticas para paisajismo y arquitectura con acabados personalizados."
                  imageSrc="/Gaviones4.jpg"
                  url="/productos/gaviones-decorativos"
                />
              </div>
            </TabsContent>

            {/* Cerramientos */}
            <TabsContent value="cerramientos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProductCard
                  title="Cerramientos Integrales"
                  description="Soluciones completas de cerramiento para propiedades residenciales, industriales y comerciales."
                  imageSrc="/Fachada1.jpg"
                  url="/productos/cerramientos-integrales"
                />

                <ProductCard
                  title="Cerramientos Industriales"
                  description="Sistemas de alta seguridad para protección de instalaciones industriales y comerciales."
                  imageSrc="/PuertaAlmacenFinca.jpg"
                  url="/productos/cerramientos-industriales"
                />

                <ProductCard
                  title="Cerramientos Residenciales"
                  description="Soluciones estéticas y funcionales para propiedades residenciales y condominios."
                  imageSrc="/RejaCasa.jpg"
                  url="/productos/cerramientos-residenciales"
                />

                <ProductCard
                  title="Concertina"
                  description="Alambre de seguridad en espiral para reforzar la protección de cerramientos perimetrales."
                  imageSrc="/Concertina1.jpg"
                  url="/productos/concertina"
                />

                <ProductCardCarousel
                  title="Puertas"
                  description="Madera: calidez y carácter en tablones macizos, tratada contra humedad e insectos. Malla eslabonada: acceso ligero y seguro, ideal para fincas y áreas deportivas; marco tubular soldado. Malla electrosoldada: máxima rigidez para industrias y bodegas; cuadriculado uniforme y acabado galvanizado. Cada modelo se fabrica a medida, incluye bisagras de alta resistencia y opción de cerradura integrada."
                  imageSrcs={["/Puerta7.jpg", "/Puerta1.jpg", "/Puerta2.jpg"]}
                  url="/productos/puertas"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Productos Destacados</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src="/HaciendoGavion1.jpg"
                alt="Gaviones Artesanales"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block bg-primary text-white px-3 py-1 text-sm font-medium mb-3">Destacado</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Gaviones Artesanales</h3>
                <p className="text-white/80 mb-4">
                  Nuestros gaviones artesanales ofrecen mayor resistencia, durabilidad y adaptabilidad que las
                  alternativas industriales.
                </p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-neutral">
                  <Link href="/productos/gaviones">
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src="/MallaEnBodega.jpg"
                alt="Cerramientos Integrales"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block bg-primary text-white px-3 py-1 text-sm font-medium mb-3">Destacado</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Cerramientos Integrales</h3>
                <p className="text-white/80 mb-4">
                  Soluciones completas que incluyen diseño, fabricación e instalación para todo tipo de propiedades.
                </p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-neutral">
                  <Link href="/productos/cerramientos-integrales">
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Beneficios de Nuestros Productos</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Calidad Artesanal</h3>
              <p>
                Todos nuestros productos son fabricados artesanalmente, lo que garantiza un control de calidad superior
                y mayor resistencia que los productos industriales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 8V2" />
                  <path d="M15 8V2" />
                  <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Durabilidad Superior</h3>
              <p>
                Utilizamos materiales de la más alta calidad y técnicas de fabricación que garantizan una vida útil
                prolongada, incluso en condiciones ambientales adversas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Cumplimiento Normativo</h3>
              <p>
                Todos nuestros productos cumplen con las normas técnicas nacionales e internacionales, como INVÍAS
                E-681, NTC 2403 y ASTM A975, A641.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas un producto específico?"
        description="Contáctanos para obtener una cotización personalizada para tu proyecto."
        buttonText="SOLICITAR COTIZACIÓN"
        buttonLink="/contacto"
      />
    </div>
  )
}

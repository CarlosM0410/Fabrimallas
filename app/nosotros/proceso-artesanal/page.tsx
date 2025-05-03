import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CTABanner from "@/components/cta-banner"
import Link from "next/link"

export default function ProcesoArtesanalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Nuestro Proceso Artesanal
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Descubre cómo fabricamos nuestros gaviones y mallas con técnicas artesanales que garantizan la más alta
            calidad y durabilidad.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">La Artesanía que nos Distingue</h2>
              <p className="mb-4">
                En Fabrimallas®, mantenemos viva la tradición artesanal en la fabricación de gaviones y mallas,
                combinándola con tecnología moderna para ofrecer productos de calidad superior. Nuestro proceso
                artesanal es lo que nos distingue de la producción industrial masiva, permitiéndonos crear productos con
                mayor resistencia, durabilidad y adaptabilidad.
              </p>
              <p>
                Cada gavión que fabricamos pasa por las manos expertas de nuestros artesanos, quienes aplican técnicas
                tradicionales perfeccionadas a lo largo de generaciones. Este enfoque nos permite realizar inspecciones
                individuales de cada pieza, garantizando que cumplan con nuestros rigurosos estándares de calidad antes
                de llegar a nuestros clientes.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/HaciendoGavion1.jpg"
                  alt="Artesano tejiendo malla para gaviones"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">El Proceso de Fabricación Artesanal</h2>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/Chipa2.jpg"
                  alt="Selección de alambre galvanizado de alta calidad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold font-heading">Selección de Materiales</h3>
              </div>
              <p className="mb-4">
                El proceso comienza con la cuidadosa selección de los materiales. Utilizamos alambre galvanizado de la
                más alta calidad, que cumple con las normas INVÍAS E-681, NTC 2403 y ASTM A975, A641. Cada rollo de
                alambre es inspeccionado para verificar su calibre, recubrimiento galvanizado y resistencia a la
                tensión.
              </p>
              <p>
                La calidad del alambre es fundamental para garantizar la durabilidad y resistencia de nuestros
                productos, especialmente en condiciones ambientales adversas como la exposición a la intemperie o
                ambientes corrosivos.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/HaciendoGavion4.jpg"
                  alt="Artesano tejiendo malla de triple torsión manualmente"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold font-heading">Tejido Manual de la Malla</h3>
              </div>
              <p className="mb-4">
                El tejido de la malla hexagonal de triple torsión se realiza manualmente por nuestros artesanos
                especializados. Utilizando técnicas tradicionales, cada artesano teje la malla con precisión,
                asegurándose de que cada hexágono tenga las dimensiones exactas según las especificaciones requeridas.
              </p>
              <p>
                Este proceso artesanal permite un control de calidad superior, ya que cada sección de la malla es
                inspeccionada durante su fabricación. La triple torsión en los alambres proporciona mayor resistencia y
                evita que la malla se deshilache si algún alambre llegara a romperse.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/Gaviones2.jpg"
                  alt="Control de calidad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold font-heading">Control de Calidad</h3>
              </div>
              <p className="mb-4">
                Cada gavión terminado pasa por un riguroso proceso de control de calidad. Nuestros supervisores
                verifican:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>La uniformidad y precisión del tejido hexagonal</li>
                <li>La resistencia de las uniones y aristas</li>
                <li>Las dimensiones exactas según las especificaciones</li>
                <li>La calidad del galvanizado en toda la estructura</li>
              </ul>
              <p>
                Solo los gaviones que cumplen con todos nuestros estándares de calidad son aprobados para su entrega e
                instalación.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/Gaviones4.jpg"
                  alt="Armado de gaviones listos para instalación"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <h3 className="text-2xl font-bold font-heading">Armado de Gaviones</h3>
              </div>
              <p className="mb-4">
                Una vez tejida la malla, se procede al armado de los gaviones según las dimensiones requeridas. Este
                proceso incluye el doblado para formar las caras del gavión y la unión de las aristas mediante alambre
                galvanizado de alta resistencia.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/Gaviones3.jpg"
                  alt="Instalación en obra"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  5
                </div>
                <h3 className="text-2xl font-bold font-heading">Instalación en Obra</h3>
              </div>
              <p className="mb-4">
                El proceso artesanal no termina en la fabricación. El equipos de instalación está formados por técnicos especializados que conocen a fondo las características de nuestros productos y las mejores prácticas para su colocación.
              </p>
              <p className="mb-4">
                La instalación incluye la preparación adecuada del terreno, la colocación precisa de los gaviones, su llenado con piedra seleccionada y el cierre y amarre final. Este enfoque integral garantiza que el producto final cumpla con todas las especificaciones técnicas y funcionales requeridas por el proyecto.
              </p>
              <p className="text-sm text-neutral/70">
                <em>Nota: Fabrimallas no cuenta con Tecnicos para la instalacion de gaviones.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Ventajas de Nuestro Proceso Artesanal</h2>

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
                      <path d="M12 22v-5" />
                      <path d="M9 8V2" />
                      <path d="M15 8V2" />
                      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Mayor Resistencia</h4>
                  <p>
                    El tejido manual y la inspección individual de cada pieza garantizan una mayor resistencia a la
                    tensión y durabilidad en comparación con productos fabricados industrialmente.
                  </p>
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Adaptabilidad</h4>
                  <p>
                    Nuestro proceso artesanal nos permite adaptar los productos a las necesidades específicas de cada
                    proyecto, ofreciendo soluciones personalizadas que se ajustan perfectamente a los requerimientos del
                    cliente.
                  </p>
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
                      <path d="M2 12h20" />
                      <path d="M12 2v20" />
                      <path d="m4.93 4.93 14.14 14.14" />
                      <path d="m19.07 4.93-14.14 14.14" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Control de Calidad Superior</h4>
                  <p>
                    Cada pieza es inspeccionada individualmente durante todo el proceso de fabricación, lo que nos
                    permite detectar y corregir cualquier imperfección antes de que el producto llegue al cliente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section - Updated to use local video */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 font-heading">Conoce Nuestro Proceso en Video</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Mira cómo nuestros artesanos fabrican gaviones y mallas con técnicas tradicionales combinadas con tecnología
            moderna.
          </p>
          <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            {/* HTML5 Video Player */}
            <video
              controls
              muted
              loop
              playsInline
              poster="/Soldando1.jpg" // Poster image from your files
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/SoldandoVideo.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 font-heading">Visita Nuestro Taller</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Te invitamos a conocer nuestro taller y ver de primera mano cómo fabricamos nuestros productos. Agenda una
            visita y descubre el valor de la artesanía en cada detalle.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contacto">AGENDAR VISITA</Link>
          </Button>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Buscas calidad artesanal para tu proyecto?"
        description="Nuestro equipo está listo para ofrecerte soluciones fabricadas con la más alta calidad artesanal."
        buttonText="SOLICITAR COTIZACIÓN"
        buttonLink="/contacto"
      />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import CTABanner from "@/components/cta-banner"

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  // En una implementación real, aquí se buscaría el artículo por su slug en una base de datos
  const slug = params.slug

  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <section className="py-12 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/blog" className="flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-neutral/70 mb-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>15 de marzo, 2023</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>Ing. María Rodríguez</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>Construcción</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Gaviones: Una solución sostenible para el control de erosión
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Gaviones: Una solución sostenible para el control de erosión"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Los gaviones se han convertido en una de las soluciones más efectivas y sostenibles para el control de
                erosión en diferentes tipos de terrenos. Estas estructuras, compuestas por cajas de malla metálica
                rellenas de piedras, ofrecen una combinación única de resistencia, flexibilidad y sostenibilidad que las
                hace ideales para proyectos de estabilización de suelos, protección de riberas y control de erosión.
              </p>

              <h2>¿Qué son los gaviones y cómo funcionan?</h2>

              <p>
                Los gaviones son estructuras en forma de cajas o cestas fabricadas con malla metálica de alta
                resistencia, generalmente malla triple torsión galvanizada, que se rellenan con piedras. Su
                funcionamiento se basa en varios principios:
              </p>

              <ul>
                <li>
                  <strong>Contención física:</strong> La estructura de malla y piedras crea una barrera física que
                  contiene el suelo y evita su desplazamiento.
                </li>
                <li>
                  <strong>Drenaje natural:</strong> Los espacios entre las piedras permiten el paso del agua, evitando
                  la acumulación de presión hidrostática que podría desestabilizar la estructura.
                </li>
                <li>
                  <strong>Flexibilidad estructural:</strong> A diferencia de estructuras rígidas como el concreto, los
                  gaviones pueden adaptarse a movimientos del terreno sin fracturarse.
                </li>
                <li>
                  <strong>Integración ecológica:</strong> Con el tiempo, los gaviones pueden integrarse al entorno
                  natural, permitiendo el crecimiento de vegetación entre las piedras.
                </li>
              </ul>

              <h2>Ventajas de los gaviones como solución sostenible</h2>

              <p>
                El uso de gaviones para el control de erosión presenta numerosas ventajas desde el punto de vista de la
                sostenibilidad:
              </p>

              <h3>1. Bajo impacto ambiental</h3>

              <p>
                A diferencia de soluciones como muros de concreto, los gaviones tienen un impacto ambiental
                significativamente menor:
              </p>

              <ul>
                <li>
                  No requieren grandes excavaciones ni cimentaciones profundas, minimizando la alteración del terreno.
                </li>
                <li>
                  Permiten utilizar materiales locales para el relleno (piedras de la zona), reduciendo la huella de
                  carbono asociada al transporte.
                </li>
                <li>
                  No alteran significativamente los patrones naturales de drenaje del terreno, manteniendo el equilibrio
                  hidrológico.
                </li>
              </ul>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Gaviones instalados en un talud"
                  fill
                  className="object-cover"
                />
              </div>

              <h3>2. Integración con el ecosistema</h3>

              <p>
                Una de las características más destacables de los gaviones es su capacidad para integrarse con el
                ecosistema circundante:
              </p>

              <ul>
                <li>
                  Los espacios entre las piedras permiten el desarrollo de vegetación, creando hábitats para diversas
                  especies.
                </li>
                <li>
                  Con el tiempo, la estructura puede quedar completamente cubierta de vegetación, mimetizándose con el
                  entorno natural.
                </li>
                <li>
                  Facilitan la creación de microhábitats para insectos y pequeños animales, contribuyendo a la
                  biodiversidad local.
                </li>
              </ul>

              <h3>3. Durabilidad y bajo mantenimiento</h3>

              <p>
                Los gaviones fabricados con materiales de calidad ofrecen una excelente relación costo-beneficio a largo
                plazo:
              </p>

              <ul>
                <li>
                  La malla triple torsión galvanizada de alta calidad puede tener una vida útil de 50 años o más en
                  condiciones normales.
                </li>
                <li>
                  Requieren mínimo mantenimiento una vez instalados, reduciendo costos operativos y el consumo de
                  recursos adicionales.
                </li>
                <li>
                  Su resistencia a condiciones climáticas adversas los hace especialmente adecuados para zonas con
                  lluvias intensas o variaciones extremas de temperatura.
                </li>
              </ul>

              <h2>Aplicaciones prácticas en el control de erosión</h2>

              <p>
                Los gaviones se utilizan en numerosas aplicaciones relacionadas con el control de erosión y la
                estabilización de terrenos:
              </p>

              <h3>Protección de riberas</h3>

              <p>
                Una de las aplicaciones más comunes es la protección de las orillas de ríos y arroyos contra la erosión
                causada por la corriente. Los gaviones crean una barrera resistente que protege el terreno mientras
                permite el flujo natural del agua.
              </p>

              <h3>Estabilización de taludes</h3>

              <p>
                En terrenos con pendientes pronunciadas, los gaviones se utilizan para crear muros de contención que
                evitan deslizamientos de tierra. Su flexibilidad les permite adaptarse a los movimientos naturales del
                terreno sin comprometer su integridad estructural.
              </p>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg my-8">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Gaviones para estabilización de taludes"
                  fill
                  className="object-cover"
                />
              </div>

              <h3>Control de cárcavas</h3>

              <p>
                Las cárcavas son zanjas profundas causadas por la erosión del agua. Los gaviones se utilizan para crear
                barreras escalonadas que reducen la velocidad del agua y permiten la acumulación de sedimentos,
                facilitando la recuperación natural del terreno.
              </p>

              <h3>Diques y barreras de control</h3>

              <p>
                En zonas propensas a inundaciones, los gaviones se emplean para crear diques y barreras que controlan el
                flujo del agua, reduciendo el riesgo de desbordamientos y la erosión asociada.
              </p>

              <h2>Consideraciones técnicas para una implementación exitosa</h2>

              <p>
                Para garantizar la efectividad y durabilidad de los gaviones como solución para el control de erosión,
                es fundamental considerar varios aspectos técnicos:
              </p>

              <h3>Calidad de los materiales</h3>

              <p>La durabilidad de los gaviones depende en gran medida de la calidad de los materiales utilizados:</p>

              <ul>
                <li>
                  <strong>Malla:</strong> Debe ser de triple torsión, galvanizada y cumplir con normas como INVÍAS
                  E-681, NTC 2403 o ASTM A975.
                </li>
                <li>
                  <strong>Piedras:</strong> Deben ser duras, no degradables y de tamaño adecuado para evitar que salgan
                  a través de la malla.
                </li>
                <li>
                  <strong>Alambre:</strong> El calibre y el recubrimiento galvanizado deben ser apropiados para las
                  condiciones ambientales del sitio.
                </li>
              </ul>

              <h3>Diseño e instalación profesional</h3>

              <p>
                Un diseño adecuado y una instalación profesional son cruciales para el éxito de cualquier proyecto con
                gaviones:
              </p>

              <ul>
                <li>
                  El diseño debe considerar las características específicas del terreno, las cargas esperadas y las
                  condiciones hidrológicas.
                </li>
                <li>
                  La preparación adecuada del terreno es fundamental para garantizar la estabilidad de la estructura.
                </li>
                <li>
                  El armado y llenado de los gaviones debe realizarse siguiendo técnicas específicas que garanticen su
                  resistencia y durabilidad.
                </li>
              </ul>

              <h2>Conclusión</h2>

              <p>
                Los gaviones representan una solución sostenible y efectiva para el control de erosión en diversos
                contextos. Su combinación de resistencia, flexibilidad, integración ecológica y bajo impacto ambiental
                los convierte en una alternativa preferible a soluciones más tradicionales y menos sostenibles como los
                muros de concreto.
              </p>

              <p>
                En Fabrimallas®, nos especializamos en la fabricación artesanal de gaviones de la más alta calidad,
                cumpliendo con todas las normativas técnicas y ofreciendo un servicio integral que incluye asesoría,
                diseño, fabricación e instalación. Nuestro compromiso con la sostenibilidad y la excelencia técnica nos
                permite ofrecer soluciones duraderas y respetuosas con el medio ambiente para el control de erosión y la
                estabilización de terrenos.
              </p>
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-6 border-t">
              <p className="font-bold mb-4">Comparte este artículo:</p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Compartir en Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Compartir en Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Compartir en LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Compartir por Email</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas una solución para control de erosión?"
        description="Nuestro equipo de expertos está listo para asesorarte en tu proyecto de gaviones o estabilización de terrenos."
        buttonText="SOLICITAR ASESORÍA"
        buttonUrl="/contacto"
      />
    </div>
  )
}

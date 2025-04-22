import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TerminosCondicionesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-neutral py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center font-heading">Términos y Condiciones</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>

            <div className="prose prose-lg max-w-none">
              <p>
                <strong>Última actualización:</strong> 15 de abril de 2023
              </p>

              <h2>1. Introducción</h2>
              <p>
                Estos términos y condiciones rigen el uso de nuestro sitio web ubicado en www.fabrimallas.com (en
                adelante, "el Sitio") operado por Fabrimallas® (en adelante, "la Empresa", "nosotros", "nos" o
                "nuestro"). Al acceder o utilizar el Sitio, usted acepta estar sujeto a estos términos y condiciones. Si
                no está de acuerdo con alguna parte de estos términos y condiciones, no podrá acceder al Sitio.
              </p>

              <h2>2. Propiedad Intelectual</h2>
              <p>
                El Sitio y todo su contenido original, características y funcionalidad son propiedad de Fabrimallas® y
                están protegidos por leyes internacionales de derechos de autor, marcas registradas, patentes, secretos
                comerciales y otras leyes de propiedad intelectual o derechos de propiedad.
              </p>

              <h2>3. Uso del Sitio</h2>
              <p>
                Se le otorga una licencia limitada, no exclusiva, intransferible y revocable para acceder y utilizar el
                Sitio estrictamente de acuerdo con estos términos y condiciones. Como condición de su uso del Sitio,
                usted garantiza que:
              </p>
              <ul>
                <li>Es mayor de 18 años o cuenta con la supervisión de un adulto.</li>
                <li>
                  Proporcionará información precisa, actualizada y completa cuando se le solicite en cualquier
                  formulario de registro en el Sitio.
                </li>
                <li>
                  Mantendrá y actualizará prontamente la información de registro para mantenerla precisa, actualizada y
                  completa.
                </li>
                <li>
                  No accederá al Sitio por medios automatizados o no humanos, ya sea a través de un bot, script u otro
                  método.
                </li>
                <li>No utilizará el Sitio para ningún propósito ilegal o no autorizado.</li>
                <li>Su uso del Sitio no violará ninguna ley o regulación aplicable.</li>
              </ul>

              <h2>4. Productos y Servicios</h2>
              <p>
                Todos los productos y servicios mostrados en el Sitio están sujetos a disponibilidad. Las descripciones
                de los productos o servicios y sus precios pueden cambiar en cualquier momento sin previo aviso, a
                discreción exclusiva de la Empresa.
              </p>
              <p>
                La Empresa se reserva el derecho de limitar las ventas de sus productos o servicios a cualquier persona,
                región geográfica o jurisdicción. La Empresa puede ejercer este derecho caso por caso.
              </p>
              <p>
                La Empresa no garantiza que la calidad de los productos, servicios, información u otro material comprado
                u obtenido por usted cumplirá con sus expectativas, o que cualquier error en el Servicio será corregido.
              </p>

              <h2>5. Precisión de la Información</h2>
              <p>
                Nos esforzamos por proporcionar información precisa y actualizada en nuestro Sitio. Sin embargo, no
                garantizamos que toda la información sea precisa, completa o actualizada. El material en este Sitio se
                proporciona solo para información general y no debe ser utilizado como base única para tomar decisiones
                sin consultar fuentes de información primarias, más precisas, más completas o más oportunas.
              </p>
              <p>
                Cualquier confianza en el material de este Sitio es bajo su propio riesgo. Este Sitio puede contener
                cierta información histórica, que no es necesariamente actual y se proporciona solo para su referencia.
                Nos reservamos el derecho de modificar el contenido de este Sitio en cualquier momento, pero no tenemos
                obligación de actualizar ninguna información en nuestro Sitio.
              </p>

              <h2>6. Limitación de Responsabilidad</h2>
              <p>
                En ningún caso Fabrimallas®, ni sus directores, empleados, socios, agentes, proveedores o afiliados,
                serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo,
                incluyendo sin limitación, pérdida de ganancias, datos, uso, buena voluntad, u otras pérdidas
                intangibles, resultantes de:
              </p>
              <ul>
                <li>Su acceso o uso o incapacidad para acceder o usar el Sitio.</li>
                <li>Cualquier conducta o contenido de terceros en el Sitio.</li>
                <li>Cualquier contenido obtenido del Sitio.</li>
                <li>
                  Acceso no autorizado, uso o alteración de sus transmisiones o contenido, ya sea basado en garantía,
                  contrato, agravio (incluyendo negligencia) o cualquier otra teoría legal, ya sea que hayamos sido
                  informados o no de la posibilidad de tal daño.
                </li>
              </ul>

              <h2>7. Indemnización</h2>
              <p>
                Usted acepta indemnizar, defender y mantener indemne a Fabrimallas® y a sus licenciantes, afiliados,
                funcionarios, agentes, empleados, socios y proveedores de cualquier reclamo o demanda, incluyendo
                honorarios razonables de abogados, realizados por cualquier tercero debido a o que surja de su violación
                de estos Términos y Condiciones o los documentos que incorporan por referencia, o su violación de
                cualquier ley o los derechos de un tercero.
              </p>

              <h2>8. Ley Aplicable</h2>
              <p>
                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de Colombia, sin tener
                en cuenta sus disposiciones sobre conflictos de leyes.
              </p>
              <p>
                Nuestra falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos y
                Condiciones no constituirá una renuncia a tal derecho o disposición. Si alguna disposición de estos
                Términos y Condiciones es considerada por un tribunal de jurisdicción competente como inválida, las
                partes acuerdan que el tribunal debe esforzarse por dar efecto a las intenciones de las partes como se
                refleja en la disposición, y las otras disposiciones de estos Términos y Condiciones permanecen en pleno
                vigor y efecto.
              </p>

              <h2>9. Cambios a los Términos y Condiciones</h2>
              <p>
                Nos reservamos el derecho, a nuestra sola discreción, de actualizar, cambiar o reemplazar cualquier
                parte de estos Términos y Condiciones publicando actualizaciones y cambios en nuestro Sitio. Es su
                responsabilidad revisar nuestro Sitio periódicamente para ver los cambios. Su uso continuado de o acceso
                a nuestro Sitio después de la publicación de cualquier cambio a estos Términos y Condiciones constituye
                la aceptación de esos cambios.
              </p>

              <h2>10. Contacto</h2>
              <p>Si tiene alguna pregunta sobre estos Términos y Condiciones, contáctenos en:</p>
              <p>
                <strong>Fabrimallas®</strong>
                <br />
                Calle 123 #45-67, Cali, Valle del Cauca, Colombia
                <br />
                Email: info@fabrimallas.com
                <br />
                Teléfono: +57 (2) 123 4567
              </p>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

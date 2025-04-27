import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PoliticaGarantiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-neutral py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center font-heading">Política de Garantía</h1>
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
                En Fabrimallas® nos comprometemos a ofrecer productos de la más alta calidad. Nuestra política de
                garantía refleja la confianza que tenemos en nuestros procesos de fabricación y en los materiales que
                utilizamos.
              </p>

              <h2>Cobertura de la Garantía</h2>
              <p>
                Todos nuestros productos están cubiertos por una garantía contra defectos de fabricación por un período
                de:
              </p>
              <ul>
                <li>5 años para mallas y gaviones galvanizados</li>
                <li>3 años para cerramientos integrales</li>
                <li>2 años para accesorios y componentes</li>
              </ul>

              <h2>Condiciones de la Garantía</h2>
              <p>
                La garantía cubre exclusivamente defectos de fabricación que afecten la funcionalidad del producto. Para
                que la garantía sea válida, deben cumplirse las siguientes condiciones:
              </p>
              <ul>
                <li>El producto debe haber sido instalado siguiendo nuestras recomendaciones técnicas</li>
                <li>El producto debe haber sido utilizado para el fin para el cual fue diseñado</li>
                <li>El mantenimiento debe haberse realizado según nuestras indicaciones</li>
                <li>El cliente debe presentar la factura de compra original</li>
              </ul>

              <h2>Exclusiones</h2>
              <p>La garantía no cubre:</p>
              <ul>
                <li>Daños causados por uso indebido o abuso del producto</li>
                <li>Deterioro normal por exposición a condiciones ambientales extremas</li>
                <li>Daños causados por desastres naturales</li>
                <li>
                  Oxidación o corrosión en ambientes altamente corrosivos (zonas costeras o industriales) sin
                  tratamiento adicional
                </li>
                <li>Modificaciones realizadas al producto sin autorización de Fabrimallas®</li>
                <li>Daños durante el transporte (si el transporte no fue realizado por Fabrimallas®)</li>
              </ul>

              <h2>Procedimiento para Reclamos</h2>
              <p>Para hacer efectiva la garantía, el cliente debe:</p>
              <ol>
                <li>Notificar a Fabrimallas® sobre el defecto dentro de los 15 días siguientes a su detección</li>
                <li>Presentar la factura original de compra</li>
                <li>Permitir la inspección del producto por parte de nuestro personal técnico</li>
                <li>Proporcionar fotografías o videos que evidencien el defecto, cuando sea posible</li>
              </ol>

              <h2>Resolución de Reclamos</h2>
              <p>Una vez verificado el defecto de fabricación, Fabrimallas® procederá, a su elección, a:</p>
              <ul>
                <li>Reparar el producto defectuoso</li>
                <li>Reemplazar el producto o la parte defectuosa</li>
                <li>Reembolsar el valor proporcional del producto según el tiempo de uso</li>
              </ul>

              <h2>Limitación de Responsabilidad</h2>
              <p>
                La responsabilidad de Fabrimallas® se limita al valor del producto adquirido. En ningún caso
                Fabrimallas® será responsable por daños indirectos, incidentales o consecuenciales.
              </p>

              <h2>Derechos Legales</h2>
              <p>
                Esta garantía otorga derechos legales específicos y el cliente puede tener otros derechos que varían
                según las leyes locales. Esta garantía no afecta los derechos legales del consumidor establecidos por la
                ley.
              </p>

              <h2>Contacto</h2>
              <p>
                Para cualquier consulta relacionada con nuestra política de garantía, por favor contacte a nuestro
                departamento de servicio al cliente:
              </p>
              <p className="mb-2">
                <strong>Teléfono:</strong> 300 656 4547
              </p>
              <p className="mb-2">
                <strong>Correo electrónico:</strong> fabrimallas2011@hotmail.com
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contacto">Contactar Servicio al Cliente</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

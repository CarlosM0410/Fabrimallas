import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PoliticaPrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-neutral py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center font-heading">Política de Privacidad</h1>
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
                En Fabrimallas® (en adelante, "nosotros", "nuestra", "nuestro" o "la Empresa"), respetamos su privacidad
                y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo
                cuidamos sus datos personales cuando visita nuestro sitio web (independientemente de dónde lo visite) y
                le informará sobre sus derechos de privacidad y cómo la ley lo protege.
              </p>

              <h2>2. Datos que recopilamos sobre usted</h2>
              <p>
                Datos personales, o información personal, significa cualquier información sobre un individuo a partir de
                la cual esa persona puede ser identificada. No incluye datos donde la identidad ha sido eliminada (datos
                anónimos).
              </p>
              <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
              <ul>
                <li>
                  <strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador
                  similar.
                </li>
                <li>
                  <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección
                  de correo electrónico y números de teléfono.
                </li>
                <li>
                  <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de
                  sesión, tipo y versión de navegador, configuración de zona horaria y ubicación, tipos y versiones de
                  complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
                  utiliza para acceder a este sitio web.
                </li>
                <li>
                  <strong>Datos de perfil:</strong> incluye su nombre de usuario y contraseña, compras o pedidos
                  realizados por usted, sus intereses, preferencias, comentarios y respuestas a encuestas.
                </li>
                <li>
                  <strong>Datos de uso:</strong> incluye información sobre cómo utiliza nuestro sitio web, productos y
                  servicios.
                </li>
                <li>
                  <strong>Datos de marketing y comunicaciones:</strong> incluye sus preferencias para recibir marketing
                  de nuestra parte y de terceros, y sus preferencias de comunicación.
                </li>
              </ul>

              <h2>3. Cómo recopilamos sus datos personales</h2>
              <p>Utilizamos diferentes métodos para recopilar datos de y sobre usted, incluyendo:</p>
              <ul>
                <li>
                  <strong>Interacciones directas:</strong> Puede proporcionarnos sus datos de identidad, contacto y
                  financieros al completar formularios o al comunicarse con nosotros por correo postal, teléfono, correo
                  electrónico o de otra manera.
                </li>
                <li>
                  <strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúa con nuestro sitio
                  web, podemos recopilar automáticamente datos técnicos sobre su equipo, acciones de navegación y
                  patrones. Recopilamos estos datos personales mediante cookies, registros del servidor y otras
                  tecnologías similares.
                </li>
                <li>
                  <strong>Terceros o fuentes disponibles públicamente:</strong> Podemos recibir datos personales sobre
                  usted de varios terceros y fuentes públicas.
                </li>
              </ul>

              <h2>4. Cómo utilizamos sus datos personales</h2>
              <p>
                Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus
                datos personales en las siguientes circunstancias:
              </p>
              <ul>
                <li>
                  Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.
                </li>
                <li>
                  Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y
                  derechos fundamentales no anulen esos intereses.
                </li>
                <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
              </ul>

              <h2>5. Divulgación de sus datos personales</h2>
              <p>Podemos compartir sus datos personales con las partes establecidas a continuación:</p>
              <ul>
                <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
                <li>Asesores profesionales que incluyen abogados, banqueros, auditores y aseguradores.</li>
                <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
                <li>
                  Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
                  activos. Alternativamente, podemos buscar adquirir otros negocios o fusionarnos con ellos.
                </li>
              </ul>
              <p>
                Requerimos a todos los terceros que respeten la seguridad de sus datos personales y los traten de
                acuerdo con la ley. No permitimos que nuestros proveedores de servicios terceros utilicen sus datos
                personales para sus propios fines y solo les permitimos procesar sus datos personales para fines
                específicos y de acuerdo con nuestras instrucciones.
              </p>

              <h2>6. Seguridad de datos</h2>
              <p>
                Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan
                accidentalmente, se utilicen o accedan de manera no autorizada, se alteren o divulguen. Además,
                limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros
                que tienen una necesidad comercial de conocerlos. Solo procesarán sus datos personales según nuestras
                instrucciones y están sujetos a un deber de confidencialidad.
              </p>
              <p>
                Hemos implementado procedimientos para tratar cualquier sospecha de violación de datos personales y le
                notificaremos a usted y a cualquier regulador aplicable de una violación cuando estemos legalmente
                obligados a hacerlo.
              </p>

              <h2>7. Retención de datos</h2>
              <p>
                Solo conservaremos sus datos personales durante el tiempo que sea necesario para cumplir con los fines
                para los que los recopilamos, incluso para satisfacer cualquier requisito legal, contable o de informes.
              </p>
              <p>
                Para determinar el período de retención apropiado para los datos personales, consideramos la cantidad,
                naturaleza y sensibilidad de los datos personales, el riesgo potencial de daño por uso o divulgación no
                autorizados de sus datos personales, los fines para los que procesamos sus datos personales y si podemos
                lograr esos fines a través de otros medios, y los requisitos legales aplicables.
              </p>

              <h2>8. Sus derechos legales</h2>
              <p>
                Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos en relación con
                sus datos personales:
              </p>
              <ul>
                <li>Solicitar acceso a sus datos personales.</li>
                <li>Solicitar la corrección de sus datos personales.</li>
                <li>Solicitar la eliminación de sus datos personales.</li>
                <li>Oponerse al procesamiento de sus datos personales.</li>
                <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
                <li>Solicitar la transferencia de sus datos personales.</li>
                <li>Derecho a retirar el consentimiento.</li>
              </ul>
              <p>
                Si desea ejercer cualquiera de los derechos establecidos anteriormente, contáctenos a través de los
                datos proporcionados en la sección de contacto.
              </p>

              <h2>9. Cambios a esta política de privacidad</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. La nueva
                política de privacidad se publicará en esta página y, cuando corresponda, le notificaremos por correo
                electrónico cuando realicemos cambios sustanciales.
              </p>

              <h2>10. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad,
                contáctenos en:
              </p>
              <p>
                <strong>Fabrimallas®</strong>
                <br />
                Carrera 40 #42B-Esquina
                <br />
                Teléfono: 300 656 4547
                <br />
                Correo electrónico: fabrimallas2011@hotmail.com
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

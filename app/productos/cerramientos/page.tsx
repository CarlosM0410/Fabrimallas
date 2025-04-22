import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
// Podrías necesitar importar Button y Link si descomentas el botón de contacto
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

export default function CerramientosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
        Nuestros Cerramientos
      </h1>
      <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
        En Fabrimallas®, somos especialistas en el diseño, fabricación e instalación de cerramientos perimetrales adaptados a cada necesidad. Ofrecemos soluciones robustas, seguras y estéticas para proteger y delimitar todo tipo de espacios.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Ejemplo de tipo de cerramiento - Repetir/modificar según los tipos reales */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/RejaCasa.jpg"
              alt="Cerramientos Residenciales"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Cerramientos Residenciales</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Protege tu hogar y familia con cerramientos diseñados para combinar seguridad y estética. Utilizamos mallas eslabonadas, electrosoldadas y otros sistemas adaptados al entorno residencial.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Seguridad perimetral efectiva.</li>
              <li>Diseños que complementan la arquitectura.</li>
              <li>Materiales duraderos y de bajo mantenimiento.</li>
              <li>Instalación profesional.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/PuertaAlmacenFinca.jpg"
              alt="Cerramientos Industriales y Comerciales"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Cerramientos Industriales y Comerciales</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Soluciones robustas para proteger instalaciones, bodegas, parques industriales y locales comerciales. Priorizamos la resistencia, durabilidad y el cumplimiento de normativas de seguridad.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Alta resistencia a intentos de intrusión.</li>
              <li>Adaptabilidad a terrenos irregulares.</li>
              <li>Opciones con concertina o alambre de púas.</li>
              <li>Sistemas de control de acceso integrables.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/CanchasFutbol.jpg"
              alt="Cerramientos Deportivos"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Cerramientos Deportivos</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Cerramientos específicos para canchas y escenarios deportivos, diseñados para resistir impactos, garantizar la seguridad de jugadores y espectadores, y cumplir con las especificaciones de cada disciplina.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Altura y resistencia adecuadas.</li>
              <li>Mallas con aberturas que no obstruyen la visión.</li>
              <li>Tratamientos anticorrosivos para exteriores.</li>
              <li>Instalación segura y conforme a normas.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Añadir más tarjetas para otros tipos de cerramientos si es necesario */}

      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">¿Tu proyecto requiere un cerramiento especial?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Analizamos tus necesidades específicas y te ofrecemos la solución de cerramiento óptima en términos de seguridad, funcionalidad y presupuesto. ¡Contáctanos!
        </p>
        {/* Ejemplo de botón de contacto:
        <Button asChild>
          <Link href="/contacto">Solicitar Cotización</Link>
        </Button>
        */}
      </div>
    </div>
  )
}

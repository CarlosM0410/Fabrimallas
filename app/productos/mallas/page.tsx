import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MallasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
        Nuestras Mallas
      </h1>
      <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
        En Fabrimallas®, ofrecemos una amplia variedad de mallas de alta calidad diseñadas para satisfacer diversas necesidades en cerramientos, protección y delimitación de áreas. Nuestras mallas combinan durabilidad, resistencia y versatilidad.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Ejemplo de tipo de malla - Repetir/modificar según los tipos reales */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Malla1.jpg"
              alt="Malla Eslabonada"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Malla Eslabonada</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Fabricada con alambre galvanizado entretejido, ideal para cerramientos perimetrales residenciales, industriales y deportivos. Ofrece seguridad y delimitación efectiva.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Alta resistencia a la corrosión.</li>
              <li>Flexibilidad y adaptabilidad.</li>
              <li>Instalación sencilla.</li>
              <li>Diversos calibres y alturas disponibles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Malla3.jpg"
              alt="Malla Electrosoldada"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Malla Electrosoldada</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Paneles rígidos formados por alambres soldados en puntos de cruce. Perfecta para cerramientos que requieren mayor rigidez y seguridad, como parques, bodegas y áreas de alta seguridad.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Gran rigidez estructural.</li>
              <li>Acabados galvanizados o plastificados.</li>
              <li>Visibilidad clara a través de la malla.</li>
              <li>Larga vida útil.</li>
            </ul>
          </CardContent>
        </Card>

        {/* REMOVED Malla Ondulada Card */}

        {/* Añadir más tarjetas para otros tipos de mallas si es necesario */}

      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">¿Necesitas una solución específica?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Contamos con la experiencia y capacidad para fabricar mallas a medida según tus requerimientos. ¡Contáctanos para una asesoría personalizada!
        </p>
        {/* Aquí podrías añadir un botón de contacto que lleve a la página de contacto */}
        {/* Ejemplo: <Button asChild><Link href="/contacto">Contáctanos</Link></Button> */}
      </div>
    </div>
  )
}

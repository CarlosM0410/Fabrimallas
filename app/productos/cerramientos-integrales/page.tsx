import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CerramientosIntegralesPage() {
  const doorImages = [
    { src: "/Puerta2.jpg", alt: "Ejemplo Puerta 2" },
    { src: "/Puerta3.jpg", alt: "Ejemplo Puerta 3" },
    { src: "/Puerta4.jpg", alt: "Ejemplo Puerta 4" },
    { src: "/Puerta5.jpg", alt: "Ejemplo Puerta 5" },
    { src: "/Puerta6.jpg", alt: "Ejemplo Puerta 6" },
    { src: "/Puerta7.jpg", alt: "Ejemplo Puerta 7" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
        Cerramientos Integrales
      </h1>
      <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
        Ofrecemos soluciones completas "llave en mano" para cerramientos, combinando mallas de alta calidad, estructuras robustas, puertas, portones y sistemas de seguridad adicionales según tus necesidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Solución: Malla + Estructura */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Malla6.jpg"
              alt="Malla con Estructura Metálica"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Malla y Estructura</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Diseño y montaje de cerramientos completos con la malla de tu elección (eslabonada, electrosoldada, etc.) y estructuras metálicas resistentes.
            </CardDescription>
            <div className="mt-4">
              <Image src="/MallaGalpon.jpg" alt="Malla en Galpón" width={300} height={150} className="rounded-md object-cover mx-auto" />
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-4">
              <li>Selección de malla adecuada.</li>
              <li>Postes y tubería galvanizada.</li>
              <li>Diseño adaptado al terreno.</li>
              <li>Instalación profesional.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Solución: Puertas y Portones */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Puerta1.jpg"
              alt="Puertas y Portones Integrados"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Puertas y Portones</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Fabricación e instalación de puertas peatonales y portones (corredizos, batientes) integrados al cerramiento, con opciones de automatización.
            </CardDescription>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Image src="/MallaPuerta.jpg" alt="Malla en Puerta 1" width={150} height={100} className="rounded-md object-cover w-full" />
              <Image src="/MallaPuerta2.jpg" alt="Malla en Puerta 2" width={150} height={100} className="rounded-md object-cover w-full" />
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-4">
              <li>Diseños a medida.</li>
              <li>Materiales resistentes.</li>
              <li>Acabados coordinados.</li>
              <li>Sistemas de cierre seguros.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Solución: Seguridad Adicional */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/ConcertinaEnMuro.jpg"
              alt="Seguridad Adicional (Concertina)"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Seguridad Adicional</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Complementamos tu cerramiento con elementos disuasorios como concertinas, alambre de púas, sensores perimetrales o sistemas de CCTV.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Instalación de concertina simple o cruzada.</li>
              <li>Alambre de púas de alta resistencia.</li>
              <li>Integración con sistemas electrónicos.</li>
              <li>Asesoría en niveles de seguridad.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8 text-primary">Ejemplos de Puertas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {doorImages.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-lg shadow-md aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center bg-neutral-light/20 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Tu Proyecto, Nuestra Solución Completa</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Desde la planificación hasta la instalación final, nos encargamos de todos los detalles para entregar un cerramiento integral que cumpla tus expectativas de seguridad, funcionalidad y estética. ¡Cotiza con nosotros!
        </p>
      </div>
    </div>
  )
}

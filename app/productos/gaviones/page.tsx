import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function GavionesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
        Nuestros Gaviones
      </h1>
      <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
        Descubre la resistencia y versatilidad de nuestros gaviones, fabricados artesanalmente para garantizar la máxima calidad en control de erosión, estabilización de taludes y proyectos decorativos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gaviones para Contención */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Gaviones3.jpg"
              alt="Gaviones para Contención"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Gaviones para Contención</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Soluciones robustas para muros de contención, estabilización de terrenos y protección de riberas, cumpliendo normativas técnicas.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Alta resistencia a la tensión.</li>
              <li>Flexibilidad y adaptabilidad al terreno.</li>
              <li>Permeabilidad para drenaje.</li>
              <li>Fabricación artesanal certificada.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Gaviones Decorativos */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Gaviones1.jpg"
              alt="Gaviones Decorativos"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Gaviones Decorativos</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Elementos estéticos y funcionales para paisajismo, jardines, fachadas y mobiliario urbano, combinando piedra y malla.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Diseños personalizados.</li>
              <li>Integración natural con el entorno.</li>
              <li>Durabilidad y bajo mantenimiento.</li>
              <li>Múltiples opciones de relleno.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Colchón Reno / Gavión Caja */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Gaviones4.jpg"
              alt="Colchón Reno / Gavión Tipo Caja"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Colchón Reno / Gavión Caja</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Formatos específicos como Colchones Reno (baja altura) para protección de márgenes y Gaviones Caja estándar para diversas aplicaciones.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Variedad de dimensiones estándar.</li>
              <li>Cumplimiento de normas técnicas.</li>
              <li>Facilidad de transporte e instalación.</li>
              <li>Soluciones costo-efectivas.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Calidad Artesanal Certificada</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Nuestros gaviones son tejidos a mano siguiendo estrictos controles de calidad y normativas vigentes. Contáctanos para tu proyecto.
        </p>
        {/* Botón opcional */}
      </div>
    </div>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CTABanner from "@/components/cta-banner"
import Link from "next/link"

export default function ResidencialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-light to-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-foreground mb-6 font-heading">
            Sector Residencial
          </h1>
          <p className="text-neutral-foreground/90 max-w-2xl mx-auto">
            Cerramientos estéticos y seguros para tu hogar, conjuntos residenciales, jardines y áreas de mascotas.
          </p>
        </div>
      </section>

      {/* Introduction & Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading text-primary">
                Protección y Estilo para tu Hogar
              </h2>
              <p className="mb-4">
                En Fabrimallas®, entendemos la importancia de combinar seguridad y estética en tu propiedad. Ofrecemos
                soluciones de cerramiento versátiles para:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Cerramientos de vivienda para seguridad y privacidad.</li>
                <li>Delimitación de jardines y zonas verdes.</li>
                <li>Creación de zonas seguras para mascotas.</li>
                <li>Jaulas decorativas y funcionales para aves u otros animales.</li>
                <li>Gaviones decorativos para paisajismo y diseño exterior.</li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Cotizar Cerramiento Residencial</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/RejaCasa.jpg" // Placeholder - Update if needed
                alt="Cerramiento residencial con malla eslabonada"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            Especificaciones Comunes para Residencias
          </h2>
          <Card className="overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Necesidad</TableHead>
                  <TableHead>Apertura de malla (ojo)</TableHead>
                  <TableHead>Calibre</TableHead>
                  <TableHead>Altura Sugerida</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Cerca de seguridad / privacidad</TableCell>
                  <TableCell>2 ¼” (≈ 57 mm)</TableCell>
                  <TableCell>10.5</TableCell>
                  <TableCell>2 m</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cerca para mascotas</TableCell>
                  <TableCell>2 ¼” o 2 ½”</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>1 m</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jaulas para aves</TableCell>
                  <TableCell>1” × 1” o 1 ¼”</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>A medida del diseño</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gaviones decorativos</TableCell>
                  <TableCell>1 × 1 × 1 m</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>Configuración modular</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          <Card className="mt-8 bg-primary/10 border-primary/30 shadow-lg">
            <CardContent className="p-6">
              <h4 className="font-bold text-primary mb-2">Acabado Estético:</h4>
              <p className="text-neutral">
                Para integrar el cerco al diseño de tu jardín, la malla puede suministrarse con recubrimiento plástico
                de color (verde, negro, gris).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Ventajas para tu Residencia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader><CardTitle>Seguridad y Privacidad</CardTitle></CardHeader>
              <CardContent>Delimita tu propiedad y protege a tu familia con cerramientos robustos.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Estética y Valorización</CardTitle></CardHeader>
              <CardContent>Opciones de diseño y acabados que se integran a la arquitectura y aumentan el valor.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Durabilidad y Bajo Mantenimiento</CardTitle></CardHeader>
              <CardContent>Materiales resistentes a la intemperie que requieren mínimo mantenimiento.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Quieres mejorar la seguridad y estética de tu hogar?"
        description="Descubre nuestras soluciones de cerramiento residencial. Solicita una cotización sin compromiso."
        buttonText="COTIZAR PROYECTO RESIDENCIAL"
        buttonLink="/contacto?sector=residencial"
      />
    </div>
  )
}

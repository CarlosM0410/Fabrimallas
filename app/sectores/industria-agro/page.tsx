import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CTABanner from "@/components/cta-banner"
import Link from "next/link"

export default function IndustriaAgroPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-light to-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-foreground mb-6 font-heading">
            Sector Industria & Agro
          </h1>
          <p className="text-neutral-foreground/90 max-w-2xl mx-auto">
            Cerramientos resistentes y funcionales para perímetros, divisiones internas, corrales y aplicaciones agrícolas
            específicas.
          </p>
        </div>
      </section>

      {/* Introduction & Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading text-primary">Cerramientos para Entornos Exigentes</h2>
              <p className="mb-4">
                Fabrimallas® ofrece soluciones de cerramiento diseñadas para soportar las condiciones de entornos
                industriales y agropecuarios. Nuestros productos garantizan seguridad, durabilidad y funcionalidad para:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Cerramientos perimetrales de seguridad para fábricas, bodegas y lotes.</li>
                <li>Divisiones internas en áreas de producción o almacenamiento.</li>
                <li>Construcción de corrales y galpones avícolas resistentes.</li>
                <li>Protección de cultivos y delimitación de áreas agrícolas.</li>
                <li>Gaviones para drenajes y manejo de aguas en terrenos agrícolas.</li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar Cotización Industrial/Agro</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/MallaEnBodega.jpg" // Placeholder - Update if needed
                alt="Cerramiento industrial con malla eslabonada"
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
            Especificaciones Técnicas Comunes
          </h2>
          <Card className="overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Uso / Entorno</TableHead>
                  <TableHead>Apertura de malla (ojo)</TableHead>
                  <TableHead>Calibre</TableHead>
                  <TableHead>Altura Sugerida</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Seguridad perimetral / Divisiones</TableCell>
                  <TableCell>2 ¼" (≈ 57 mm)</TableCell>
                  <TableCell>10.5</TableCell>
                  <TableCell>2 m (con o sin muro de mampostería)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Galpones avícolas</TableCell>
                  <TableCell>1 ½" (≈ 38 mm) - Reglamentado por ICA</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>2 m</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corrales y zonas de manejo animal</TableCell>
                  <TableCell>2 ¼" o 2 ½"</TableCell>
                  <TableCell>10.5</TableCell>
                  <TableCell>2 m o más, según especie</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gaviones en drenajes agrícolas</TableCell>
                  <TableCell>Igual tabla de construcción</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>Según diseño hidráulico</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          <p className="text-center text-sm text-neutral/80 mt-4">
            Nota: Estas son recomendaciones generales. Las especificaciones finales dependen de los requerimientos
            particulares de cada proyecto y normativa aplicable.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Ventajas para Industria y Agro</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader><CardTitle>Alta Resistencia</CardTitle></CardHeader>
              <CardContent>Materiales y galvanizado diseñados para soportar condiciones de uso intensivo y exposición ambiental.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Seguridad</CardTitle></CardHeader>
              <CardContent>Cerramientos robustos que disuaden intrusiones y protegen activos e instalaciones.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Versatilidad</CardTitle></CardHeader>
              <CardContent>Adaptabilidad a diferentes necesidades, desde perímetros hasta divisiones y estructuras específicas.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas un cerramiento resistente para tu negocio?"
        description="Ofrecemos soluciones duraderas y a medida para la industria y el sector agropecuario."
        buttonText="CONTACTAR ASESOR INDUSTRIAL"
        buttonLink="/contacto?sector=industria-agro"
      />
    </div>
  )
}

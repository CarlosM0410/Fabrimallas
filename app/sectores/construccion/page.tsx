import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CTABanner from "@/components/cta-banner"
import Link from "next/link"
import { Check } from "lucide-react"

export default function ConstruccionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-light to-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-foreground mb-6 font-heading">
            Sector Construcción
          </h1>
          <p className="text-neutral-foreground/90 max-w-2xl mx-auto">
            Soluciones robustas y conformes a normativas para control de erosión, estabilización de taludes, puentes y
            obras civiles.
          </p>
        </div>
      </section>

      {/* Introduction & Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading text-primary">
                Gaviones y Mallas para Infraestructura
              </h2>
              <p className="mb-4">
                En Fabrimallas®, ofrecemos soluciones especializadas para el sector de la construcción, fabricadas con
                alambre galvanizado de alta resistencia y cumpliendo con las normativas técnicas colombianas (INVÍAS
                E-681, NTC 2403). Nuestros productos son ideales para:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Control de erosión en taludes y riberas.</li>
                <li>Estabilización de taludes y muros de contención.</li>
                <li>Construcción de puentes y box-culverts.</li>
                <li>Obras viales y de infraestructura en general.</li>
                <li>Canalizaciones y protección de cauces.</li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar Asesoría Técnica</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/Gaviones3.jpg" // Placeholder image - Update if needed
                alt="Gaviones en obra de construcción"
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
            Especificaciones Técnicas Recomendadas
          </h2>
          <Card className="overflow-hidden shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Solución</TableHead>
                  <TableHead>Medidas más habituales (Largo x Ancho x Alto)</TableHead>
                  <TableHead>Calibre Recomendado</TableHead>
                  <TableHead>Por qué elegirla</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Gavión estándar</TableCell>
                  <TableCell>2 × 1 × 1 m</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>Se adapta a la mayoría de taludes y muros de contención; fácil de manejar y apilar.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gavión económico</TableCell>
                  <TableCell>3 × 1 × 1 m</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>Rinde más metros cúbicos por unidad (menos costuras, menos alambre).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gavión de media altura</TableCell>
                  <TableCell>2 × 1 × 0.5 m</TableCell>
                  <TableCell>12.5</TableCell>
                  <TableCell>Ideal como capa de remate o refuerzo intermedio.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <Card className="mt-8 bg-primary/10 border-primary/30 shadow-lg">
            <CardContent className="p-6">
              <h4 className="font-bold text-primary mb-2">Tip Técnico:</h4>
              <p className="text-neutral">
                Todos los gaviones se entregan con alambre de amarres del mismo calibre para garantizar una conexión
                segura entre celdas. La correcta instalación y amarre son cruciales para la integridad estructural.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Ventajas para Construcción</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Add 3 benefit cards */}
            <Card>
              <CardHeader><CardTitle>Cumplimiento Normativo</CardTitle></CardHeader>
              <CardContent>Nuestros productos cumplen las normas INVÍAS y NTC requeridas para obras civiles.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Resistencia y Durabilidad</CardTitle></CardHeader>
              <CardContent>Fabricados con alambre galvanizado de alta resistencia para máxima vida útil.</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Adaptabilidad</CardTitle></CardHeader>
              <CardContent>Flexibilidad para adaptarse a diferentes tipos de terreno y geometrías complejas.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="¿Necesitas una solución robusta para tu obra?"
        description="Contacta a nuestros asesores expertos en el sector construcción para obtener una cotización."
        buttonText="COTIZAR PROYECTO DE CONSTRUCCIÓN"
        buttonLink="/contacto?sector=construccion" // Example: pre-fill contact form maybe?
      />
    </div>
  )
}

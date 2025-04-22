import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Download, FileText, Shield, Building, Home } from "lucide-react"
import ProductCard from "@/components/product-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MallaTripleTorsion() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
        Malla Triple Torsión
      </h1>
      <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
        Nuestra malla hexagonal (Triple Torsión) ofrece una combinación superior de resistencia, flexibilidad y durabilidad para gaviones, control de erosión y cerramientos, cumpliendo con las normas INVÍAS y NTC.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Característica: Resistencia */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Malla2.jpg"
              alt="Resistencia Malla Triple Torsión"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Alta Resistencia</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              Fabricada con alambre de acero galvanizado de alta resistencia a la tensión, asegurando la integridad estructural incluso bajo cargas pesadas.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Soporta esfuerzos y deformaciones.</li>
              <li>Mantiene su forma y función.</li>
              <li>Ideal para aplicaciones exigentes.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Característica: Flexibilidad */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Malla4.jpg"
              alt="Flexibilidad Malla Triple Torsión"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Flexibilidad Única</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              La estructura de triple torsión permite que la malla se adapte a movimientos del terreno sin romperse, a diferencia de mallas más rígidas.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Se ajusta a superficies irregulares.</li>
              <li>Absorbe asentamientos diferenciales.</li>
              <li>Evita fallos estructurales.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Característica: Durabilidad */}
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <Image
              src="/Malla1.jpg"
              alt="Durabilidad Malla Triple Torsión"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold mb-2 text-primary">Durabilidad Comprobada</CardTitle>
            <CardDescription className="text-muted-foreground mb-4">
              El recubrimiento galvanizado de alta calidad protege contra la corrosión, garantizando una larga vida útil en diversas condiciones ambientales.
            </CardDescription>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Resistencia a la intemperie.</li>
              <li>Bajo mantenimiento requerido.</li>
              <li>Cumple normas ASTM A641.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Especificaciones / Aplicaciones */}
      <div className="mt-16 bg-neutral-light/20 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Aplicaciones y Especificaciones</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Usos Comunes</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Construcción de Gaviones (Caja y Colchón Reno)</li>
              <li>Control de erosión y estabilización de taludes</li>
              <li>Cerramientos perimetrales</li>
              <li>Protección de cultivos y corrales (Malla Gallinero)</li>
              <li>Aplicaciones industriales y decorativas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Detalles Técnicos</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Aberturas (Ojos): 8x10cm (Estándar), 5x7cm, 10x12cm</li>
              <li>Calibres de Alambre: 10 a 14</li>
              <li>Recubrimiento: Galvanizado en Caliente</li>
              <li>Normas: INVÍAS E-681, NTC 2403, ASTM A975</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="especificaciones" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="especificaciones">Especificaciones Técnicas</TabsTrigger>
              <TabsTrigger value="aplicaciones">Aplicaciones</TabsTrigger>
              <TabsTrigger value="instalacion">Instalación</TabsTrigger>
            </TabsList>

            <TabsContent value="especificaciones" className="p-6 bg-neutral-light/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 font-heading">Especificaciones Técnicas</h3>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Característica</TableHead>
                    <TableHead>Descripción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Material</TableCell>
                    <TableCell>Alambre de acero galvanizado</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Calibres disponibles</TableCell>
                    <TableCell>10, 11, 12, 13, 14</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Aberturas (ojos)</TableCell>
                    <TableCell>5x7 cm, 8x10 cm, 10x12 cm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Recubrimiento</TableCell>
                    <TableCell>Galvanizado en caliente (ASTM A641)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Resistencia a la tensión</TableCell>
                    <TableCell>38-50 kg/mm²</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Elongación</TableCell>
                    <TableCell>≥ 12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Normas</TableCell>
                    <TableCell>INVÍAS E-681, NTC 2403, ASTM A975, A641</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-6">
                <Button variant="outline" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar especificaciones completas
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="aplicaciones" className="p-6 bg-neutral-light/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 font-heading">Aplicaciones</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Construcción</h4>
                  <ul className="list-disc list-inside text-left">
                    <li>Gaviones para muros de contención</li>
                    <li>Control de erosión en taludes</li>
                    <li>Protección de riberas</li>
                    <li>Estabilización de suelos</li>
                  </ul>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Industrial</h4>
                  <ul className="list-disc list-inside text-left">
                    <li>Cerramientos de seguridad</li>
                    <li>Divisiones de áreas</li>
                    <li>Protección de maquinaria</li>
                    <li>Jaulas y contenedores</li>
                  </ul>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">Residencial</h4>
                  <ul className="list-disc list-inside text-left">
                    <li>Cerramientos perimetrales</li>
                    <li>Elementos decorativos</li>
                    <li>Muros verdes</li>
                    <li>Protección de jardines</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instalacion" className="p-6 bg-neutral-light/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 font-heading">Instalación</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <Image
                    src="/Malla6.jpg"
                    alt="Instalación de Malla Triple Torsión"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4 object-cover h-[400px]"
                  />
                  <p className="text-sm text-muted-foreground italic">
                    Proceso de instalación de malla triple torsión por nuestro equipo certificado
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p className="mb-4">
                    La instalación de la Malla Triple Torsión de Fabrimallas® debe realizarse siguiendo las mejores prácticas para garantizar su durabilidad y funcionalidad óptima.
                  </p>
                  <h4 className="text-lg font-semibold mb-2 font-heading">Pasos básicos de instalación:</h4>
                  <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
                    <li>Preparación del terreno y marcado del área</li>
                    <li>Instalación de postes o estructuras de soporte</li>
                    <li>Desenrollado y fijación inicial de la malla</li>
                    <li>Tensado adecuado de la malla</li>
                    <li>Fijación final y remates</li>
                  </ol>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Recomendación:</p>
                    <p className="text-sm text-muted-foreground">
                      Para proyectos complejos o de gran envergadura, recomendamos contactar a nuestro equipo técnico para asesoría y servicio de instalación profesional.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Productos Relacionados */}
      <section className="py-16 bg-neutral-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Productos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              title="Gaviones"
              description="Estructuras de contención fabricadas con nuestra malla triple torsión de alta calidad."
              imageSrc="/Gaviones2.jpg"
              url="/productos/gaviones"
            />
            <ProductCard
              title="Malla Eslabonada"
              description="Otra opción versátil para cerramientos, ideal para aplicaciones residenciales y deportivas."
              imageSrc="/Malla1.jpg"
              url="/productos/mallas"
            />
            <ProductCard
              title="Cerramientos Integrales"
              description="Soluciones completas que pueden incluir malla triple torsión para máxima seguridad."
              imageSrc="/MallaEnBodega.jpg"
              url="/productos/cerramientos-integrales"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

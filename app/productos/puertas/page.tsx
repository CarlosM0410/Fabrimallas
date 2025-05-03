import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PuertasPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Puertas y Soluciones de Acceso Fabrimallas</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Controla el acceso y garantiza la seguridad con nuestra robusta línea de puertas. Ofrecemos soluciones
                    versátiles para accesos peatonales y vehiculares, fabricadas con materiales de alta resistencia
                    y diseñadas para integrarse perfectamente con nuestros sistemas de cerramiento.
                </p>
            </div>

            {/* Product Listing Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
                  **Zona de Catálogo de Puertas**
                  - Añade aquí tu componente <Image> con una imagen representativa de tus puertas.
                    Ejemplo: <Image src="/images/puertas/puerta-principal.jpg" alt="Puerta Fabrimallas" width={800} height={500} className="..." />
                  - Implementa la lógica para mostrar tus diferentes tipos de puertas.
                  - Puedes usar un grid, <ProductCard />, etc.
                  - Ejemplo conceptual:
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {listaDePuertas.map(puerta => (
                        <ProductCard key={puerta.id} product={puerta} />
                      ))}
                    </div>
                */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Tipos de Puertas Disponibles</h2>
                <p className="text-muted-foreground mb-4">
                    Descubre nuestras opciones: desde puertas batientes y corredizas hasta portones industriales, adaptados a cada necesidad.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Catálogo detallado de productos.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Necesitas una solución de acceso a medida?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Consulta con nuestros expertos para encontrar la puerta ideal para tu proyecto, adaptada a tus necesidades de seguridad y funcionalidad.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Solicitar Asesoría</Link>
                </Button>
            </div>
        </main>
    );
} 
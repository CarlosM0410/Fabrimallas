import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function MallaElectrosoldadaPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Malla Electrosoldada: Rigidez y Precisión</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    La malla electrosoldada se caracteriza por su estructura rígida y uniforme, formada por la unión
                    de alambres mediante soldadura eléctrica en cada intersección. Es ideal para cerramientos que requieren
                    mayor rigidez, paneles, jaulas, divisiones y diversas aplicaciones industriales y de construcción.
                </p>
            </div>

            {/* Product Listing Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Catálogo de Malla Electrosoldada**
          - Añade aquí tu componente <Image> con una imagen representativa.
          - Detalla las dimensiones de los paneles, tamaño de los huecos (cocadas), calibres y acabados.
          - Puedes usar <ProductCard /> o especificaciones técnicas.
        */}
                <Image
                    src="/MallaElectrosoldada.jpg"
                    alt="Malla Electrosoldada Fabrimallas"
                    width={800}
                    height={500}
                    className="mx-auto rounded-md object-cover mb-6"
                />
                <h2 className="text-2xl font-semibold mb-2 font-heading">Nuestras Mallas Electrosoldadas</h2>
                <p className="text-muted-foreground mb-4">
                    Fabricamos paneles de malla electrosoldada en diversas configuraciones para satisfacer las necesidades de tu proyecto.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Catálogo detallado de productos.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Buscas una solución rígida y precisa?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Descubre las ventajas de la malla electrosoldada. Contáctanos para más detalles y cotizaciones.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Consultar Malla Electrosoldada</Link>
                </Button>
            </div>
        </main>
    );
} 
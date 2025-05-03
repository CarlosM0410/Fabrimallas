import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TaponesPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Tapones y Accesorios: El Detalle Final</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    La calidad de un cerramiento también reside en los detalles. Nuestros tapones y accesorios
                    están diseñados para proporcionar un acabado limpio, seguro y duradero a tus postes y estructuras,
                    protegiéndolos de los elementos y mejorando la estética general.
                </p>
            </div>

            {/* Placeholder for Product Listings */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                <Image
                    src="/placeholder-tapones.jpg" // Reemplazar con una imagen real o temática
                    alt="Tapones Placeholder"
                    width={600}
                    height={400}
                    className="mx-auto rounded-md object-cover mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2 font-heading">Variedad de Tapones y Accesorios</h2>
                <p className="text-muted-foreground mb-4">
                    Disponemos de tapones plásticos y metálicos en diversas medidas y formas para tubos redondos, cuadrados y rectangulares.
                    (Aquí se mostraría la lista de productos específicos)
                </p>
                <p className="italic text-sm text-gray-500">
                    (Sección de catálogo de productos en desarrollo)
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">Encuentra el Accesorio Perfecto</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Si no estás seguro de qué tapón o accesorio necesitas, nuestro equipo puede ayudarte a encontrar la solución ideal para tu instalación.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Consultar Disponibilidad</Link>
                </Button>
            </div>
        </main>
    );
} 
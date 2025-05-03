import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CerramientosResidencialesPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Cerramientos Residenciales: Estética y Protección</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Delimita y protege tu hogar con estilo. Nuestros cerramientos residenciales combinan seguridad,
                    privacidad y estética, ofreciendo una variedad de diseños y materiales que se adaptan
                    a la arquitectura de tu propiedad y realzan su valor.
                </p>
            </div>

            {/* Product Listing / Solutions Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Soluciones Residenciales**
          - Añade aquí tu componente <Image> con ejemplos de cerramientos en casas, conjuntos, etc.
          - Describe los tipos de mallas (eslabonada con PVC, electrosoldada decorativa), postes y acabados.
          - Puedes usar <ProductCard /> o mostrar una galería de estilos.
        */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Estilo y Seguridad para tu Hogar</h2>
                <p className="text-muted-foreground mb-4">
                    Explora opciones como mallas recubiertas en PVC de colores, diseños de paneles electrosoldados y complementos estéticos.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Galería de proyectos residenciales y opciones de personalización.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Quieres mejorar la seguridad y apariencia de tu propiedad?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Descubre cómo nuestros cerramientos residenciales pueden transformar tu hogar. Contáctanos para una cotización.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Cotizar Cerramiento Residencial</Link>
                </Button>
            </div>
        </main>
    );
} 
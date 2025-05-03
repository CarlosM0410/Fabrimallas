import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ConcertinaPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Concertina: Máxima Seguridad Perimetral</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    La concertina es una barrera de seguridad de alta disuasión, diseñada para proteger perímetros
                    y áreas sensibles. Fabricada con alambre de alta resistencia y cuchillas afiladas, ofrece una
                    protección física formidable contra intrusiones no deseadas.
                </p>
            </div>

            {/* Product Listing Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Catálogo de Concertina**
          - Añade aquí tu componente <Image> con una imagen representativa.
          - Detalla los tipos (simple, cruzada), diámetros y materiales disponibles.
          - Puedes usar <ProductCard /> o especificaciones técnicas.
        */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Nuestros Tipos de Concertina</h2>
                <p className="text-muted-foreground mb-4">
                    Ofrecemos diferentes configuraciones y diámetros para adaptarnos a los niveles de seguridad requeridos por tu instalación.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Catálogo detallado de productos.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Necesitas reforzar la seguridad?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Consulta con nuestros especialistas en seguridad perimetral para determinar la concertina adecuada para tu proyecto.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Solicitar Asesoría de Seguridad</Link>
                </Button>
            </div>
        </main>
    );
} 
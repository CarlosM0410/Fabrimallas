import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TaponesAluminioPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Tapones de Aluminio: Acabado Premium</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Para un acabado superior y una mayor durabilidad, nuestros tapones de aluminio son la elección perfecta.
                    Ofrecen una excelente resistencia a la corrosión y un aspecto elegante que realza la calidad de cualquier
                    instalación de cerramiento.
                </p>
            </div>

            {/* Product Listing Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Catálogo de Tapones de Aluminio**
          - Añade aquí tu componente <Image> mostrando diferentes tapones de aluminio.
          - Detalla las medidas, formas (planos, curvos) y acabados disponibles.
          - Puedes usar <ProductCard /> o una tabla.
        */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Nuestros Tapones de Aluminio</h2>
                <p className="text-muted-foreground mb-4">
                    Disponibles en diversas formas y tamaños para adaptarse a tus postes y tubos, proporcionando un acabado profesional.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Catálogo detallado de productos.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Buscas un acabado superior?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Explora nuestras opciones de tapones de aluminio o contáctanos para encontrar la pieza perfecta para tu proyecto.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Consultar Tapones de Aluminio</Link>
                </Button>
            </div>
        </main>
    );
} 
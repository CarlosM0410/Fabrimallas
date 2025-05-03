import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GavionesDecorativosPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Gaviones Decorativos: Estética y Funcionalidad</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Transforma tus espacios exteriores con la belleza natural y la robustez de los gaviones decorativos.
                    Ideales para crear muros de jardín, bancos, jardineras, bordes y otros elementos paisajísticos
                    únicos y duraderos, combinando piedra y malla de forma armoniosa.
                </p>
            </div>

            {/* Product Listing Area / Inspiration Gallery */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Catálogo / Galería de Gaviones Decorativos**
          - Añade aquí tu componente <Image> con fotos inspiradoras de proyectos.
          - Muestra ejemplos de aplicaciones: muros, bancos, jardineras.
          - Detalla las opciones de mallas y tamaños disponibles para fines decorativos.
        */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Ideas y Aplicaciones Decorativas</h2>
                <p className="text-muted-foreground mb-4">
                    Inspírate con las posibilidades creativas que ofrecen los gaviones para embellecer jardines, patios y espacios públicos.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Galería de proyectos y opciones de personalización.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Quieres dar un toque único a tu espacio?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Contacta con nosotros para explorar las opciones de gaviones decorativos y cómo podemos ayudarte a materializar tu visión.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Consultar Gaviones Decorativos</Link>
                </Button>
            </div>
        </main>
    );
} 
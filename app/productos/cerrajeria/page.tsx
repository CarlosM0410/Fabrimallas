import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CerrajeriaPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Cerrajería para Cerramientos</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Completa la seguridad y funcionalidad de tus puertas y accesos con nuestra línea de cerrajería especializada.
                    Ofrecemos cerraduras, pestillos, bisagras y otros componentes de alta calidad, diseñados para complementar
                    nuestros sistemas de cerramiento y garantizar un funcionamiento fiable y seguro.
                </p>
            </div>

            {/* Product Listing Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Catálogo de Cerrajería**
          - Añade aquí tu componente <Image> con ejemplos de cerraduras, bisagras, etc.
          - Lista los diferentes tipos de productos de cerrajería disponibles.
          - Puedes usar <ProductCard /> o una lista detallada.
        */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Componentes de Cerrajería</h2>
                <p className="text-muted-foreground mb-4">
                    Encuentra cerraduras de sobreponer, pestillos de seguridad, bisagras reforzadas y más para tus puertas y portones.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Catálogo detallado de productos.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Necesitas asegurar tus accesos?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Consulta nuestro catálogo de cerrajería o contacta a nuestros asesores para encontrar los componentes adecuados.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Ver Opciones de Cerrajería</Link>
                </Button>
            </div>
        </main>
    );
} 
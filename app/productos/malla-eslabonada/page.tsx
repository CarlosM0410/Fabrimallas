import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MallaEslabonadaPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Malla Eslabonada: Versatilidad y Resistencia</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    La malla eslabonada, también conocida como malla ciclónica, es una solución clásica y altamente efectiva
                    para cerramientos perimetrales. Ofrece una excelente relación costo-beneficio, durabilidad y visibilidad,
                    siendo ideal para una amplia gama de aplicaciones residenciales, comerciales e industriales.
                </p>
            </div>

            {/* Product Listing Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Catálogo de Malla Eslabonada**
          - Añade aquí tu componente <Image> con una imagen representativa.
          - Muestra las diferentes alturas, calibres y acabados (galvanizado, PVC) disponibles.
          - Puedes usar <ProductCard /> o una tabla comparativa.
        */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Nuestras Mallas Eslabonadas</h2>
                <p className="text-muted-foreground mb-4">
                    Fabricadas con alambre de alta calidad, disponibles en diversos calibres y recubrimientos para adaptarse a tu proyecto.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Catálogo detallado de productos.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Necesitas un cerramiento con Malla Eslabonada?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Contáctanos para obtener asesoría sobre la mejor opción para tu propiedad y solicitar una cotización sin compromiso.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Cotizar Ahora</Link>
                </Button>
            </div>
        </main>
    );
} 
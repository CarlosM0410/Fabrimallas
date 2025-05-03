import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CerramientosIndustrialesPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Cerramientos Industriales: Seguridad y Resistencia</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Protege tus instalaciones industriales, bodegas, fábricas y perímetros de alta seguridad con nuestras soluciones
                    de cerramiento industrial. Diseñados para resistir condiciones exigentes y disuadir accesos no autorizados,
                    ofrecemos sistemas robustos y adaptables a las necesidades específicas de cada sector.
                </p>
            </div>

            {/* Product Listing / Solutions Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
          **Zona de Soluciones Industriales**
          - Añade aquí tu componente <Image> con ejemplos de cerramientos en entornos industriales.
          - Describe los tipos de mallas (eslabonada, electrosoldada), postes y sistemas de seguridad (concertina, etc.) recomendados.
          - Puedes usar <ProductCard /> para productos clave o describir soluciones integrales.
        */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Soluciones para la Industria</h2>
                <p className="text-muted-foreground mb-4">
                    Desde mallas de alta resistencia hasta sistemas con concertina, adaptamos el cerramiento a tus requerimientos de seguridad.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Detalles técnicos y casos de estudio.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Necesitas proteger tu operación industrial?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Nuestro equipo te asesorará en la selección e instalación del sistema de cerramiento industrial más adecuado para tus instalaciones.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Solicitar Asesoría Industrial</Link>
                </Button>
            </div>
        </main>
    );
} 
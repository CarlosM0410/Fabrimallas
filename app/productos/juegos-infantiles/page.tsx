import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function JuegosInfantilesPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Diversión Segura con Juegos Infantiles Fabrimallas</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Creamos espacios de juego vibrantes y seguros para niños. Nuestros juegos infantiles están diseñados
                    con los más altos estándares de calidad y seguridad, utilizando materiales duraderos y resistentes
                    para garantizar horas de diversión sin preocupaciones.
                </p>
            </div>

            {/* Product Listing Area */}
            <div className="bg-muted p-8 rounded-lg text-center mb-12">
                {/* 
                  **Zona de Catálogo de Juegos Infantiles**
                  - Añade aquí tu componente <Image> con una imagen representativa de tus juegos.
                    Ejemplo: <Image src="/images/juegos/parque-principal.jpg" alt="Parque infantil Fabrimallas" width={800} height={500} className="..." />
                  - Implementa la lógica para mostrar tus productos de juegos infantiles.
                  - Puedes usar un grid, un carrusel (<ProductCardCarousel /> si aplica) o componentes <ProductCard />.
                  - Ejemplo conceptual:
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {listaDeJuegos.map(juego => (
                        <ProductCard key={juego.id} product={juego} />
                      ))}
                    </div>
                */}
                <h2 className="text-2xl font-semibold mb-2 font-heading">Nuestro Catálogo de Juegos</h2>
                <p className="text-muted-foreground mb-4">
                    Explora nuestra variedad de columpios, toboganes, estructuras de escalada y más.
                </p>
                <p className="italic text-sm text-gray-500">
                    Próximamente: Catálogo detallado de productos.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 font-heading">¿Listo para crear un espacio de juego increíble?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Contáctanos para obtener más información sobre nuestros juegos infantiles, solicitar un catálogo completo o pedir una cotización personalizada.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">Contactar Ahora</Link>
                </Button>
            </div>
        </main>
    );
} 
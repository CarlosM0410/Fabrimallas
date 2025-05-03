import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function NosotrosPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 font-heading text-primary">Conoce Fabrimallas®</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Somos líderes en la fabricación y comercialización de soluciones integrales en mallas y gaviones,
                    comprometidos con la calidad, la innovación y la satisfacción de nuestros clientes en cada proyecto.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="font-heading">Nuestra Empresa</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Descubre nuestra historia, valores y el compromiso que nos impulsa.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/nosotros/empresa">Ver más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="font-heading">Proceso Artesanal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Conoce la dedicación y técnica detrás de nuestros gaviones de alta calidad.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/nosotros/proceso-artesanal">Descubrir <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="font-heading">Nuestro Equipo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            El talento humano y las certificaciones que respaldan nuestra excelencia.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/nosotros/equipo">Conocer al equipo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="font-heading">Blog Fabrimallas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Mantente informado con nuestras últimas noticias, artículos y consejos.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/blog">Leer artículos <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
} 
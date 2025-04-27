"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardCarouselProps {
    title: string
    description: string
    imageSrcs: string[] // Array of image sources
    url: string
}

export default function ProductCardCarousel({
    title,
    description,
    imageSrcs,
    url,
}: ProductCardCarouselProps) {
    return (
        <Card className="flex flex-col h-full overflow-hidden border-none shadow-lg">
            <CardHeader className="p-0 relative">
                {/* Carousel Implementation */}
                <Carousel className="w-full">
                    <CarouselContent>
                        {imageSrcs.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-video relative w-full">
                                    <Image
                                        src={src}
                                        alt={`${title} - Imagen ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Add Previous/Next buttons if more than one image */}
                    {imageSrcs.length > 1 && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none" />
                        </>
                    )}
                </Carousel>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-semibold mb-2 font-heading">{title}</CardTitle>
                <p className="text-neutral text-sm line-clamp-3">{description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href={url}>
                        Ver Detalles
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
} 
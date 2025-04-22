import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  url: string
}

export default function ProductCard({ title, description, imageSrc, url }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 font-heading">{title}</h3>
        <p className="text-neutral/80">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
        >
          <Link href={url} className="flex items-center justify-center">
            Ver Detalles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

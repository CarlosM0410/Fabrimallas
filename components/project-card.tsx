import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight, MapPin } from "lucide-react"

interface ProjectCardProps {
  title: string
  location: string
  category: string
  imageSrc: string
  url: string
}

export default function ProjectCard({ title, location, category, imageSrc, url }: ProjectCardProps) {
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
          <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">{category}</div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 font-heading">{title}</h3>
        <div className="flex items-center text-neutral/80 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
        >
          <Link href={url} className="flex items-center justify-center">
            Ver Proyecto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

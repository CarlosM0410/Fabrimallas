import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="italic mb-6 text-neutral/90">{quote}</p>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-neutral/70">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}

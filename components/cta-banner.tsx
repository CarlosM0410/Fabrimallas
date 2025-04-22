import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CTABanner({ title, description, buttonText, buttonLink = "/" }: CTABannerProps) {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">{description}</p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}

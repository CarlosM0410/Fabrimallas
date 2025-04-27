"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const [contactPhone, setContactPhone] = useState("300 656 4547")
  const [contactEmail, setContactEmail] = useState("fabrimallas2011@hotmail.com")
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/573006564547")

  useEffect(() => {
    // Cargar datos del localStorage al montar el componente
    const savedSettings = localStorage.getItem("fabrimallasAdminSettings")
    if (savedSettings) {
      const settings = JSON.parse(savedSettings)
      if (settings.phone) setContactPhone(settings.phone)
      if (settings.email) setContactEmail(settings.email)
      if (settings.whatsapp) setWhatsappUrl(settings.whatsapp)
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Descripción */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white font-heading">Fabrimallas®</span>
            </Link>
            <p className="text-neutral-light mb-4">
              Artesanía que protege, seguridad que perdura. Soluciones de cerramientos y gaviones con la más alta
              calidad para proyectos residenciales, industriales y de construcción.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-neutral-light hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-neutral-light hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-neutral-light hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-neutral-light hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-light hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-neutral-light hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <a
                  href="/Fabrimallas_Especificaciones_Sectores_v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-light hover:text-white transition-colors"
                >
                  Guía de Especificaciones (PDF)
                </a>
              </li>
              <li>
                <Link href="/sectores" className="text-neutral-light hover:text-white transition-colors">
                  Sectores
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-neutral-light hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-neutral-light hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-light hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-neutral-light hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Productos */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos/mallas" className="text-neutral-light hover:text-white transition-colors">
                  Mallas
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/malla-triple-torsion"
                  className="text-neutral-light hover:text-white transition-colors"
                >
                  Malla Triple Torsión
                </Link>
              </li>
              <li>
                <Link href="/productos/gaviones" className="text-neutral-light hover:text-white transition-colors">
                  Gaviones
                </Link>
              </li>
              <li>
                <Link href="/productos/cerramientos" className="text-neutral-light hover:text-white transition-colors">
                  Cerramientos Integrales
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/malla-eslabonada"
                  className="text-neutral-light hover:text-white transition-colors"
                >
                  Malla Eslabonada
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Carrera 40 #42B-Esquina</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>{contactPhone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href={`mailto:${contactEmail}`} className="hover:underline">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>
                  Lunes a Viernes: 8:00 AM - 5:30 PM
                  <br />
                  Sábados: 8:00 AM - 12:30 PM
                </span>
              </li>
            </ul>

            <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contáctanos por WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Pie de página */}
        <div className="border-t border-neutral-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-light text-sm mb-4 md:mb-0">
            © {currentYear} Fabrimallas® | Todos los derechos reservados
          </p>
          <div className="flex space-x-4">
            <Link href="/politica-privacidad" className="text-neutral-light hover:text-white text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link
              href="/terminos-condiciones"
              className="text-neutral-light hover:text-white text-sm transition-colors"
            >
              Términos y Condiciones
            </Link>
            <Link href="/politica-garantia" className="text-neutral-light hover:text-white text-sm transition-colors">
              Política de Garantía
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AdminPanel() {
  const [contactPhone, setContactPhone] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [whatsappUrl, setWhatsappUrl] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Cargar datos del localStorage al montar el componente
    const savedSettings = localStorage.getItem("fabrimallasAdminSettings")
    if (savedSettings) {
      const settings = JSON.parse(savedSettings)
      setContactPhone(settings.phone || "")
      setContactEmail(settings.email || "")
      setWhatsappUrl(settings.whatsapp || "")
    }
  }, [])

  const handleSaveChanges = () => {
    // Guardar datos en localStorage
    const settings = {
      phone: contactPhone,
      email: contactEmail,
      whatsapp: whatsappUrl,
    }

    localStorage.setItem("fabrimallasAdminSettings", JSON.stringify(settings))

    // Mostrar mensaje de éxito
    setShowSuccess(true)

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
        Panel de Administración Fabrimallas (Prototipo)
      </h1>

      {showSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">¡Guardado con éxito!</AlertTitle>
          <AlertDescription className="text-green-700">Los cambios han sido guardados correctamente.</AlertDescription>
        </Alert>
      )}

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-heading">Datos de Contacto Editables</CardTitle>
          <CardDescription>Estos datos se mostrarán en el pie de página y en la página de contacto.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="contactPhone">Teléfono de Contacto</Label>
            <Input
              id="contactPhone"
              type="tel"
              placeholder="300 656 4547"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactEmail">Email de Contacto</Label>
            <Input
              id="contactEmail"
              type="email"
              placeholder="fabrimallas2011@hotmail.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsappUrl">Enlace WhatsApp (completo)</Label>
            <Input
              id="whatsappUrl"
              type="url"
              placeholder="https://wa.me/573006564547"
              value={whatsappUrl}
              onChange={(e) => setWhatsappUrl(e.target.value)}
            />
            <p className="text-sm text-neutral/70">
              Formato: https://wa.me/573001234567 (incluir código de país sin el +)
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveChanges} className="bg-primary hover:bg-primary/90 text-white">
            Guardar Cambios
          </Button>
        </CardFooter>
      </Card>

      <Alert className="mt-8 bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Nota importante</AlertTitle>
        <AlertDescription className="text-amber-700">
          Este es un panel de administración de prototipo que utiliza localStorage para almacenar los datos. En un
          entorno de producción, estos datos deberían almacenarse en una base de datos segura.
        </AlertDescription>
      </Alert>
    </div>
  )
}

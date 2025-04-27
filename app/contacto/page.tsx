"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import { useEffect } from "react"

export default function ContactoPage() {
  const [contactPhone, setContactPhone] = useState("300 656 4547")
  const [contactEmail, setContactEmail] = useState("fabrimallas2011@hotmail.com")
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/573006564547")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    metros: "",
    ubicacion: "",
    mensaje: "",
    aceptaPolitica: false,
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tipoProyecto: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, aceptaPolitica: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de envío de formulario
    console.log("Formulario enviado:", formData)
    // Mostrar mensaje de éxito
    setFormSubmitted(true)
    // Resetear formulario después de 5 segundos
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        tipoProyecto: "",
        metros: "",
        ubicacion: "",
        mensaje: "",
        aceptaPolitica: false,
      })
    }, 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Contacta con Nosotros
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Estamos listos para asesorarte y ofrecerte la mejor solución para tus necesidades de cerramientos, mallas y
            gaviones.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-heading">Información de Contacto</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-bold mb-1">Dirección</h3>
                        <p>Carrera 40 #42B-Esquina</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-bold mb-1">Teléfono / WhatsApp</h3>
                        <p>{contactPhone}</p>
                        <p className="mt-2">
                          <Button
                            asChild
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                              Contáctanos por WhatsApp
                            </a>
                          </Button>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p>
                          <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                            {contactEmail}
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-bold mb-1">Horario de Atención</h3>
                        <p>
                          Lunes a Viernes: 8:00 AM - 5:30 PM
                          <br />
                          Sábados: 8:00 AM - 12:30 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 font-heading">Nuestra Ubicación</h3>
                <div className="aspect-video bg-neutral-light/50 rounded-lg flex items-center justify-center">
                  <p className="text-neutral">Mapa de Google Maps aquí</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-heading">Solicita tu Cotización</h2>

              {formSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">¡Solicitud Enviada!</h3>
                    <p className="text-green-700">
                      Hemos recibido tu solicitud de cotización. Nuestro equipo se pondrá en contacto contigo a la
                      brevedad.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu nombre"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa (opcional)</Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">WhatsApp/Teléfono *</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="300 656 4547"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipoProyecto">Tipo de Proyecto *</Label>
                      <Select value={formData.tipoProyecto} onValueChange={handleSelectChange} required>
                        <SelectTrigger id="tipoProyecto">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cerramiento">Cerramiento</SelectItem>
                          <SelectItem value="gaviones">Gaviones</SelectItem>
                          <SelectItem value="malla-eslabonada">Malla Eslabonada</SelectItem>
                          <SelectItem value="malla-triple-torsion">Malla Triple Torsión</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="metros">Metros Lineales/Cantidad (aprox.)</Label>
                      <Input
                        id="metros"
                        name="metros"
                        value={formData.metros}
                        onChange={handleChange}
                        placeholder="Ej: 100 metros"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ubicacion">Ubicación (Municipio/Departamento)</Label>
                    <Input
                      id="ubicacion"
                      name="ubicacion"
                      value={formData.ubicacion}
                      onChange={handleChange}
                      placeholder="Ej: Cali, Valle del Cauca"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      placeholder="Describe tu proyecto o necesidad"
                      rows={5}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="aceptaPolitica"
                      checked={formData.aceptaPolitica}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <Label htmlFor="aceptaPolitica" className="text-sm">
                      Acepto la{" "}
                      <a href="/politica-privacidad" className="text-primary hover:underline">
                        Política de Privacidad
                      </a>{" "}
                      y el tratamiento de mis datos personales. *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    ENVIAR SOLICITUD
                  </Button>

                  <p className="text-sm text-neutral/70">* Campos obligatorios</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

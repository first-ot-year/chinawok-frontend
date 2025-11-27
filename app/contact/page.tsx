import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Contáctanos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes alguna duda, sugerencia o reclamo? Estamos aquí para escucharte. Completa el formulario o contáctanos
          por nuestros canales oficiales.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Envíanos un mensaje</CardTitle>
            <CardDescription>Te responderemos lo más pronto posible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="999 999 999" type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" placeholder="nombre@ejemplo.com" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="Consulta sobre mi pedido" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <h3 className="font-medium">Central Telefónica</h3>
                  <p className="text-muted-foreground">(01) 612-3456</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">atencion@chinawok.com.pe</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <h3 className="font-medium">Oficina Principal</h3>
                  <p className="text-muted-foreground">Av. Javier Prado Este 4200, Surco, Lima, Perú</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Síguenos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Cuál es el tiempo de entrega promedio?</AccordionTrigger>
            <AccordionContent>
              El tiempo de entrega promedio es de 30 a 45 minutos, dependiendo de la zona de reparto y la demanda del
              momento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Cuáles son los métodos de pago aceptados?</AccordionTrigger>
            <AccordionContent>
              Aceptamos efectivo, todas las tarjetas de crédito/débito (Visa, Mastercard, Amex, Diners) y pagos
              digitales como Yape o Plin al momento de la entrega.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Tienen opciones vegetarianas?</AccordionTrigger>
            <AccordionContent>
              Sí, contamos con opciones vegetarianas en nuestra carta, como el Aeropuerto de Verduras y diversos
              saltados sin carne.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Puedo programar mi pedido?</AccordionTrigger>
            <AccordionContent>
              Sí, puedes realizar tu pedido con anticipación a través de nuestra web o call center indicando la hora
              deseada de entrega.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

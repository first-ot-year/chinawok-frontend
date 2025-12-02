"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/lib/context/cart-context"
import { ordersService } from "@/lib/services/orders-service"
import { useTenant } from "@/lib/context/tenant-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, User, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const { customerId } = useTenant()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    deliveryAddress: "",
    notes: "",
  })

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-600 mb-4">Tu carrito está vacío</p>
        <Button asChild className="bg-cw-green hover:bg-green-700">
          <Link href="/">Volver al menú</Link>
        </Button>
      </main>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!formData.customerName || !formData.phone || !formData.deliveryAddress) {
      setError("Por favor, completa todos los campos requeridos")
      return
    }

    try {
      setLoading(true)

      // NOTE: The backend service for creating an order only expects customer_id and items.
      // The other customer details might be stored separately or handled in a different step.
      const orderData = {
        customer_id: customerId,
        items: items.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        // We are passing these along just in case, but they are not in the Postman collection
        customer_name: formData.customerName,
        phone: formData.phone,
        delivery_address: formData.deliveryAddress,
        notes: formData.notes,
        total: total,
      }

      const response = await ordersService.createOrder(orderData)

      if (response && response.data && response.data.order_id) {
        clearCart()
        router.push(`/orders/${response.data.order_id}`)
      } else {
        const errorMessage = response.message || "Error al crear el pedido. Por favor, intenta de nuevo."
        setError(errorMessage)
      }
    } catch (err) {
      console.error("Error creating order:", err)
      setError("Error al procesar tu pedido. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const deliveryFee = total > 24.9 ? 0 : 5.0

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizar Compra</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
            )}

            {/* Información Personal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Información Personal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cw-green focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cw-green focus:border-transparent"
                    placeholder="9XXXXXXXX"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dirección de Entrega */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Dirección de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dirección *</label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cw-green focus:border-transparent"
                    placeholder="Calle, número, apartamento, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notas Adicionales</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cw-green focus:border-transparent"
                    placeholder="Instrucciones especiales para la entrega..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-cw-green hover:bg-green-700 text-white text-lg h-12"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creando pedido...
                </>
              ) : (
                "Confirmar y Pagar"
              )}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Resumen de Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 pb-4 border-b border-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.title} x{item.quantity}
                    </span>
                    <span>S/ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>S/ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span className={deliveryFee === 0 ? "text-cw-green font-semibold" : ""}>
                    {deliveryFee === 0 ? "Gratis" : `S/ ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-cw-green">S/ {total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

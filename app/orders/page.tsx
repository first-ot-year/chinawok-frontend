"use client"

import { useEffect, useState } from "react"
import { ordersService } from "@/lib/services/orders-service"
import { OrderCard } from "@/components/order-card"
import { useTenant } from "@/lib/context/tenant-context"
import { Loader2 } from "lucide-react"

export default function OrdersPage() {
  const { customerId } = useTenant()
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true)
        const data = await ordersService.getOrdersByCustomer(customerId)
        setOrders(data.orders || [])
        setError(null)
      } catch (err) {
        console.error("Error fetching orders:", err)
        setError("Error al cargar los pedidos")
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [customerId])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mis Pedidos</h1>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-cw-green" />
        </div>
      )}

      {error && <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>}

      {!loading && orders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No tienes pedidos aún</p>
          <a href="/menu" className="text-cw-green font-semibold hover:underline">
            Ir al menú
          </a>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            status={order.status}
            total={order.total}
            createdAt={order.created_at}
            deliveryAddress={order.delivery_address}
            phone={order.phone}
          />
        ))}
      </div>
    </main>
  )
}

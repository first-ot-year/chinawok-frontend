"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { statusService } from "@/lib/services/status-service"
import { OrderTracker } from "@/components/order-tracker"
import { Loader2, Phone } from "lucide-react"

interface OrderHistory {
  timestamp: string
  status: string
  description: string
}

export default function OrderDetailPage() {
  const params = useParams()
  const orderId = params.id as string

  const [currentStatus, setCurrentStatus] = useState("")
  const [history, setHistory] = useState<OrderHistory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [statusRes, historyRes] = await Promise.all([
          statusService.getOrderStatus(orderId),
          statusService.getOrderHistory(orderId),
        ])

        setCurrentStatus(statusRes.status)
        setHistory(historyRes.history || [])
        setError(null)
      } catch (err) {
        console.error("Error fetching order details:", err)
        setError("Error al cargar los detalles del pedido")
      } finally {
        setLoading(false)
      }
    }

    if (orderId) {
      fetchData()
    }
  }, [orderId])

  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <a href="/orders" className="text-cw-green font-semibold text-sm hover:underline mb-4 inline-block">
          ← Volver a mis pedidos
        </a>
        <h1 className="text-3xl font-bold text-gray-900">Pedido #{orderId}</h1>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-cw-green" />
        </div>
      )}

      {error && <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm mb-6">{error}</div>}

      {!loading && (
        <div className="space-y-6">
          {/* Tracker Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Estado del Pedido</h2>
            <OrderTracker status={currentStatus} />
          </div>

          {/* Timeline Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Historial</h2>
            <div className="space-y-4">
              {history.length === 0 ? (
                <p className="text-gray-500 text-sm">No hay historial disponible</p>
              ) : (
                history.map((entry, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-cw-green"></div>
                      {idx < history.length - 1 && <div className="h-12 w-0.5 bg-gray-200 mt-2"></div>}
                    </div>
                    <div className="pb-4">
                      <p className="font-semibold text-gray-900">{entry.status}</p>
                      <p className="text-xs text-gray-500 mt-1">{entry.description}</p>
                      <time className="text-xs text-gray-400 mt-2 block">
                        {new Date(entry.timestamp).toLocaleString()}
                      </time>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-cw-red text-white p-6 rounded-xl">
            <h3 className="font-bold mb-4">¿Necesitas ayuda?</h3>
            <div className="space-y-3">
              <button className="flex items-center gap-2 w-full hover:opacity-90 transition-opacity">
                <Phone className="h-5 w-5" />
                <span>Llamar al 01 - 612 - 8000</span>
              </button>
              <button className="flex items-center gap-2 w-full hover:opacity-90 transition-opacity">
                <span>💬</span>
                <span>Contactar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

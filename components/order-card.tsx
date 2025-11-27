"use client"

import { Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface OrderCardProps {
  id: string
  status: string
  total: number
  createdAt: string
  deliveryAddress?: string
  phone?: string
}

export function OrderCard({ id, status, total, createdAt, deliveryAddress, phone }: OrderCardProps) {
  const statusColors: { [key: string]: string } = {
    "Iniciando pedido": "bg-yellow-50 border-yellow-200",
    "Cocinero asignado": "bg-blue-50 border-blue-200",
    Cocinando: "bg-blue-50 border-blue-200",
    "Esperando empaque": "bg-blue-50 border-blue-200",
    Empacando: "bg-purple-50 border-purple-200",
    Listo: "bg-purple-50 border-purple-200",
    "En camino": "bg-orange-50 border-orange-200",
    Entregado: "bg-green-50 border-green-200",
  }

  return (
    <Link href={`/orders/${id}`}>
      <div
        className={`p-4 rounded-xl border-2 transition-all hover:shadow-lg cursor-pointer ${statusColors[status] || "bg-gray-50 border-gray-200"}`}
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Pedido #{id}</h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <Clock className="h-3 w-3" />
              {new Date(createdAt).toLocaleDateString()}
            </div>
          </div>
          <span className="text-xl font-bold text-cw-green">S/{total.toFixed(2)}</span>
        </div>

        <div className="space-y-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-700 border border-gray-200">
            {status}
          </span>
          {deliveryAddress && (
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <MapPin className="h-3 w-3" />
              <span className="line-clamp-1">{deliveryAddress}</span>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Phone className="h-3 w-3" />
              <span>{phone}</span>
            </div>
          )}
        </div>

        <Button size="sm" className="w-full bg-cw-green hover:bg-green-700 text-white text-xs h-8">
          Ver detalles
        </Button>
      </div>
    </Link>
  )
}

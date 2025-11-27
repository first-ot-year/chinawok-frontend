"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Package, Truck, CheckCircle2 } from "lucide-react"

interface Order {
  id: string
  customerId: string
  status: string
  total: number
  createdAt: string
  phone?: string
}

interface OrderManagementTableProps {
  orders: Order[]
  onAssignCook: (orderId: string) => Promise<void>
  onMarkPacked: (orderId: string) => Promise<void>
  onAssignDelivery: (orderId: string) => Promise<void>
  onMarkDelivered: (orderId: string) => Promise<void>
}

export function OrderManagementTable({
  orders,
  onAssignCook,
  onMarkPacked,
  onAssignDelivery,
  onMarkDelivered,
}: OrderManagementTableProps) {
  const getStatusBadge = (status: string) => {
    const colors: { [key: string]: string } = {
      "Iniciando pedido": "bg-yellow-100 text-yellow-800",
      "Cocinero asignado": "bg-blue-100 text-blue-800",
      Cocinando: "bg-blue-100 text-blue-800",
      Empacando: "bg-purple-100 text-purple-800",
      "En camino": "bg-orange-100 text-orange-800",
      Entregado: "bg-green-100 text-green-800",
    }
    return colors[status] || "bg-gray-100 text-gray-800"
  }

  const getNextAction = (status: string) => {
    const actions: { [key: string]: { label: string; icon: any; action: string } } = {
      "Iniciando pedido": { label: "Asignar Cocinero", icon: ChefHat, action: "assignCook" },
      Cocinando: { label: "Marcar Empacado", icon: Package, action: "markPacked" },
      "Esperando empaque": { label: "Marcar Empacado", icon: Package, action: "markPacked" },
      Empacando: { label: "Asignar Repartidor", icon: Truck, action: "assignDelivery" },
      "En camino": { label: "Marcar Entregado", icon: CheckCircle2, action: "markDelivered" },
    }
    return actions[status]
  }

  const handleAction = async (orderId: string, action: string) => {
    try {
      if (action === "assignCook") await onAssignCook(orderId)
      if (action === "markPacked") await onMarkPacked(orderId)
      if (action === "assignDelivery") await onAssignDelivery(orderId)
      if (action === "markDelivered") await onMarkDelivered(orderId)
    } catch (error) {
      console.error("Error performing action:", error)
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Pedido ID</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const nextAction = getNextAction(order.status)
            return (
              <TableRow key={order.id} className="hover:bg-gray-50">
                <TableCell className="font-bold text-cw-red">#{order.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{order.customerId}</span>
                    {order.phone && <span className="text-xs text-gray-500">{order.phone}</span>}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusBadge(order.status)}>{order.status}</Badge>
                </TableCell>
                <TableCell className="font-semibold text-cw-green">S/{order.total.toFixed(2)}</TableCell>
                <TableCell className="text-sm text-gray-600">
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  {nextAction && (
                    <Button
                      size="sm"
                      onClick={() => handleAction(order.id, nextAction.action)}
                      className="bg-cw-green hover:bg-green-700 text-white text-xs h-8"
                    >
                      <nextAction.icon className="h-3 w-3 mr-1" />
                      {nextAction.label}
                    </Button>
                  )}
                  {!nextAction && <Badge className="bg-green-100 text-green-800">Completado</Badge>}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { statusService } from "@/lib/services/status-service"
import { fulfillmentService } from "@/lib/services/fulfillment-service"
import { DashboardStats } from "@/components/dashboard-stats"
import { OrderManagementTable } from "@/components/order-management-table"
import { Loader2 } from "lucide-react"

interface DashboardData {
  totalOrders: number
  pendingOrders: number
  inDelivery: number
  completed: number
  orders: any[]
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData>({
    totalOrders: 0,
    pendingOrders: 0,
    inDelivery: 0,
    completed: 0,
    orders: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        const dashboardRes = await statusService.getDashboardStatus()

        const pendingStatuses = ["Iniciando pedido", "Cocinero asignado", "Cocinando", "Esperando empaque", "Empacando"]
        const deliveryStatuses = ["En camino"]
        const completedStatuses = ["Entregado"]

        const stats = {
          totalOrders: dashboardRes.orders?.length || 0,
          pendingOrders: dashboardRes.orders?.filter((o: any) => pendingStatuses.includes(o.status)).length || 0,
          inDelivery: dashboardRes.orders?.filter((o: any) => deliveryStatuses.includes(o.status)).length || 0,
          completed: dashboardRes.orders?.filter((o: any) => completedStatuses.includes(o.status)).length || 0,
          orders: dashboardRes.orders || [],
        }

        setData(stats)
        setError(null)
      } catch (err) {
        console.error("Error fetching dashboard data:", err)
        setError("Error al cargar el dashboard")
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
    const interval = setInterval(fetchDashboardData, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleAssignCook = async (orderId: string) => {
    try {
      await fulfillmentService.assignCook(orderId)
      setData((prev) => ({
        ...prev,
        orders: prev.orders.map((o) => (o.id === orderId ? { ...o, status: "Cocinero asignado" } : o)),
      }))
    } catch (err) {
      console.error("Error assigning cook:", err)
    }
  }

  const handleMarkPacked = async (orderId: string) => {
    try {
      await fulfillmentService.markPacked(orderId)
      setData((prev) => ({
        ...prev,
        orders: prev.orders.map((o) => (o.id === orderId ? { ...o, status: "Empacando" } : o)),
      }))
    } catch (err) {
      console.error("Error marking packed:", err)
    }
  }

  const handleAssignDelivery = async (orderId: string) => {
    try {
      await fulfillmentService.assignDelivery(orderId)
      setData((prev) => ({
        ...prev,
        orders: prev.orders.map((o) => (o.id === orderId ? { ...o, status: "En camino" } : o)),
      }))
    } catch (err) {
      console.error("Error assigning delivery:", err)
    }
  }

  const handleMarkDelivered = async (orderId: string) => {
    try {
      await fulfillmentService.markDelivered(orderId)
      setData((prev) => ({
        ...prev,
        orders: prev.orders.map((o) => (o.id === orderId ? { ...o, status: "Entregado" } : o)),
      }))
    } catch (err) {
      console.error("Error marking delivered:", err)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard de Órdenes</h1>
        <p className="text-gray-600 mt-2">Gestiona todos los pedidos y su cumplimiento</p>
      </div>

      {error && <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm mb-6">{error}</div>}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-cw-green" />
        </div>
      ) : (
        <div className="space-y-8">
          <DashboardStats
            totalOrders={data.totalOrders}
            pendingOrders={data.pendingOrders}
            inDelivery={data.inDelivery}
            completed={data.completed}
          />

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Órdenes Activas</h2>
            <OrderManagementTable
              orders={data.orders}
              onAssignCook={handleAssignCook}
              onMarkPacked={handleMarkPacked}
              onAssignDelivery={handleAssignDelivery}
              onMarkDelivered={handleMarkDelivered}
            />
          </div>
        </div>
      )}
    </main>
  )
}

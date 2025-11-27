"use client"

import { TrendingUp, Package, Truck, CheckCircle } from "lucide-react"

interface DashboardStatsProps {
  totalOrders: number
  pendingOrders: number
  inDelivery: number
  completed: number
}

export function DashboardStats({ totalOrders, pendingOrders, inDelivery, completed }: DashboardStatsProps) {
  const stats = [
    {
      label: "Total de Pedidos",
      value: totalOrders,
      icon: TrendingUp,
      color: "bg-blue-50 text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      label: "Pendientes",
      value: pendingOrders,
      icon: Package,
      color: "bg-yellow-50 text-yellow-700",
      borderColor: "border-yellow-200",
    },
    {
      label: "En Camino",
      value: inDelivery,
      icon: Truck,
      color: "bg-orange-50 text-orange-700",
      borderColor: "border-orange-200",
    },
    {
      label: "Entregados",
      value: completed,
      icon: CheckCircle,
      color: "bg-green-50 text-green-700",
      borderColor: "border-green-200",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div key={idx} className={`p-6 rounded-xl border-2 ${stat.borderColor} ${stat.color}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-75">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <Icon className="h-8 w-8 opacity-50" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, Package, Search, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TrackingPage() {
  const [orderId, setOrderId] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [orderStatus, setOrderStatus] = useState<null | "found" | "not-found">(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      setIsSearching(false)
      if (orderId.length > 3) {
        setOrderStatus("found")
      } else {
        setOrderStatus("not-found")
      }
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Sigue tu Pedido</h1>
        <p className="text-muted-foreground">Ingresa el número de tu pedido para conocer su estado en tiempo real.</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buscar Pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="order-id" className="sr-only">
                Número de Pedido
              </Label>
              <Input
                id="order-id"
                placeholder="Ej: ORD-123456"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isSearching}>
              {isSearching ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Buscando...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Buscar
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {orderStatus === "not-found" && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="pt-6 text-center text-destructive">
            <p>No pudimos encontrar un pedido con ese número. Por favor verifica e intenta nuevamente.</p>
          </CardContent>
        </Card>
      )}

      {orderStatus === "found" && (
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle className="text-xl">Pedido #{orderId}</CardTitle>
                <CardDescription>Realizado el 21 Nov, 2025 - 14:30 PM</CardDescription>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                En Preparación
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-8">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted md:left-0 md:top-8 md:right-0 md:w-full md:h-0.5" />

              <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                <StatusStep icon={Package} title="Pedido Recibido" time="14:30 PM" active={true} completed={true} />
                <StatusStep icon={Clock} title="En Preparación" time="14:35 PM" active={true} completed={false} />
                <StatusStep icon={Truck} title="En Camino" time="Pendiente" active={false} completed={false} />
                <StatusStep icon={MapPin} title="Entregado" time="Pendiente" active={false} completed={false} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function StatusStep({
  icon: Icon,
  title,
  time,
  active,
  completed,
}: {
  icon: any
  title: string
  time: string
  active: boolean
  completed: boolean
}) {
  return (
    <div className="flex md:flex-col items-center gap-4 md:gap-2 relative z-10 bg-background md:w-full">
      <div
        className={cn(
          "flex items-center justify-center w-16 h-16 rounded-full border-4 transition-colors",
          completed
            ? "bg-green-100 border-green-600 text-green-600"
            : active
              ? "bg-red-100 border-red-600 text-red-600"
              : "bg-muted border-muted-foreground/20 text-muted-foreground",
        )}
      >
        <Icon className="h-8 w-8" />
      </div>
      <div className="md:text-center">
        <h3 className={cn("font-semibold", active || completed ? "text-foreground" : "text-muted-foreground")}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}

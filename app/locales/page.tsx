"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, MapPin, Phone, Search } from "lucide-react"

// Mock data for stores
const stores = [
  {
    id: 1,
    name: "China Wok - Jockey Plaza",
    address: "Av. Javier Prado Este 4200, Santiago de Surco",
    hours: "11:00 AM - 10:00 PM",
    phone: "(01) 612-3456",
    coordinates: { lat: -12.085, lng: -76.976 },
  },
  {
    id: 2,
    name: "China Wok - Megaplaza",
    address: "Av. Alfredo Mendiola 3698, Independencia",
    hours: "11:00 AM - 10:00 PM",
    phone: "(01) 612-3457",
    coordinates: { lat: -11.993, lng: -77.063 },
  },
  {
    id: 3,
    name: "China Wok - Larcomar",
    address: "Malecón de la Reserva 610, Miraflores",
    hours: "11:00 AM - 11:00 PM",
    phone: "(01) 612-3458",
    coordinates: { lat: -12.133, lng: -77.028 },
  },
  {
    id: 4,
    name: "China Wok - Plaza Norte",
    address: "Av. Tomas Valle, Independencia",
    hours: "11:00 AM - 10:00 PM",
    phone: "(01) 612-3459",
    coordinates: { lat: -12.006, lng: -77.059 },
  },
  {
    id: 5,
    name: "China Wok - Real Plaza Salaverry",
    address: "Av. Gral. Salaverry 2370, Jesús María",
    hours: "11:00 AM - 10:00 PM",
    phone: "(01) 612-3460",
    coordinates: { lat: -12.089, lng: -77.051 },
  },
]

export default function LocalesPage() {
  const [selectedStore, setSelectedStore] = useState(stores[0])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-4rem)] flex flex-col">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Nuestros Locales</h1>

      <div className="grid lg:grid-cols-3 gap-8 h-full">
        {/* List Section */}
        <Card className="flex flex-col h-full lg:col-span-1">
          <CardHeader>
            <CardTitle>Buscar Tienda</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o dirección..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-[500px] lg:h-[calc(100vh-16rem)]">
              <div className="flex flex-col gap-2 p-4">
                {filteredStores.map((store) => (
                  <button
                    key={store.id}
                    onClick={() => setSelectedStore(store)}
                    className={`text-left p-4 rounded-lg border transition-colors hover:bg-accent ${
                      selectedStore.id === store.id ? "border-red-600 bg-red-50" : "border-border"
                    }`}
                  >
                    <h3 className="font-semibold">{store.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{store.address}</p>
                  </button>
                ))}
                {filteredStores.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">No se encontraron locales.</p>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Map/Detail Section */}
        <Card className="lg:col-span-2 flex flex-col h-full overflow-hidden">
          <div className="bg-muted w-full h-full min-h-[300px] flex items-center justify-center relative">
            <MapPin className="h-16 w-16 text-red-600 animate-bounce" />
            <p className="absolute bottom-4 text-muted-foreground text-sm">Mapa Interactivo (Simulado)</p>
          </div>

          <CardContent className="p-6 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedStore.name}</h2>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span>{selectedStore.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-red-600" />
                    <span>{selectedStore.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-red-600" />
                    <span>{selectedStore.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Button className="flex-1 bg-red-600 hover:bg-red-700">Pedir aquí</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Cómo llegar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

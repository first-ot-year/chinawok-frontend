"use client"

import { Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type CartItem as CartItemType, useCart } from "@/lib/context/cart-context"

export function CartItem({ item }: { item: CartItemType }) {
  const { removeItem, updateQuantity } = useCart()

  return (
    <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-24 w-24 object-cover rounded-lg" />

      <div className="flex-1">
        <h3 className="font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
        <p className="text-lg font-bold text-cw-green mt-2">S/{item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
          className="h-8 w-8"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="h-8 w-8"
        >
          <Plus className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => removeItem(item.id)}
          className="ml-4 h-8 w-8 text-red-600 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

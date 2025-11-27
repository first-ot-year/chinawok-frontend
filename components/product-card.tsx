"use client"

import { Plus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useCart } from "@/lib/context/cart-context"

interface ProductCardProps {
  title: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  tag?: string
  slug?: string
}

export function ProductCard({
  title,
  description,
  price,
  originalPrice,
  discount,
  image,
  tag,
  slug,
}: ProductCardProps) {
  const { addItem } = useCart()

  const Content = () => (
    <>
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-1 text-sm font-bold text-gray-900 line-clamp-1">{title}</h3>
        <p className="mb-4 text-xs text-gray-500 line-clamp-2">{description}</p>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            {originalPrice && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-400 line-through">S/{originalPrice.toFixed(2)}</span>
                {discount && (
                  <Badge variant="destructive" className="h-4 rounded-sm px-1 text-[10px] bg-cw-red font-bold">
                    -{discount}%
                  </Badge>
                )}
              </div>
            )}
            <span className="text-lg font-black text-gray-900">S/{price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="group relative flex w-[280px] flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg flex-shrink-0">
      {tag && (
        <div className="absolute left-0 top-4 z-10 rounded-r-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">
          {tag}
        </div>
      )}
      <button className="absolute right-4 top-4 z-10 text-gray-400 hover:text-cw-red">
        <Heart className="h-5 w-5" />
      </button>

      {slug ? (
        <Link href={`/${slug}`} className="flex-1 flex flex-col">
          <Content />
        </Link>
      ) : (
        <div className="flex-1 flex flex-col">
          <Content />
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <Button
          onClick={() => {
            addItem({
              id: slug || title,
              title,
              price,
              quantity: 1,
              image,
              description,
            })
          }}
          size="icon"
          className="h-8 w-8 rounded-full bg-cw-green hover:bg-green-700 shadow-md"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

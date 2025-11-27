import { ProductCard } from "@/components/product-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductSectionProps {
  title: string
  products: any[]
}

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-black uppercase text-gray-900">{title}</h2>
          <div className="flex gap-2">
            {/* Dots navigation mostly visual */}
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-cw-green"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide md:gap-6">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>

          <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cw-green text-cw-green hover:bg-green-50 h-10 w-10 bg-white shadow-lg z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cw-green text-cw-green hover:bg-green-50 h-10 w-10 bg-white shadow-lg z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

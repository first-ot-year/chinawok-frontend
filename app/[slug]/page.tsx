import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingBag, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Mock data based on typical product structure
  const product = {
    title: "Combo Arroz Chaufa de Pollo",
    description:
      "Delicioso arroz chaufa de pollo salteado al wok con la receta secreta, acompañado de 2 wantanes fritos y gaseosa personal.",
    price: 24.9,
    originalPrice: 35.9,
    image: "/chinese-food-combo.jpg",
    calories: "850 kcal",
    rating: 4.8,
    reviews: 124,
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 border border-gray-200">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-cw-red hover:bg-red-700">Promoción</Badge>
              <div className="flex items-center text-yellow-500 text-sm font-medium">
                <Star className="w-4 h-4 fill-current mr-1" />
                {product.rating} ({product.reviews} reseñas)
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-gray-500 text-lg leading-relaxed">{product.description}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Personaliza tu pedido</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-medium">Agrandar papas</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">+ S/4.90</span>
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-cw-red focus:ring-cw-red" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-medium">Agregar Wantan (2 un)</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">+ S/3.00</span>
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-cw-red focus:ring-cw-red" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">S/{product.originalPrice.toFixed(2)}</span>
                <span className="text-4xl font-black text-gray-900">S/{product.price.toFixed(2)}</span>
              </div>

              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white">
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-bold text-lg">1</span>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button className="w-full h-14 text-lg font-bold bg-cw-green hover:bg-green-700 rounded-xl shadow-lg shadow-green-200/50">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

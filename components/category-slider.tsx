import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "ChinaWeek", image: "/delicious-chinese-cuisine.png" },
  { name: "Chijaukay A lo Pobre", image: "/chicken-chijaukay.jpg" },
  { name: "Promociones", image: "/food-promo.jpg" },
  { name: "Banquetazos", image: "/family-meal.png" },
  { name: "Combos Personales", image: "/combo-meal.png" },
  { name: "Clásicos", image: "/fried-rice.png" },
]

export function CategorySlider() {
  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
        {categories.map((cat, idx) => (
          <Link key={idx} href="/menu" className="flex flex-col items-center group min-w-[120px] cursor-pointer">
            <div className="relative mb-3 h-24 w-40 md:h-28 md:w-48 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:shadow-md flex items-center justify-center">
              <img
                src={cat.image || "/placeholder.svg"}
                alt={cat.name}
                className="h-full w-full object-contain rounded-xl"
              />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">
                {cat.name}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Slider Arrows */}
      <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-cw-green bg-white p-2 text-cw-green shadow-md hover:bg-gray-50 hidden md:block">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-cw-green bg-white p-2 text-cw-green shadow-md hover:bg-gray-50 hidden md:block">
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

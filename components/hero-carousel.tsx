import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function HeroCarousel() {
  return (
    <div className="relative w-full bg-[#E3001B] text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8 md:py-12 h-auto md:h-[400px]">
        {/* Content Left */}
        <div className="w-full md:w-1/2 z-10 space-y-4 md:space-y-6 text-center md:text-left mb-8 md:mb-0">
          <div className="inline-block border-4 border-white p-2 transform -rotate-2">
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-none">
              China
              <br />
              Week
            </h1>
          </div>
          <div>
            <p className="text-sm font-bold uppercase mb-1">Válido en:</p>
            <div className="inline-flex items-center gap-2 border border-white rounded-full px-3 py-1 text-xs font-bold bg-red-800/30">
              <span>SALÓN</span> | <span>CHINAWOK.COM.PE</span> | <span>(01) 612-8000</span>
            </div>
          </div>
          <Link href="/menu">
            <Button className="bg-black hover:bg-gray-900 text-white rounded-full px-8 py-6 text-lg font-bold mt-4">
              Comprar
            </Button>
          </Link>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -top-10 -right-10 bg-white text-cw-red rounded-full w-32 h-32 flex flex-col items-center justify-center z-20 shadow-lg transform rotate-12">
              <span className="text-lg font-bold">Más de</span>
              <span className="text-4xl font-black leading-none">
                40<span className="text-2xl">%</span>
              </span>
              <span className="text-sm font-bold">DTO.</span>
            </div>
            <img
              src="/chinese-food-combo.jpg"
              alt="China Wok Promo"
              className="relative z-10 object-contain max-h-[300px] md:max-h-[400px]"
            />
            {/* Drink bottles */}
            <img
              src="/soda-bottle.png"
              alt="Inca Kola"
              className="absolute bottom-0 left-0 z-20 h-32 md:h-40 transform -translate-x-1/2"
            />
            <img
              src="/soda-bottle.png"
              alt="Inca Kola"
              className="absolute bottom-0 left-10 z-20 h-32 md:h-40 transform -translate-x-1/2"
            />
          </div>
        </div>

        {/* Nav Buttons */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <div className="h-2 w-2 rounded-full bg-white/50"></div>
          <div className="h-2 w-2 rounded-full bg-white/50"></div>
          <div className="h-2 w-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  )
}

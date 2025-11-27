import { HeroCarousel } from "@/components/hero-carousel"
import { CategorySlider } from "@/components/category-slider"
import { ProductSection } from "@/components/product-section"

const recommendedProducts = [
  {
    title: "Promo Dúo Sopa al Wok",
    description: "2 encajate a eleccion (chijaukay, tipakay, mandarin o honey) , 2 sopas wantan personales",
    price: 29.9,
    originalPrice: 71.6,
    discount: 58,
    image: "/wonton-soup-combo.jpg",
    slug: "promo-duo-sopa-al-wok",
  },
  {
    title: "Dúo Encájate Yapero",
    description: "Con el código yape, por S/19.90",
    price: 29.9,
    image: "/chinese-takeout-box.jpg",
    tag: "yape",
    slug: "duo-encajate-yapero",
  },
  {
    title: "Dúo Clásico al Wok",
    description: "1 Arroz Chaufa de Pollo Individual y un 1 Tallarín Taypa acompañado de 2 Wantanes",
    price: 23.9,
    originalPrice: 44.6,
    discount: 46,
    image: "/chaufa-rice.jpg",
    slug: "duo-clasico-al-wok",
  },
  {
    title: "Dúo Encajate al Wok",
    description: "2 encájate a elección (Honey, Chijaukay, Mandarin, Tipakay), 4 wantanes",
    price: 29.9,
    originalPrice: 52.5,
    discount: 43,
    image: "/chinese-combo-box.jpg",
    slug: "duo-encajate-al-wok",
  },
  {
    title: "Días Encájate Dúo",
    description: "1 Encájate Chi Jau Kay y 1 Encájate honey . Imágenes referenciales.",
    price: 19.9,
    originalPrice: 33.8,
    discount: 41,
    image: "/chicken-dish.jpg",
    slug: "dias-encajate-duo",
  },
]

const promoProducts = [
  {
    title: "Promo Combinados",
    description: "2 Combinado Taypá + 2 Wantanes",
    price: 24.9,
    originalPrice: 45.9,
    discount: 45,
    image: "/chinese-food-plate.jpg",
    slug: "promo-combinados",
  },
  {
    title: "ChinaWeek para Dos",
    description: "2 Encajate a Elección + 2 Gaseosas de 500ml",
    price: 22.9,
    originalPrice: 38.5,
    discount: 40,
    image: "/meal-for-two.jpg",
    slug: "chinaweek-para-dos",
  },
  {
    title: "ChinaWeek Sabor al Wok",
    description: "2 Sabor al Wok a Elección",
    price: 29.9,
    originalPrice: 49.9,
    discount: 40,
    image: "/wok-dish.jpg",
    slug: "chinaweek-sabor-al-wok",
  },
  {
    title: "ChinaWeek Trío Encájate",
    description: "3 Encajate a Elección + 1 Gaseosa de 1Lt",
    price: 32.9,
    originalPrice: 54.9,
    discount: 40,
    image: "/family-meal-trio.jpg",
    slug: "chinaweek-trio-encajate",
  },
]

const bestSellers = [
  {
    title: "Promo Encájate Futbolero",
    description: "Disfruta del partido con este combo especial",
    price: 35.9,
    image: "/soccer-snack-combo.jpg",
    slug: "promo-encajate-futbolero",
  },
  {
    title: "Complemento Perfecto",
    description: "Wantanes fritos con salsa de tamarindo",
    price: 12.9,
    image: "/wontons.jpg",
    slug: "complemento-perfecto",
  },
  {
    title: "Dupla Goleadora",
    description: "2 Arroz Chaufa de Pollo + Gaseosa 1.5L",
    price: 28.9,
    image: "/placeholder.svg?height=200&width=200",
    slug: "dupla-goleadora",
  },
  {
    title: "Triple A lo Pobre",
    description: "3 Platos a lo pobre con huevo y plátano",
    price: 42.9,
    image: "/placeholder.svg?height=200&width=200",
    slug: "triple-a-lo-pobre",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="pt-4">
        <HeroCarousel />
        <CategorySlider />
        <div className="space-y-4">
          <ProductSection title="RECOMENDADOS PARA TI" products={recommendedProducts} />
          <ProductSection title="PROMOCIONES" products={promoProducts} />
          <ProductSection title="LOS MÁS VENDIDOS" products={bestSellers} />
        </div>
      </div>
    </div>
  )
}

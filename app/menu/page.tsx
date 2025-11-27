import { ProductCard } from "@/components/product-card"

const categories = ["Todos", "ChinaWeek", "Promociones", "Banquetazos", "Combos Personales", "Clásicos", "Bebidas"]

const products = [
  {
    title: "Promo Dúo Sopa al Wok",
    description: "2 encajate a eleccion (chijaukay, tipakay, mandarin o honey) , 2 sopas wantan personales",
    price: 29.9,
    originalPrice: 71.6,
    discount: 58,
    image: "/wonton-soup-combo.jpg",
    category: "Promociones",
    slug: "promo-duo-sopa-al-wok",
  },
  {
    title: "Dúo Encájate Yapero",
    description: "Con el código yape, por S/19.90",
    price: 29.9,
    image: "/chinese-takeout-box.jpg",
    tag: "yape",
    category: "Promociones",
    slug: "duo-encajate-yapero",
  },
  {
    title: "Arroz Chaufa de Pollo",
    description: "Delicioso arroz salteado al wok con trozos de pollo, huevo y cebollita china.",
    price: 16.9,
    image: "/chaufa-rice.jpg",
    category: "Clásicos",
    slug: "arroz-chaufa-de-pollo",
  },
  {
    title: "Aeropuerto de Pollo",
    description: "La combinación perfecta de arroz chaufa y tallarín saltado con pollo.",
    price: 18.9,
    image: "/wok-dish.jpg",
    category: "Clásicos",
    slug: "aeropuerto-de-pollo",
  },
  {
    title: "Inka Kola 1.5L",
    description: "Bebida gaseosa sabor nacional.",
    price: 8.9,
    image: "/placeholder.svg?height=200&width=200",
    category: "Bebidas",
    slug: "inka-kola-1-5l",
  },
]

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestra Carta</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Categories */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
            <h2 className="font-bold text-lg mb-4 px-2">Categorías</h2>
            <nav className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-cw-red transition-colors"
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
            {/* Repeat products to fill grid for demo */}
            {products.map((product, idx) => (
              <ProductCard key={`repeat-${idx}`} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

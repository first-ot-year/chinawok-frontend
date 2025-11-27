import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">SOBRE NOSOTROS</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Libro de Reclamaciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trabaja con nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">SERVICIO AL CLIENTE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/locales" className="hover:text-white">
                  Locales
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Zona de Reparto
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Comprobantes Electrónicos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">SÍGUENOS</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">SUSCRÍBETE</h3>
            <p className="text-sm text-gray-400 mb-4">Entérate de nuestras promociones y noticias.</p>
            <div className="flex gap-2">
              <Input placeholder="Tu correo electrónico" className="bg-zinc-800 border-zinc-700 text-white" />
              <Button className="bg-cw-red hover:bg-red-700 text-white">Enviar</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} China Wok. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

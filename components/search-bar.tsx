"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const searchData = [
  {
    id: "horarios",
    title: "Horarios de Atención",
    content: "Lunes a Viernes: 6:00 AM - 8:00 PM\nSábados: 7:00 AM - 9:00 PM\nDomingos: 8:00 AM - 6:00 PM",
    category: "Información General",
  },
  {
    id: "ubicaciones",
    title: "Nuestras Ubicaciones",
    content:
      "Sede Principal: Av. Café Central 123, Ciudad\nSucursal Norte: Calle Aroma 456, Zona Norte\nSucursal Sur: Blvd. Tostado 789, Zona Sur",
    category: "Ubicaciones",
  },
  {
    id: "productos",
    title: "Catálogo de Productos",
    content:
      "• Café Arábica Premium - $24.99\n• Café Robusta Especial - $19.99\n• Mezclas Gourmet - $29.99\n• Café Orgánico - $34.99\n• Accesorios para café\n• Máquinas espresso",
    category: "Productos",
  },
  {
    id: "contacto",
    title: "Información de Contacto",
    content:
      "Teléfono: +1 (555) 123-4567\nEmail: info@cafepremium.com\nWhatsApp: +1 (555) 987-6543\nSitio web: www.cafepremium.com",
    category: "Contacto",
  },
  {
    id: "equipo",
    title: "Nuestro Equipo",
    content:
      "50+ empleados especializados:\n• 15 Baristas certificados\n• 8 Tostadores expertos\n• 12 Personal de ventas\n• 10 Equipo administrativo\n• 5 Especialistas en calidad",
    category: "Recursos Humanos",
  },
  {
    id: "historia",
    title: "Historia de la Empresa",
    content:
      "Fundada en 1985, Café Premium ha sido líder en la industria cafetera por más de 35 años. Comenzamos como una pequeña tostadora familiar y hoy somos reconocidos por la calidad excepcional de nuestros granos.",
    category: "Acerca de Nosotros",
  },
]

interface SearchBarProps {
  onResults: (results: any[]) => void
}

export function SearchBar({ onResults }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (!query.trim()) {
      onResults([])
      return
    }

    setIsSearching(true)

    setTimeout(() => {
      const results = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      )
      onResults(results)
      setIsSearching(false)
    }, 300)
  }

  const handleClear = () => {
    setQuery("")
    onResults([])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: "#6B8E23" }} />
        <Input
          placeholder="Buscar información de la empresa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-20 h-12 text-base border-2 focus:ring-0"
          style={{
            backgroundColor: "#FAF9F6",
            borderColor: "#6B8E23",
            color: "#4B2E2B",
          }}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-8 w-8 p-0"
              style={{ color: "#6B8E23" }}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button
            onClick={handleSearch}
            disabled={isSearching || !query.trim()}
            className="h-8 text-white"
            style={{ backgroundColor: "#C1440E" }}
          >
            {isSearching ? "..." : "Buscar"}
          </Button>
        </div>
      </div>
    </div>
  )
}

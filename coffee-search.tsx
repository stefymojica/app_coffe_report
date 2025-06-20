"use client"

import type React from "react"

import { useState } from "react"
import { Search, Coffee, MapPin, Clock, Phone, Users, Award } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Datos simulados de la empresa cafetera
const companyData = {
  horarios: {
    title: "Horarios de Atención",
    content: "Lunes a Viernes: 6:00 AM - 8:00 PM\nSábados: 7:00 AM - 9:00 PM\nDomingos: 8:00 AM - 6:00 PM",
    icon: Clock,
  },
  ubicacion: {
    title: "Ubicaciones",
    content:
      "Sede Principal: Av. Café Central 123, Ciudad\nSucursal Norte: Calle Aroma 456, Zona Norte\nSucursal Sur: Blvd. Tostado 789, Zona Sur",
    icon: MapPin,
  },
  productos: {
    title: "Nuestros Productos",
    content:
      "• Café Arábica Premium\n• Café Robusta Especial\n• Mezclas Gourmet\n• Café Orgánico\n• Accesorios para café\n• Máquinas espresso",
    icon: Coffee,
  },
  contacto: {
    title: "Información de Contacto",
    content:
      "Teléfono: +1 (555) 123-4567\nEmail: info@cafepremium.com\nWhatsApp: +1 (555) 987-6543\nSitio web: www.cafepremium.com",
    icon: Phone,
  },
  historia: {
    title: "Nuestra Historia",
    content:
      "Fundada en 1985, Café Premium ha sido líder en la industria cafetera por más de 35 años. Comenzamos como una pequeña tostadora familiar y hoy somos reconocidos por la calidad excepcional de nuestros granos.",
    icon: Award,
  },
  equipo: {
    title: "Nuestro Equipo",
    content:
      "Contamos con más de 50 empleados especializados:\n• 15 Baristas certificados\n• 8 Tostadores expertos\n• 12 Personal de ventas\n• 10 Equipo administrativo\n• 5 Especialistas en calidad",
    icon: Users,
  },
}

export default function Component() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsSearching(true)

    // Simular búsqueda con delay
    setTimeout(() => {
      const searchResults = Object.entries(companyData)
        .filter(
          ([key, data]) =>
            key.toLowerCase().includes(query.toLowerCase()) ||
            data.title.toLowerCase().includes(query.toLowerCase()) ||
            data.content.toLowerCase().includes(query.toLowerCase()),
        )
        .map(([key, data]) => ({ key, ...data }))

      setResults(searchResults)
      setIsSearching(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const popularQueries = [
    "horarios de atención",
    "ubicaciones",
    "productos disponibles",
    "información de contacto",
    "historia de la empresa",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-amber-600 rounded-full">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-amber-900">Café Premium</h1>
          </div>
          <p className="text-lg text-amber-700 mb-6">Consulta cualquier información sobre nuestra empresa</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-lg border-amber-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-amber-900">¿Qué te gustaría saber?</CardTitle>
            <CardDescription className="text-center">
              Pregunta sobre horarios, ubicaciones, productos, contacto y más
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-4 w-4" />
                <Input
                  placeholder="Ej: ¿Cuáles son los horarios de atención?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 border-amber-300 focus:border-amber-500"
                />
              </div>
              <Button
                onClick={handleSearch}
                disabled={isSearching || !query.trim()}
                className="bg-amber-600 hover:bg-amber-700"
              >
                {isSearching ? "Buscando..." : "Buscar"}
              </Button>
            </div>

            {/* Popular Queries */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-amber-700 mr-2">Consultas populares:</span>
              {popularQueries.map((popularQuery) => (
                <Badge
                  key={popularQuery}
                  variant="outline"
                  className="cursor-pointer hover:bg-amber-100 border-amber-300 text-amber-700"
                  onClick={() => {
                    setQuery(popularQuery)
                    setTimeout(() => handleSearch(), 100)
                  }}
                >
                  {popularQuery}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-900 mb-4">Resultados de tu búsqueda</h2>
            {results.map((result) => {
              const IconComponent = result.icon
              return (
                <Card key={result.key} className="shadow-md border-amber-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <IconComponent className="h-5 w-5 text-amber-600" />
                      </div>
                      <CardTitle className="text-amber-900">{result.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="whitespace-pre-line text-gray-700">{result.content}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* No Results */}
        {query && results.length === 0 && !isSearching && (
          <Card className="text-center py-8 border-amber-200">
            <CardContent>
              <Coffee className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-amber-900 mb-2">No encontramos información sobre "{query}"</h3>
              <p className="text-amber-700 mb-4">
                Intenta con términos como: horarios, ubicación, productos, contacto, historia
              </p>
            </CardContent>
          </Card>
        )}

        {/* Welcome Message */}
        {!query && results.length === 0 && (
          <Card className="text-center py-12 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent>
              <Coffee className="h-16 w-16 text-amber-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">¡Bienvenido a Café Premium!</h3>
              <p className="text-amber-700 text-lg mb-6 max-w-2xl mx-auto">
                Estamos aquí para ayudarte. Pregunta cualquier cosa sobre nuestra empresa, desde horarios y ubicaciones
                hasta información sobre nuestros productos y servicios.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {Object.entries(companyData)
                  .slice(0, 6)
                  .map(([key, data]) => {
                    const IconComponent = data.icon
                    return (
                      <div
                        key={key}
                        className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 cursor-pointer transition-colors"
                        onClick={() => {
                          setQuery(data.title.toLowerCase())
                          setTimeout(() => handleSearch(), 100)
                        }}
                      >
                        <IconComponent className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-amber-900">{data.title}</p>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

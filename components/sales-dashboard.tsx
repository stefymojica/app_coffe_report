"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp, DollarSign, ShoppingCart, Users, Upload, X, ImageIcon } from "lucide-react"

const salesMetrics = [
  {
    title: "Ventas Diarias",
    value: "$1,847",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "Ventas Semanales",
    value: "$12,430",
    change: "+8.2%",
    icon: TrendingUp,
  },
  {
    title: "Ventas Mensuales",
    value: "$45,231",
    change: "+20.1%",
    icon: ShoppingCart,
  },
  {
    title: "Clientes Nuevos",
    value: "156",
    change: "+15.3%",
    icon: Users,
  },
]

const salesByLocation = [
  { name: "Sede Principal", sales: "$18,500", percentage: 85 },
  { name: "Sucursal Norte", sales: "$14,200", percentage: 72 },
  { name: "Sucursal Sur", sales: "$12,531", percentage: 68 },
]

interface SalesImage {
  id: string
  name: string
  url: string
  description: string
}

export function SalesDashboard() {
  const [salesImages, setSalesImages] = useState<SalesImage[]>([
    {
      id: "1",
      name: "Gráfico Ventas Q1",
      url: "/placeholder.svg?height=200&width=300",
      description: "Ventas del primer trimestre 2024",
    },
    {
      id: "2",
      name: "Comparativo Mensual",
      url: "/placeholder.svg?height=200&width=300",
      description: "Comparativo de ventas mensuales",
    },
  ])
  const [newImageName, setNewImageName] = useState("")
  const [newImageDescription, setNewImageDescription] = useState("")

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && newImageName && newImageDescription) {
      const newImage: SalesImage = {
        id: Date.now().toString(),
        name: newImageName,
        url: URL.createObjectURL(file),
        description: newImageDescription,
      }
      setSalesImages((prev) => [...prev, newImage])
      setNewImageName("")
      setNewImageDescription("")
      event.target.value = ""
    }
  }

  const removeImage = (id: string) => {
    setSalesImages((prev) => prev.filter((img) => img.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Métricas de ventas */}
      <div>
        <h3 className="text-lg font-semibold mb-4" style={{ color: "#C1440E" }}>
          Cifras de Ventas
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {salesMetrics.map((metric) => {
            const IconComponent = metric.icon
            return (
              <Card
                key={metric.title}
                className="hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#FAF9F6", borderColor: "#6B8E23" }}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium" style={{ color: "#4B2E2B" }}>
                    {metric.title}
                  </CardTitle>
                  <IconComponent className="h-5 w-5" style={{ color: "#C1440E" }} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold" style={{ color: "#4B2E2B" }}>
                    {metric.value}
                  </div>
                  <p className="text-xs" style={{ color: "#6B8E23" }}>
                    <span>{metric.change}</span> desde ayer
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Ventas por ubicación */}
      <Card style={{ backgroundColor: "#FAF9F6", borderColor: "#6B8E23" }}>
        <CardHeader>
          <CardTitle style={{ color: "#C1440E" }}>Ventas por Ubicación</CardTitle>
          <CardDescription style={{ color: "#6B8E23" }}>Rendimiento de cada sucursal hoy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {salesByLocation.map((location) => (
              <div key={location.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: "#4B2E2B" }}>
                    {location.name}
                  </span>
                  <span className="text-sm font-bold" style={{ color: "#C1440E" }}>
                    {location.sales}
                  </span>
                </div>
                <Progress value={location.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sección de imágenes de ventas */}
      <div>
        <h3 className="text-lg font-semibold mb-4" style={{ color: "#C1440E" }}>
          Imágenes y Gráficos de Ventas
        </h3>

        {/* Formulario para agregar imágenes */}
        <Card className="mb-4" style={{ backgroundColor: "#F5F5DC", borderColor: "#6B8E23" }}>
          <CardHeader>
            <CardTitle className="text-base" style={{ color: "#4B2E2B" }}>
              Agregar Nueva Imagen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="imageName" style={{ color: "#4B2E2B" }}>
                  Nombre de la imagen
                </Label>
                <Input
                  id="imageName"
                  placeholder="Ej: Ventas Enero 2024"
                  value={newImageName}
                  onChange={(e) => setNewImageName(e.target.value)}
                  style={{ backgroundColor: "#FAF9F6", borderColor: "#6B8E23", color: "#4B2E2B" }}
                />
              </div>
              <div>
                <Label htmlFor="imageDescription" style={{ color: "#4B2E2B" }}>
                  Descripción
                </Label>
                <Input
                  id="imageDescription"
                  placeholder="Descripción del gráfico"
                  value={newImageDescription}
                  onChange={(e) => setNewImageDescription(e.target.value)}
                  style={{ backgroundColor: "#FAF9F6", borderColor: "#6B8E23", color: "#4B2E2B" }}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="imageUpload" style={{ color: "#4B2E2B" }}>
                Seleccionar imagen
              </Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={!newImageName || !newImageDescription}
                  className="flex-1"
                  style={{ backgroundColor: "#FAF9F6", borderColor: "#6B8E23" }}
                />
                <Button
                  disabled={!newImageName || !newImageDescription}
                  style={{ backgroundColor: "#C1440E", color: "#FAF9F6" }}
                >
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid de imágenes */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {salesImages.map((image) => (
            <Card key={image.id} style={{ backgroundColor: "#FAF9F6", borderColor: "#6B8E23" }}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm" style={{ color: "#4B2E2B" }}>
                    {image.name}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeImage(image.id)}
                    className="h-6 w-6 p-0"
                    style={{ color: "#C1440E" }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <CardDescription style={{ color: "#6B8E23" }}>{image.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="aspect-video rounded-lg border-2 border-dashed flex items-center justify-center"
                  style={{ borderColor: "#6B8E23", backgroundColor: "#F5F5DC" }}
                >
                  <div className="text-center">
                    <ImageIcon className="h-8 w-8 mx-auto mb-2" style={{ color: "#6B8E23" }} />
                    <p className="text-xs" style={{ color: "#6B8E23" }}>
                      Imagen de ventas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

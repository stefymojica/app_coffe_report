"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Coffee, Users, MapPin, Clock, Phone, Package, Star, DollarSign, ShoppingCart } from "lucide-react"

const metrics = [
  {
    title: "Ventas del Mes",
    value: "$45,231",
    change: "+20.1%",
    icon: DollarSign,
  },
  {
    title: "Productos Vendidos",
    value: "2,350",
    change: "+15.3%",
    icon: ShoppingCart,
  },
  {
    title: "Clientes Activos",
    value: "1,234",
    change: "+8.2%",
    icon: Users,
  },
  {
    title: "Satisfacción",
    value: "4.8/5",
    change: "+0.2",
    icon: Star,
  },
]

const locations = [
  { name: "Sede Principal", address: "Av. Café Central 123", performance: 85, status: "Abierto" },
  { name: "Sucursal Norte", address: "Calle Aroma 456", performance: 72, status: "Abierto" },
  { name: "Sucursal Sur", address: "Blvd. Tostado 789", performance: 68, status: "Abierto" },
]

const products = [
  { name: "Café Arábica Premium", price: "$24.99", stock: 450, status: "En Stock" },
  { name: "Café Robusta Especial", price: "$19.99", stock: 320, status: "En Stock" },
  { name: "Mezcla Gourmet", price: "$29.99", stock: 180, status: "Stock Bajo" },
  { name: "Café Orgánico", price: "$34.99", stock: 95, status: "Stock Bajo" },
]

export function DashboardMetrics() {
  return (
    <div className="space-y-6">
      {/* Métricas principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const IconComponent = metric.icon
          return (
            <Card
              key={metric.title}
              className="hover:shadow-md transition-shadow border"
              style={{
                backgroundColor: "#FAF9F6",
                borderColor: "#6B8E23",
              }}
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
                  <span style={{ color: "#6B8E23" }}>{metric.change}</span> desde el mes pasado
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Información de la empresa */}
        <Card
          style={{
            backgroundColor: "#FAF9F6",
            borderColor: "#6B8E23",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: "#C1440E" }}>
              <Coffee className="h-5 w-5" />
              Información General
            </CardTitle>
            <CardDescription style={{ color: "#6B8E23" }}>Datos principales de Café Premium</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5" style={{ color: "#C1440E" }} />
                <div>
                  <p className="font-medium text-sm" style={{ color: "#4B2E2B" }}>
                    Horarios de Atención
                  </p>
                  <p className="text-xs" style={{ color: "#6B8E23" }}>
                    Lun-Vie: 6AM-8PM | Sáb: 7AM-9PM | Dom: 8AM-6PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5" style={{ color: "#C1440E" }} />
                <div>
                  <p className="font-medium text-sm" style={{ color: "#4B2E2B" }}>
                    Contacto Principal
                  </p>
                  <p className="text-xs" style={{ color: "#6B8E23" }}>
                    +1 (555) 123-4567 | info@cafepremium.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-4 w-4 mt-0.5" style={{ color: "#C1440E" }} />
                <div>
                  <p className="font-medium text-sm" style={{ color: "#4B2E2B" }}>
                    Equipo
                  </p>
                  <p className="text-xs" style={{ color: "#6B8E23" }}>
                    50+ empleados especializados en café
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ubicaciones */}
        <Card
          style={{
            backgroundColor: "#FAF9F6",
            borderColor: "#6B8E23",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: "#C1440E" }}>
              <MapPin className="h-5 w-5" />
              Ubicaciones
            </CardTitle>
            <CardDescription style={{ color: "#6B8E23" }}>Estado de nuestras sucursales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#4B2E2B" }}>
                        {location.name}
                      </p>
                      <p className="text-xs" style={{ color: "#6B8E23" }}>
                        {location.address}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border"
                      style={{
                        backgroundColor: "#6B8E23",
                        color: "#FAF9F6",
                        borderColor: "#6B8E23",
                      }}
                    >
                      {location.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span style={{ color: "#4B2E2B" }}>Rendimiento</span>
                      <span style={{ color: "#4B2E2B" }}>{location.performance}%</span>
                    </div>
                    <Progress value={location.performance} className="h-2" style={{ backgroundColor: "#F5F5DC" }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Productos */}
      <Card
        style={{
          backgroundColor: "#FAF9F6",
          borderColor: "#6B8E23",
        }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ color: "#C1440E" }}>
            <Package className="h-5 w-5" />
            Productos Principales
          </CardTitle>
          <CardDescription style={{ color: "#6B8E23" }}>Inventario y precios actuales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="p-4 border rounded-lg hover:shadow-sm transition-shadow"
                style={{
                  backgroundColor: "#F5F5DC",
                  borderColor: "#6B8E23",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium" style={{ color: "#4B2E2B" }}>
                    {product.name}
                  </h4>
                  <Badge
                    variant="outline"
                    className="border"
                    style={
                      product.status === "En Stock"
                        ? {
                            backgroundColor: "#6B8E23",
                            color: "#FAF9F6",
                            borderColor: "#6B8E23",
                          }
                        : {
                            backgroundColor: "#C1440E",
                            color: "#FAF9F6",
                            borderColor: "#C1440E",
                          }
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span style={{ color: "#6B8E23" }}>Stock: {product.stock}</span>
                  <span className="font-medium" style={{ color: "#C1440E" }}>
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

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
    trend: "up",
  },
  {
    title: "Productos Vendidos",
    value: "2,350",
    change: "+15.3%",
    icon: ShoppingCart,
    trend: "up",
  },
  {
    title: "Clientes Activos",
    value: "1,234",
    change: "+8.2%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Satisfacción",
    value: "4.8/5",
    change: "+0.2",
    icon: Star,
    trend: "up",
  },
]

const locations = [
  {
    name: "Sede Principal",
    address: "Av. Café Central 123, Ciudad",
    status: "Abierto",
    sales: 85,
  },
  {
    name: "Sucursal Norte",
    address: "Calle Aroma 456, Zona Norte",
    status: "Abierto",
    sales: 72,
  },
  {
    name: "Sucursal Sur",
    address: "Blvd. Tostado 789, Zona Sur",
    status: "Abierto",
    sales: 68,
  },
]

const products = [
  {
    name: "Café Arábica Premium",
    category: "Café en Grano",
    stock: 450,
    price: "$24.99",
    status: "En Stock",
  },
  {
    name: "Café Robusta Especial",
    category: "Café en Grano",
    stock: 320,
    price: "$19.99",
    status: "En Stock",
  },
  {
    name: "Mezcla Gourmet",
    category: "Café Molido",
    stock: 180,
    price: "$29.99",
    status: "Stock Bajo",
  },
  {
    name: "Café Orgánico",
    category: "Café en Grano",
    stock: 95,
    price: "$34.99",
    status: "Stock Bajo",
  },
]

export function DashboardContent() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Sistema Operativo
          </Badge>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const IconComponent = metric.icon
          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{metric.change}</span> desde el mes pasado
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Información de la empresa */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5" />
              Información de la Empresa
            </CardTitle>
            <CardDescription>Datos generales de Café Premium</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span className="font-medium">Horarios de Atención</span>
                </div>
                <div className="text-sm text-muted-foreground ml-6">
                  <p>Lunes a Viernes: 6:00 AM - 8:00 PM</p>
                  <p>Sábados: 7:00 AM - 9:00 PM</p>
                  <p>Domingos: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span className="font-medium">Contacto</span>
                </div>
                <div className="text-sm text-muted-foreground ml-6">
                  <p>Teléfono: +1 (555) 123-4567</p>
                  <p>Email: info@cafepremium.com</p>
                  <p>WhatsApp: +1 (555) 987-6543</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber-600" />
                <span className="font-medium">Nuestro Equipo</span>
              </div>
              <div className="text-sm text-muted-foreground ml-6">
                <p>
                  50+ empleados especializados: 15 Baristas certificados, 8 Tostadores expertos, 12 Personal de ventas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ubicaciones */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Ubicaciones
            </CardTitle>
            <CardDescription>Estado de nuestras sucursales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{location.name}</p>
                      <p className="text-xs text-muted-foreground">{location.address}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {location.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Ventas del día</span>
                      <span>{location.sales}%</span>
                    </div>
                    <Progress value={location.sales} className="h-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Productos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Productos Principales
          </CardTitle>
          <CardDescription>Estado del inventario y precios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="space-y-2 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{product.name}</h4>
                  <Badge
                    variant={product.status === "En Stock" ? "default" : "destructive"}
                    className={
                      product.status === "En Stock"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-orange-100 text-orange-800 border-orange-200"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Stock: {product.stock}</span>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Coffee } from "lucide-react"
import { ChatInterface } from "./components/chat-interface"
import { SalesDashboard } from "./components/sales-dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoffeeDashboard() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5DC" }}>
      {/* Header */}
      <div
        className="border-b sticky top-0 z-10"
        style={{
          backgroundColor: "#FAF9F6",
          borderColor: "#6B8E23",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#C1440E" }}
              >
                <Coffee className="h-6 w-6" style={{ color: "#FAF9F6" }} />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: "#4B2E2B" }}>
                  Café Premium
                </h1>
                <p className="text-sm" style={{ color: "#6B8E23" }}>
                  Asistente Virtual & Dashboard de Ventas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Chat Assistant */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="text-lg font-semibold" style={{ color: "#C1440E" }}>
                Asistente Virtual
              </h2>
              <p className="text-sm" style={{ color: "#6B8E23" }}>
                Pregunta cualquier cosa sobre la empresa
              </p>
            </div>
            <ChatInterface />
          </div>

          {/* Sales Dashboard */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-lg font-semibold" style={{ color: "#C1440E" }}>
                Dashboard de Ventas
              </h2>
              <p className="text-sm" style={{ color: "#6B8E23" }}>
                Métricas, cifras e imágenes de ventas
              </p>
            </div>
            <SalesDashboard />
          </div>
        </div>

        {/* Información general */}
        <div className="mt-8">
          <Card style={{ backgroundColor: "#FAF9F6", borderColor: "#6B8E23" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: "#C1440E" }}>
                <Coffee className="h-5 w-5" />
                Información General de la Empresa
              </CardTitle>
              <CardDescription style={{ color: "#6B8E23" }}>Datos principales de Café Premium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="font-medium mb-2" style={{ color: "#4B2E2B" }}>
                    Horarios de Atención
                  </h4>
                  <p className="text-sm" style={{ color: "#6B8E23" }}>
                    Lun-Vie: 6AM-8PM
                    <br />
                    Sáb: 7AM-9PM
                    <br />
                    Dom: 8AM-6PM
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2" style={{ color: "#4B2E2B" }}>
                    Contacto
                  </h4>
                  <p className="text-sm" style={{ color: "#6B8E23" }}>
                    Tel: +1 (555) 123-4567
                    <br />
                    Email: info@cafepremium.com
                    <br />
                    WhatsApp: +1 (555) 987-6543
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2" style={{ color: "#4B2E2B" }}>
                    Ubicaciones
                  </h4>
                  <p className="text-sm" style={{ color: "#6B8E23" }}>
                    3 sucursales activas
                    <br />
                    Sede Principal + 2 sucursales
                    <br />
                    Cobertura en toda la ciudad
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

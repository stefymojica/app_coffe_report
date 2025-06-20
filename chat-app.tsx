"use client"

import { ChatInterface } from "./components/chat-interface"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Shield, Globe } from "lucide-react"

export default function ChatApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Asistente IA</h1>
                <p className="text-sm text-gray-600">Conectado a tu API de Python</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              API Activa
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <ChatInterface />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Características</CardTitle>
                <CardDescription className="text-gray-600">Tu asistente IA personalizado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                    <Zap className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Respuestas Rápidas</h4>
                    <p className="text-sm text-gray-600">Conectado directamente a tu API de Python</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                    <Shield className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Seguro y Privado</h4>
                    <p className="text-sm text-gray-600">Tus datos se mantienen seguros</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                    <Globe className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Acceso 24/7</h4>
                    <p className="text-sm text-gray-600">Disponible cuando lo necesites</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Info */}
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Configuración API</CardTitle>
                <CardDescription className="text-gray-600">Información de conexión</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Endpoint</h4>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">POST /query</code>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Formato de Envío</h4>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700 block">
                    {`{"message": "texto", "timestamp": "ISO"}`}
                  </code>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Respuesta Esperada</h4>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700 block">
                    {`{"response": "texto de respuesta"}`}
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-orange-100 to-amber-100 border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-orange-900">💡 Consejos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-orange-800">
                <p>• Sé específico en tus preguntas</p>
                <p>• Usa las sugerencias para empezar</p>
                <p>• Puedes copiar las respuestas</p>
                <p>• El asistente aprende de la conversación</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

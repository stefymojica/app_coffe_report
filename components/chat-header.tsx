"use client"

import { Bot, Wifi, WifiOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ChatHeaderProps {
  isConnected: boolean
  isTyping: boolean
}

export function ChatHeader({ isConnected, isTyping }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div
            className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </div>
        <div>
          <h3 className="font-semibold text-amber-900">Asistente IA</h3>
          <p className="text-xs text-amber-700">
            {isTyping ? "Escribiendo..." : isConnected ? "En línea" : "Desconectado"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge
          variant="outline"
          className={`${
            isConnected ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
          }`}
        >
          {isConnected ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
          {isConnected ? "Conectado" : "Sin conexión"}
        </Badge>
      </div>
    </div>
  )
}

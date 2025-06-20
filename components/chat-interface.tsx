"use client"

import { useState, useRef, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatHeader } from "./chat-header"
import { MessageBubble } from "./message-bubble"
import { ChatInput } from "./chat-input"
import type { Message, ChatResponse } from "../types/chat"
import { SuggestedPrompts } from "./suggested-prompts"

// Configuración de la API - Cambia esta URL por la de tu API de Python
const API_URL = "http://localhost:8000/api/chat" // Ajusta según tu API

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "assistant",
      content:
        "¡Hola! Soy tu asistente virtual. Estoy aquí para ayudarte con cualquier pregunta que tengas. ¿En qué puedo asistirte hoy?",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const callAPI = async (message: string): Promise<ChatResponse> => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        message: data.response || data.message || "Respuesta recibida",
        success: true,
      }
    } catch (error) {
      console.error("Error calling API:", error)
      return {
        message: "",
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      }
    }
  }

  const handleSendMessage = async (content: string) => {
    setError(null)

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    // Agregar mensaje de carga del asistente
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: "",
      timestamp: new Date(),
      isLoading: true,
    }

    setMessages((prev) => [...prev, userMessage, loadingMessage])
    setIsLoading(true)

    try {
      const response = await callAPI(content)
      setIsConnected(response.success)

      // Remover mensaje de carga y agregar respuesta real
      setMessages((prev) => {
        const withoutLoading = prev.filter((msg) => !msg.isLoading)
        const assistantMessage: Message = {
          id: (Date.now() + 2).toString(),
          type: "assistant",
          content: response.success
            ? response.message
            : "Lo siento, no pude procesar tu solicitud en este momento. Por favor, intenta de nuevo.",
          timestamp: new Date(),
        }
        return [...withoutLoading, assistantMessage]
      })

      if (!response.success) {
        setError(response.error || "Error al conectar con el servidor")
      }
    } catch (error) {
      setIsConnected(false)
      setError("Error de conexión. Verifica que tu API esté funcionando.")

      // Remover mensaje de carga y mostrar error
      setMessages((prev) => {
        const withoutLoading = prev.filter((msg) => !msg.isLoading)
        const errorMessage: Message = {
          id: (Date.now() + 2).toString(),
          type: "assistant",
          content:
            "Lo siento, hay un problema de conexión. Por favor, verifica que la API esté funcionando e intenta de nuevo.",
          timestamp: new Date(),
        }
        return [...withoutLoading, errorMessage]
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    setError(null)
    setIsConnected(true)
  }

  const showSuggestions = messages.length <= 1

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-2xl border border-orange-200 overflow-hidden">
      <ChatHeader isConnected={isConnected} isTyping={isLoading} />

      {error && (
        <Alert className="m-4 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            {error}
            <Button
              variant="outline"
              size="sm"
              onClick={handleRetry}
              className="ml-2 h-6 text-xs border-red-300 text-red-700 hover:bg-red-100"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Reintentar
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <ScrollArea className="flex-1 px-4" ref={scrollAreaRef}>
        <div className="py-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      {showSuggestions && (
        <div className="border-t border-orange-100 bg-gradient-to-r from-orange-25 to-amber-25">
          <SuggestedPrompts onSelectPrompt={handleSendMessage} disabled={isLoading} />
        </div>
      )}

      <ChatInput onSendMessage={handleSendMessage} disabled={!isConnected} isLoading={isLoading} />
    </div>
  )
}

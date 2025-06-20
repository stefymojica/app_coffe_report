"use client"

import { Bot, User, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { Message } from "../types/chat"

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const [copied, setCopied] = useState(false)
  const isUser = message.type === "user"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex items-end gap-2 max-w-[80%] ${isUser ? "flex-row-reverse" : ""}`}>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 ${
            isUser ? "bg-gradient-to-br from-amber-500 to-orange-500" : "bg-gradient-to-br from-orange-500 to-red-500"
          } shadow-md`}
        >
          {isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
        </div>
        <div className="group relative">
          <div
            className={`rounded-2xl px-4 py-3 shadow-sm ${
              isUser
                ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-br-md"
                : "bg-white border border-orange-100 text-gray-800 rounded-bl-md"
            }`}
          >
            {message.isLoading ? (
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm text-orange-600">Pensando...</span>
              </div>
            ) : (
              <div>
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${isUser ? "text-orange-100" : "text-gray-500"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            )}
          </div>
          {!message.isLoading && !isUser && (
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 bg-white border border-orange-200 hover:bg-orange-50"
            >
              {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3 text-orange-600" />}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

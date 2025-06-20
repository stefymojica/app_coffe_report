"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, HelpCircle, Lightbulb, Coffee } from "lucide-react"

interface SuggestedPromptsProps {
  onSelectPrompt: (prompt: string) => void
  disabled: boolean
}

const prompts = [
  {
    icon: Coffee,
    text: "¿Cuáles son tus productos principales?",
    category: "Productos",
  },
  {
    icon: MessageCircle,
    text: "Cuéntame sobre tu empresa",
    category: "Información",
  },
  {
    icon: HelpCircle,
    text: "¿Cómo puedo contactarte?",
    category: "Contacto",
  },
  {
    icon: Lightbulb,
    text: "Dame consejos sobre café",
    category: "Consejos",
  },
]

export function SuggestedPrompts({ onSelectPrompt, disabled }: SuggestedPromptsProps) {
  return (
    <div className="p-4 space-y-3">
      <h4 className="text-sm font-medium text-amber-800 mb-3">Sugerencias para empezar:</h4>
      <div className="grid gap-2 sm:grid-cols-2">
        {prompts.map((prompt, index) => {
          const IconComponent = prompt.icon
          return (
            <Button
              key={index}
              variant="outline"
              onClick={() => onSelectPrompt(prompt.text)}
              disabled={disabled}
              className="h-auto p-3 text-left justify-start bg-white hover:bg-orange-50 border-orange-200 hover:border-orange-300 text-gray-700 hover:text-orange-800 transition-all duration-200"
            >
              <div className="flex items-start gap-3 w-full">
                <IconComponent className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-orange-600 mb-1">{prompt.category}</p>
                  <p className="text-sm leading-tight">{prompt.text}</p>
                </div>
              </div>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

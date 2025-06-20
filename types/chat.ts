export interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  isLoading?: boolean
}

export interface ChatResponse {
  message: string
  success: boolean
  error?: string
}

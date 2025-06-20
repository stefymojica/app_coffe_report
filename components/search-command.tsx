"use client"

import * as React from "react"
import { Search, Coffee, MapPin, Clock, Phone, Users, Package, BarChart3 } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

const searchData = [
  {
    id: "dashboard",
    title: "Dashboard Principal",
    description: "Ver métricas y estadísticas generales",
    icon: BarChart3,
    category: "Navegación",
  },
  {
    id: "productos",
    title: "Productos",
    description: "Café Arábica, Robusta, Mezclas Gourmet",
    icon: Package,
    category: "Productos",
  },
  {
    id: "ubicaciones",
    title: "Ubicaciones",
    description: "Sede Principal, Sucursal Norte, Sucursal Sur",
    icon: MapPin,
    category: "Ubicaciones",
  },
  {
    id: "horarios",
    title: "Horarios de Atención",
    description: "Lun-Vie: 6AM-8PM, Sáb: 7AM-9PM, Dom: 8AM-6PM",
    icon: Clock,
    category: "Información",
  },
  {
    id: "contacto",
    title: "Información de Contacto",
    description: "Teléfono, Email, WhatsApp",
    icon: Phone,
    category: "Contacto",
  },
  {
    id: "equipo",
    title: "Nuestro Equipo",
    description: "50+ empleados especializados",
    icon: Users,
    category: "Recursos Humanos",
  },
  {
    id: "cafe-arabica",
    title: "Café Arábica Premium",
    description: "Nuestro café de mayor calidad",
    icon: Coffee,
    category: "Productos",
  },
  {
    id: "sede-principal",
    title: "Sede Principal",
    description: "Av. Café Central 123, Ciudad",
    icon: MapPin,
    category: "Ubicaciones",
  },
]

interface SearchCommandProps {
  onResultSelect?: (result: any) => void
}

export function SearchCommand({ onResultSelect }: SearchCommandProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (result: any) => {
    setOpen(false)
    onResultSelect?.(result)
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Buscar información...</span>
        <span className="inline-flex lg:hidden">Buscar...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar información de la empresa..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          {["Navegación", "Productos", "Ubicaciones", "Información", "Contacto", "Recursos Humanos"].map((category) => {
            const items = searchData.filter((item) => item.category === category)
            if (items.length === 0) return null

            return (
              <CommandGroup key={category} heading={category}>
                {items.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <CommandItem key={item.id} value={item.title} onSelect={() => handleSelect(item)}>
                      <IconComponent className="mr-2 h-4 w-4" />
                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            )
          })}
        </CommandList>
      </CommandDialog>
    </>
  )
}

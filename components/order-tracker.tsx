"use client"

const steps = [
  { label: "Iniciando pedido", icon: "📋" },
  { label: "Cocinero asignado", icon: "👨‍🍳" },
  { label: "Cocinando", icon: "🔥" },
  { label: "Esperando empaque", icon: "⏳" },
  { label: "Empacando", icon: "📦" },
  { label: "Listo", icon: "✅" },
  { label: "En camino", icon: "🚚" },
  { label: "Entregado", icon: "🏠" },
]

interface OrderTrackerProps {
  status: string
}

export function OrderTracker({ status }: OrderTrackerProps) {
  const activeIndex = steps.findIndex((s) => s.label === status)

  return (
    <div className="w-full">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {steps.map((step, i) => {
          const isActive = i <= activeIndex
          const isCurrent = i === activeIndex

          return (
            <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0">
              <div
                className={`relative h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  isCurrent
                    ? "bg-cw-green text-white ring-4 ring-cw-green ring-opacity-30"
                    : isActive
                      ? "bg-cw-green text-white"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {step.icon}
              </div>
              <span
                className={`text-xs text-center max-w-[60px] font-medium ${
                  isActive ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
      {activeIndex >= 0 && (
        <div className="text-sm text-gray-600">
          Estado actual: <span className="font-bold text-cw-green">{steps[activeIndex].label}</span>
        </div>
      )}
    </div>
  )
}

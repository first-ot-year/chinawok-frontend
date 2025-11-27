"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface TenantContextType {
  tenantId: string
  setTenantId: (id: string) => void
  customerId: string
  setCustomerId: (id: string) => void
}

const TenantContext = createContext<TenantContextType | undefined>(undefined)

export function TenantProvider({ children }: { children: ReactNode }) {
  const [tenantId, setTenantId] = useState("default-tenant")
  const [customerId, setCustomerId] = useState("123")

  return (
    <TenantContext.Provider value={{ tenantId, setTenantId, customerId, setCustomerId }}>
      {children}
    </TenantContext.Provider>
  )
}

export function useTenant() {
  const context = useContext(TenantContext)
  if (!context) {
    throw new Error("useTenant must be used within TenantProvider")
  }
  return context
}

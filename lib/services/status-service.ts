import { API_STATUS, getTenantHeaders } from "@/lib/api"

export const statusService = {
  async getOrderStatus(orderId: string, tenantId?: string) {
    const res = await fetch(`${API_STATUS}/status/order/${orderId}`, {
      headers: getTenantHeaders(tenantId),
    })
    return res.json()
  },

  async getOrderHistory(orderId: string, tenantId?: string) {
    const res = await fetch(`${API_STATUS}/status/order/${orderId}/history`, {
      headers: getTenantHeaders(tenantId),
    })
    return res.json()
  },

  async getDashboardStatus(tenantId?: string) {
    const res = await fetch(`${API_STATUS}/status/dashboard`, {
      headers: getTenantHeaders(tenantId),
    })
    return res.json()
  },

  async getCustomerOrders(customerId: string, tenantId?: string) {
    const res = await fetch(`${API_STATUS}/status/customer/${customerId}`, {
      headers: getTenantHeaders(tenantId),
    })
    return res.json()
  },
}

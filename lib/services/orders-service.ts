import { API_ORDERS, getTenantHeaders } from "@/lib/api"

export const ordersService = {
  async createOrder(data: any, tenantId?: string) {
    const res = await fetch(`${API_ORDERS}/orders`, {
      method: "POST",
      headers: getTenantHeaders(tenantId),
      body: JSON.stringify(data),
    })
    return res.json()
  },

  async getOrdersByCustomer(customerId: string, tenantId?: string) {
    const res = await fetch(`${API_ORDERS}/orders/customer/${customerId}`, {
      headers: getTenantHeaders(tenantId),
    })
    return res.json()
  },

  async getOrderById(orderId: string, tenantId?: string) {
    const res = await fetch(`${API_ORDERS}/orders/${orderId}`, {
      headers: getTenantHeaders(tenantId),
    })
    return res.json()
  },

  async cancelOrder(orderId: string, cancelledBy: string, reason: string, tenantId?: string) {
    const res = await fetch(`${API_ORDERS}/orders/${orderId}/cancel`, {
      method: "PATCH",
      headers: getTenantHeaders(tenantId),
      body: JSON.stringify({
        cancelled_by: cancelledBy,
        reason: reason,
      }),
    })
    return res.json()
  },

  async getOrdersByStatus(status: string, tenantId?: string) {
    const res = await fetch(`${API_ORDERS}/orders?status=${status}`, {
      headers: getTenantHeaders(tenantId),
    })
    return res.json()
  },
}

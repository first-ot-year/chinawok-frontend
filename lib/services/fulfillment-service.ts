import { API_FULFILL, getTenantHeaders } from "@/lib/api"

export const fulfillmentService = {
  async assignCook(orderId: string, staffId: string, staffName: string, tenantId?: string) {
    const res = await fetch(`${API_FULFILL}/orders/${orderId}/assign-cook`, {
      method: "POST",
      headers: getTenantHeaders(tenantId),
      body: JSON.stringify({
        staff_id: staffId,
        staff_name: staffName,
      }),
    })
    return res.json()
  },

  async markPacked(orderId: string, staffId: string, staffName: string, tenantId?: string) {
    const res = await fetch(`${API_FULFILL}/orders/${orderId}/mark-packed`, {
      method: "POST",
      headers: getTenantHeaders(tenantId),
      body: JSON.stringify({
        staff_id: staffId,
        staff_name: staffName,
      }),
    })
    return res.json()
  },

  async assignDelivery(orderId: string, staffId: string, staffName: string, tenantId?: string) {
    const res = await fetch(`${API_FULFILL}/orders/${orderId}/assign-delivery`, {
      method: "POST",
      headers: getTenantHeaders(tenantId),
      body: JSON.stringify({
        staff_id: staffId,
        staff_name: staffName,
      }),
    })
    return res.json()
  },

  async markDelivered(orderId: string, staffId: string, staffName: string, tenantId?: string) {
    const res = await fetch(`${API_FULFILL}/orders/${orderId}/mark-delivered`, {
      method: "POST",
      headers: getTenantHeaders(tenantId),
      body: JSON.stringify({
        staff_id: staffId,
        staff_name: staffName,
      }),
    })
    return res.json()
  },
}

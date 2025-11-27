export const API_ORDERS = "https://1qvyjv74r3.execute-api.us-east-1.amazonaws.com/dev"
export const API_FULFILL = "https://gc8sncxhie.execute-api.us-east-1.amazonaws.com/dev"
export const API_STATUS = "https://93icxxrllb.execute-api.us-east-1.amazonaws.com/dev"

export const getTenantHeaders = (tenantId = "CHINAWOK_LIMA_CENTRO") => ({
  "Content-Type": "application/json",
  "x-tenant-id": tenantId,
})

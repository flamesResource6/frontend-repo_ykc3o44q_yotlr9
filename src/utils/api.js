export const getBackendUrl = () => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function fetchJSON(url, opts = {}) {
  const res = await fetch(url, opts)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data?.detail || `Request failed: ${res.status}`)
  return data
}

/** Prepend Vite's base URL to a public asset path */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}

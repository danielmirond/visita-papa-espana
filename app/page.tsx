import { redirect } from 'next/navigation'

export default function RootPage() {
  // El middleware debería detectar el idioma y redirigir antes.
  // Fallback por si el middleware no se ejecuta.
  redirect('/es')
}

import NextAuth from "next-auth"  // Importa la biblioteca NextAuth para manejo de autenticación
import authConfig from "./auth.config"  // Importa la configuración de autenticación
 
// Exporta el middleware de autenticación renombrando 'auth' como 'middleware'
export const { auth: middleware } = NextAuth(authConfig)

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}
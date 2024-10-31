/**
 * @fileoverview Configuración del sistema de autenticación usando NextAuth.js
 * @requires next-auth - Framework de autenticación para Next.js
 * @requires zod - Biblioteca de validación de esquemas
 */

import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

import authConfig from "./auth.config"


export const { handlers, signIn, signOut, auth } = NextAuth({
  
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})
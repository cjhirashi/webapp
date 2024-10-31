/**
 * @fileoverview Configuración del cliente Prisma para conexión a base de datos
 * @requires @prisma/client - ORM Prisma para interacción con la base de datos
 */

import { PrismaClient } from "@prisma/client"

/**
 * Tipo global extendido para mantener una única instancia de PrismaClient
 * @type {Object} globalForPrisma - Objeto global con la instancia de PrismaClient
 */
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

/**
 * Cliente Prisma singleton
 * Reutiliza la instancia existente o crea una nueva si no existe
 * @exports {PrismaClient} prisma - Instancia única del cliente Prisma
 */
export const prisma = globalForPrisma.prisma || new PrismaClient()

/**
 * En desarrollo, asigna la instancia de Prisma al objeto global
 * Esto evita múltiples conexiones durante el hot-reload
 */
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
// Importación de las funciones necesarias de Zod
import { object, string } from "zod"

// Definición del esquema de validación para el inicio de sesión
export const signInSchema = object({
  // Validación del campo email
  email: string({ required_error: "el email es requerido" })
    .min(1, "el email es requerido")           // No puede estar vacío
    .email("Invalid email"),               // Debe tener formato de email válido
  
  // Validación del campo password
  password: string({ required_error: "el password es requerido" })
    .min(1, "el password es requerido")        // No puede estar vacío
    .min(8, "La contraseña debe tener más de 8 caracteres")    // Mínimo 8 caracteres
    .max(32, "La contraseña debe tener menos de 32 caracteres"), // Máximo 32 caracteres
})
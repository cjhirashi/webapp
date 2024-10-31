// Importamos la función signIn del módulo de autenticación
import { signIn } from "@/auth"
 
// Componente SignIn que renderiza un formulario de inicio de sesión
export function SignIn() {
  return (
    <form
      // Definimos una acción del formulario que se ejecuta al enviar
      // La acción es asíncrona y usa la directiva "use server" para ejecutarse en el servidor
      action={async (formData) => {
        "use server"
        // Llamamos a signIn con el proveedor "credentials" y los datos del formulario
        await signIn("credentials", formData)
      }}
    >
      {/* Campo para el email */}
      <label>
        Email
        <input 
          name="email"    // El nombre debe coincidir con lo esperado por el backend
          type="email"    // Tipo email para validación del navegador
        />
      </label>

      {/* Campo para la contraseña */}
      <label>
        Password
        <input 
          name="password" // El nombre debe coincidir con lo esperado por el backend
          type="password" // Tipo password para ocultar los caracteres
        />
      </label>

      {/* Botón de envío del formulario */}
      <button>Sign In</button>
    </form>
  )
}
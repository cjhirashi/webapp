import { FormLogInComponent } from "@/components/forms";


export const metadata = {
  title: 'LogIn',
  description: 'Página de inicio de sesión',
};

const pageData = {
  name: 'LogIn',
  description: 'Página de inicio de sesión',
}

export default function LogInPage() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-screen `}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>



        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col justify-center items-center text-background-tx overflow-y-auto `}>

          <FormLogInComponent />


        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}

export const metadata = {
  title: 'Dash-Admin | Principal',
  description: 'Dashboard de administración',
};

const pageData = {
  name: 'Principal',
  description: 'Dashboard de administración',
  father: '',
  path: '',
  dashboard: 'Dash-Admin'
}

export default function PrincipalDashAdminPage() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>



        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-background-tx items-center overflow-y-auto`}>

          <h1 className={`my-auto text-3xl text-background-tx font-bold opacity-60`}>{pageData.name}
           <small className={`text-primary-bg `}> {pageData.dashboard} page</small></h1>

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}
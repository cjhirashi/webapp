
export const metadata = {
  title: 'Home',
  description: 'Página principal',
};

const pageData = {
  name: 'Home',
  description: 'Página principal',
}

export default function HomePage() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-screen `}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>



        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-background-tx items-center overflow-y-auto `}>

          <h1 className={`my-auto text-3xl text-background-tx font-bold opacity-60`}>{pageData.name}
          <small className={`text-primary-bg `}> page</small></h1>

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}
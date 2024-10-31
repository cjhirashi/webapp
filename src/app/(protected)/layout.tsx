import { auth } from '@/auth'

export default async function ProtectedLayout({ children }: { children: React.ReactNode; }) {

    const session = await auth()

    if (!session) {
        return <div>No tienes acceso a esta sección</div>
    }

  return (
    <div className={`flex flex-col items-center w-screen h-screen`}>

      {/* SECCION: Header*/}
      <div className={`flex w-screen z-20`}>

        {session.user?.name}

      </div>

      {/* SECCION: Body*/}
      <div className={`flex flex-col h-full w-full overflow-hidden `}>

        { children }

      </div>

      {/* SECCION: Footer*/}
      <div className={`flex w-screen`}>

      </div>

    </div>
  );
}
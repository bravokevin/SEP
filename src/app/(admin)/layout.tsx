import '@/app/globals.css'
//@ts-ignore
import favicon from '@/../public/logo-proexcelencia-cap.png';
import Sidebar from '@/components/navigation/sideBar/Sidebar';
import Navbar from '@/components/navigation/navbar/Navbar';
export const metadata = {
  title: 'Proexcelencia',
  description: 'Sistema de Evaluacion del Becario',
  icons: favicon.src,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main className='flex md:h-screen bg-gradient-to-b dark:from-emerald-950 dark:to-slate-950 '>
          <Sidebar />
          <section className='flex z-10 rounded-2xl bg-white dark:bg-emerald-700 2-full p-2 m-2 md:w-screen'>
            <Navbar />
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}

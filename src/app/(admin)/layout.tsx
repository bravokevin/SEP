import Head from 'next/head';
import '@/app/globals.css'
import PublicFooter from '@/components/footer/Public';
//@ts-ignore
import favicon from '@/../public/logo-proexcelencia-cap.png';
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
      <Head>
      </Head>
      <body>
        <main className='p-2 md:h-screen bg-gradient-to-b dark:from-emerald-950 dark:to-slate-950'>
          {children}
        </main>
      </body>
    </html>
  )
}

import Head from 'next/head';
import './globals.css'
import PublicFooter from '@/components/footer/Public';

export const metadata = {
  title: 'Proexcelencia',
  description: 'Sistema de Evaluacion del Becario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" type="image/png" href='/logo-proexcelencia-cap.png' />
      </Head>
      <body>
        {children}
        <PublicFooter />
      </body>
    </html>
  )
}

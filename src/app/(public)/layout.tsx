import Head from 'next/head';
import { ColorSchemeEnum } from 'next/dist/lib/metadata/types/metadata-types';
import './globals.css'
import PublicFooter from '@/components/footer/Public';
import favicon from '../../../public/logo-proexcelencia-cap.png';
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
        {children}
        <PublicFooter />
      </body>
    </html>
  )
}

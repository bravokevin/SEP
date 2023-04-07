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
      <body>
        {children}
        <PublicFooter />
      </body>
    </html>
  )
}

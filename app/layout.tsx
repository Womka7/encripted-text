import './styles/globals.css'
export const metadata = {
  title: 'Encriptador de Texto',
  description: 'Encriptador de texto con Next.js y TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}
       
      </body>
    </html>
  )
}

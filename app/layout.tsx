import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: 'EBC Serviços Terceirizados | Segurança Profissional',
  description: 'Empresa de segurança especializada em proteção empresarial, segurança de eventos e segurança pessoal. Profissionais qualificados e tecnologia de ponta.',
  keywords: ['segurança', 'segurança empresarial', 'segurança de eventos', 'segurança pessoal', 'EBC'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'



// export const metadata: Metadata = {
//   title: 'EBC Serviços Terceirizados',
//   description: 'Empresa de segurança especializada em proteção empresarial, segurança de eventos e segurança pessoal. Profissionais qualificados e tecnologia de ponta.',
//   keywords: ['segurança', 'segurança empresarial', 'segurança de eventos', 'segurança pessoal', 'EBC'],
// }

export const metadata: Metadata = {
  title: {
    default: 'EBC Serviços Terceirizados',
    template: '%s | EBC Serviços Terceirizados',
  },

  description:
    'Soluções em controle de acesso, portaria, recepção, apoio operacional para obras e segurança patrimonial em São Paulo.',

  openGraph: {
    title: 'EBC Serviços Terceirizados',
    description:
      'Serviços terceirizados com qualidade, segurança e profissionais treinados.',
    url: 'https://ebcservicos.com',
    siteName: 'EBC Serviços Terceirizados',
    locale: 'pt_BR',
    type: 'website',
  },
  keywords: [
    'serviços terceirizados',
    'controle de acesso',
    'portaria terceirizada',
    'recepção empresarial',
    'apoio operacional para obras',
    'segurança patrimonial',
    'empresa de segurança em São Paulo',
    'serviços terceirizados SP',
    'controle de acesso São Paulo',
    'portaria para condomínios',
    'EBC Serviços Terceirizados'
  ],
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

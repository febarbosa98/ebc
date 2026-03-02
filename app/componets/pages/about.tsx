import Image from "next/image"
import { Shield, Award, Users, Eye } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Proteção Integral",
    description: "Cobertura completa para todos os tipos de ameaça e risco.",
  },
  {
    icon: Award,
    title: "Profissionais Certificados",
    description: "Equipe altamente treinada e certificada pelos órgãos reguladores.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe um plano de segurança sob medida.",
  },
  {
    icon: Eye,
    title: "Vigilância Avançada",
    description: "Tecnologia de ponta em monitoramento e prevenção.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
              Quem Somos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Excelência em segurança desde a nossa fundação
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A EBC Serviços Terceirizados é referência no mercado de segurança privada. Com uma equipe de profissionais altamente qualificados e tecnologia de última geração, oferecemos soluções de segurança personalizadas que garantem a tranquilidade dos nossos clientes.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nossa missão é proporcionar proteção de excelência, combinando expertise humana com inovação tecnológica para entregar resultados superiores.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/hero-corporate.png"
                alt="Equipe de seguranca EBC"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-sm border border-border bg-card p-6">
              <p className="text-4xl font-bold text-gold">+4</p>
              <p className="text-sm text-muted-foreground">Anos protegendo o que importa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

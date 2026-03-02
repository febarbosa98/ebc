import { ShieldCheck, Clock, Headphones, Lock, Zap, Target } from "lucide-react"

const differentials = [
  {
    icon: ShieldCheck,
    title: "Equipe Qualificada",
    description: "Profissionais com treinamento contínuo e certificações atualizadas nos mais altos padrões do mercado.",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Atendimento e monitoramento ininterrupto, garantindo segurança a qualquer hora do dia ou da noite.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Canal de comunicação exclusivo com resposta rápida para qualquer situação ou emergência.",
  },
  {
    icon: Lock,
    title: "Tecnologia de Ponta",
    description: "Sistemas de monitoramento eletrônico, câmeras inteligentes e equipamentos de última geração.",
  },
  {
    icon: Zap,
    title: "Resposta Rapida",
    description: "Protocolos de ação imediata para responder a qualquer tipo de incidente com agilidade.",
  },
  {
    icon: Target,
    title: "Planos Personalizados",
    description: "Cada cliente recebe uma solução de segurança sob medida, alinhada às suas necessidades.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
            Por que nos escolher
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Diferenciais que fazem a diferença
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Combinamos experiencia, tecnologia e compromisso para entregar o mais alto nivel de seguranca.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-gold/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

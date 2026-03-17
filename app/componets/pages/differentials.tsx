"use client"

import { ShieldCheck, Clock, Headphones, Lock, Zap, Target } from "lucide-react"
import { useAnimateOnScroll } from "../hooks/use-animate-on-scroll"

const differentials = [
  {
    icon: ShieldCheck,
    title: "Profissionais preparados e treinados",
    description: "Nossa equipe passa por orientação e treinamento para atuar com disciplina, postura profissional e responsabilidade nas operações de segurança e controle de acesso.",
  },
  {
    icon: Clock,
    title: "Compromisso com pontualidade e responsabilidade",
    description: "Cumprimos rigorosamente horários, procedimentos e responsabilidades, garantindo confiança e tranquilidade para nossos clientes.",
  },
  {
    icon: Headphones,
    title: "Organização e controle operacional",
    description: "Trabalhamos com processos claros e organização no fluxo de pessoas, garantindo mais segurança e eficiência para empresas, condomínios e obras.",
  },
  
  {
    icon: Zap,
    title: "Atendimento próximo e transparente",
    description: "Acreditamos em relações claras e duradouras com nossos clientes, oferecendo suporte e acompanhamento sempre que necessário.",
  },
  
]

export function Differentials() {
  const { ref: titleRef, isVisible: titleVisible } = useAnimateOnScroll()
  const { ref: descRef, isVisible: descVisible } = useAnimateOnScroll()
  const { ref: menuRef, isVisible: menuVisible } = useAnimateOnScroll()

  return (
    <section id="diferenciais" className="relative py-24 lg:py-32">
      <div className="mx-auto container px-6">
        <div className="text-center">
          <div ref={titleRef} className={`${
              titleVisible
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                : "opacity-0"
            }`}>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
            Por que escolher a EBC?
          </span>
          </div>
          <div ref={descRef} className={`${
              descVisible
                ? "animate-in fade-in slide-in-from-left-8 duration-700 delay-200"
                : "opacity-0"
            }`}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Gestão com experiência complementar
          </h2>
            </div>
            <div ref={descRef} className={`${
              descVisible
                ? "animate-in fade-in slide-in-from-right-8 duration-700 delay-300"
                : "opacity-0"
            }`}>
          <p className="mx-auto mt-4 max-w-4xl text-muted-foreground">
            A EBC é conduzida por três irmãos com experiências diferentes e complementares nas áreas comercial, administrativa e operacional, garantindo uma gestão organizada, estratégica e focada na qualidade dos serviços.
          </p>
            </div>
        </div>

        <div        
        
        ref={menuRef}
        className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 ${
              menuVisible
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400"
                : "opacity-0"
            }`}>
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-gold/30 "
            >
              <div className="absolute inset-0 bg-linear-to-br from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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

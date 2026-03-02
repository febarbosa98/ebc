import Image from "next/image"
import { Building2, CalendarDays, UserCheck, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Segurança Empresarial",
    description:
      "Proteção completa para o seu negócio. Controle de acesso, vigilância patrimonial, monitoramento eletrônico e equipes treinadas para garantir a segurança do seu patrimônio e colaboradores.",
    image: "/images/service-corporate.png",
    features: ["Controle de acesso", "Vigilância patrimonial", "Monitoramento 24h", "Ronda motorizada"],
  },
  {
    icon: CalendarDays,
    title: "Segurança de Eventos",
    description:
      "Planejamento e execução de segurança para eventos de qualquer porte. Shows, congressos, feiras, festas corporativas e eventos sociais com total profissionalismo e discrição.",
    image: "/images/service-events.png",
    features: ["Planejamento estrategico", "Controle de multidão", "Area VIP", "Gestão de crises"],
  },
  {
    icon: UserCheck,
    title: "Segurança Pessoal",
    description:
      "Proteção individualizada para executivos, personalidades e pessoas que necessitam de acompanhamento especializado. Segurança aproximada com total discrição e eficiência.",
    image: "/images/service-personal.png",
    features: ["Escolta pessoal", "Análise de risco", "Rotas seguras", "Proteção 24 horas"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
            Nossos Servicos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluções completas de segurança
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Oferecemos uma gama completa de servicos de segurança, adaptados às necessidades especificas de cada cliente.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

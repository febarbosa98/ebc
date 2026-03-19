"use client"

import Image from "next/image"
import {  UserCheck, ArrowRight, Sparkles, ScanFace, ShieldAlert, FlameKindling, ScanLine, DoorOpen, ShieldCheck, HardHat, UserRound  } from "lucide-react"
import { useAnimateOnScroll } from "../hooks/use-animate-on-scroll"


const services = [
 

  {
  icon: ScanLine,
  title: "Controle de Acesso",
  description:
    "Organização e monitoramento do fluxo de pessoas em empresas, condomínios e obras.",
  image: "/images/service-access.jpg",
 
},
{
  icon: DoorOpen,
  title: "Portaria",
  description:
    "Controle de entrada e saída de visitantes, colaboradores e fornecedores.",
  image: "/images/portaria.jpg",
  
},
{
  icon: ShieldCheck,
  title: "Segurança Patrimonial",
  description:
    "Proteção de ambientes, pessoas e patrimônios com profissionais treinados.",
  image: "/images/patrimonial.jpg",
  
},

{
  icon: HardHat,
  title: "Apoio Operacional para Obras",
  description:
    "Controle de acesso e organização do fluxo de trabalhadores e visitantes.",
  image: "/images/service-risk.jpg",
 
},
{
  icon: UserRound,
  title: "Recepção",
  description:
    "Atendimento profissional e organização no fluxo de visitantes.",
  image: "/images/service-reception.jpg",
  
},

]

export function Services() {


  const { ref: menuRef, isVisible: menuVisible } = useAnimateOnScroll()
  const { ref: titleRef, isVisible: titleVisible } = useAnimateOnScroll()
  const { ref: descRef, isVisible: descVisible } = useAnimateOnScroll()
  

  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-secondary">
      <div className="mx-auto container px-6">
        <div className="text-center">
          <div ref={titleRef}
            className={`${
              titleVisible ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
                : "opacity-0"
            }`}
          >
          <span className="text-md font-semibold tracking-[0.2em] uppercase text-gold">
            Nossos Serviços
          </span>
          </div>
          <div ref={descRef}
            className={`${
              descVisible ? "animate-in fade-in slide-in-from-left-8 duration-700 delay-300"
                : "opacity-0"
            }`}
          >
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluções completas em serviços  para o seu negócio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
           Atendemos empresas, obras e condomínios em toda a cidade de São Paulo e região.
          </p>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 mt-10 lg:grid-cols-2 gap-6 ${menuVisible ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300" : "opacity-0"}`}
        ref={menuRef}
        
        >
          {services.map((service,) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-gold/30 `}
            >
              
              
                <div className="relative aspect-16/10 overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 h-auto bg-linear-to-t from-card via-card/50 to-transparent" />
                </div>
             

              <div >
                <div className="flex gap-3 items-center">

                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className=" text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul> */}

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

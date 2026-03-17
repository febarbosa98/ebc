"use client"

import Image from "next/image"
import { Shield, Award, Users, Eye } from "lucide-react"
import { useAnimateOnScroll } from "../hooks/use-animate-on-scroll"

const highlights = [
  {
    icon: Shield,
    title: "Organização e controle operacional",
    description: "Trabalhamos com processos claros e organização no fluxo de pessoas, garantindo mais segurança e eficiência para empresas, condomínios e obras.",
  },
  {
    icon: Award,
    title: "Profissionais preparados e treinados",
    description: "Nossa equipe passa por orientação e treinamento para atuar com disciplina, postura profissional e responsabilidade nas operações de segurança e controle de acesso.",
  },
  {
    icon: Users,
    title: "Atendimento próximo e transparente",
    description: "Acreditamos em relações claras e duradouras com nossos clientes, oferecendo suporte e acompanhamento sempre que necessário.",
  },
  {
    icon: Eye,
    title: "Compromisso com pontualidade e responsabilidade",
    description: "Cumprimos rigorosamente horários, procedimentos e responsabilidades, garantindo confiança e tranquilidade para nossos clientes.",
  },
]

export function AboutShort() {

  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: textRef, isVisible: textVisible } = useAnimateOnScroll()
  const { ref: highlightsRef, isVisible: highlightsVisible } = useAnimateOnScroll()
  const { ref: imageRef, isVisible: imageVisible } = useAnimateOnScroll()
  
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-gradient-to-bl from-background/40 via-secondary/30 to-background/40  ">

    {/* bg-gradient-to-b from-background via-secondary to-background */}
       
      <div className="mx-auto container px-6 z-10">
        <div className="grid gap-0 lg:grid-cols-2   ">
          <div 
          ref={headerRef}
              className={`flex flex-col  ${
                headerVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}
          >
            <span className="text-md font-semibold tracking-[0.2em] uppercase text-gold">
              Sobre a empresa
            </span>
            
            <div
              ref={textRef}
              className={` mb-0${
                textVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700 delay-200"
                  : "opacity-0"
              }`}
            >

            
            <p className="mt-6 leading-relaxed text-foreground">
              A EBC Serviços nasceu da união de três irmãos que decidiram transformar suas experiências nas áreas comercial, administrativa e de segurança em uma empresa comprometida com qualidade, organização e confiança.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Atendemos empresas, obras e condomínios oferecendo serviços profissionais de controle de acesso, segurança patrimonial e apoio operacional, sempre com foco na eficiência das operações e na tranquilidade de nossos clientes.
            </p>
           
              
            </div>
            <div className="mt-10">

                <a
            href="sobre"
            className="inline-flex  items-center justify-center gap-2 rounded-sm bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold-light"
            >
            Conheça nossa história
          </a>
              </div>
            
          </div>

          <div className="relative justify-items-center animate-in fade-in blur-in-md duration-1000 md:mt-0 mt-13">
            <div ref={imageRef}
            className={`   ${
                imageVisible
                  ? "animate-in fade-in slide-in-from-right-8 duration-700"
                  : "opacity-0"
              }`}>
              <Image
                src="/images/hero-corporate.png"
                alt="EBC SERVIÇOS"
                height={0}
                width={500}
                className="object-cover "
              />
             
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

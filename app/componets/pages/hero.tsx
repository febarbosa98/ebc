"use client"

import Image from "next/image"
import { ArrowRight, Award, Eye, Shield, Users } from "lucide-react"
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

export function Hero() {
  const { ref: logoRef, isVisible: logoVisible } = useAnimateOnScroll()
  const { ref: titleRef, isVisible: titleVisible } = useAnimateOnScroll()
  const { ref: descRef, isVisible: descVisible } = useAnimateOnScroll()
  const { ref: btnsRef, isVisible: btnsVisible } = useAnimateOnScroll()
  const { ref: highlightsRef, isVisible: highlightsVisible } = useAnimateOnScroll()




  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/fundo5.png"
          alt="Seguranca profissional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto container px-6 py-0 pt-20 md:py-32 md:pt-40">
        <div className=" mx-auto flex flex-col md:flex-row  justify-center items-center md:gap-12">
          <div 
          ref={logoRef}
            className={`relative w-full  h-[360] md:mt-0 md:h-150  ${
              logoVisible
                ? "animate-in fade-in zoom-in-95 duration-700"
                : "opacity-0"
            }`}>
            <Image
              src="/logo55.png"
              alt="EBC Servicos Terceirizados"
            //   width={600}
            //   height={100}
            fill
              className="object-contain h-auto "
              priority
            />
            {/* <div className="absolute inset-0 bg-background/80" /> */}
          </div>
          <div className="max-w-6xl w-auto">

         

            {/* animate-in fade-in slide-in-from-right duration-600 */}
            <div
            ref={titleRef}
            className={`${
              titleVisible
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
                : "opacity-0"
            }`}
          >
          <h1 className="text-4xl font-bold mt-5 md:mt-0 leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance
          ">
            Segurança, organização e confiança para
            {" "}
            <span className="text-gold">empresas, obras e condomínios</span>{" "}
            
          </h1>
          </div>

            <div
            ref={descRef}
            className={`${
              descVisible
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
                : "opacity-0"
            }`}
          >

          
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-right duration-800 ">
            A EBC é conduzida por três irmãos com experiências diferentes e complementares nas áreas comercial, administrativa e operacional, garantindo uma gestão organizada, estratégica e focada na qualidade dos serviços.
          </p>
          <div ref={highlightsRef}
              className={`mt-10 grid grid-cols-2 gap-6 ${
                highlightsVisible
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
                  : "opacity-0"
              }`}>
              {highlights.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">

                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-md font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            </div>
          <div  
          ref={btnsRef}
          className={`mt-10 flex flex-col gap-4 sm:flex-row ${
              btnsVisible
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500"
                : "opacity-0"
            }`}
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold-light
              
              "
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-gold hover:text-gold
              "
            >
              Nossos Serviços
            </a>
          </div>

           </div>
        </div>
      </div>
    </section>
  )
}

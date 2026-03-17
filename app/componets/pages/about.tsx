"use client"

import Image from "next/image"
import { Clock, Award,  Shield, Users, HandFist  } from "lucide-react"
import { useAnimateOnScroll } from "../hooks/use-animate-on-scroll"

const lideranca = [
  {
    nome: "Eric Fernandes",
    cargo: "Diretor Comercial",
    descricao:
      "Responsável pela área comercial e relacionamento com clientes, com experiência em grandes empresas como Stone, Cielo e Mercado Pago.",
    foto: "/images/hero-corporate.png",
  },
  {
    nome: "Bianca Fernandes",
    cargo: "Diretora Administrativa e Financeira",
    descricao:
      "Contadora com mais de 10 anos de experiência na gestão contábil, fiscal e administrativa de empresas.",
    foto: "/images/hero-corporate.png",
  },
  {
    nome: "Caio Fernandes",
    cargo: "Diretor Operacional",
    descricao:
      "Ex-militar do Exército Brasileiro, responsável pela área operacional e treinamento das equipes de segurança.",
    foto: "/images/hero-corporate.png",
  },
];

export function About() {

  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: textRef, isVisible: textVisible } = useAnimateOnScroll()
  const { ref: imageRef, isVisible: imageVisible } = useAnimateOnScroll()
  const { ref: textMissao, isVisible: textMissaoVisible } = useAnimateOnScroll()
  const { ref: textVisao, isVisible: textVisaoVisible } = useAnimateOnScroll()
  const { ref: textproposito, isVisible: textpropositoVisible } = useAnimateOnScroll()
  const { ref: textValores, isVisible: textValoresVisible } = useAnimateOnScroll()
  const { ref: textLideranca, isVisible: textLiderancaVisible } = useAnimateOnScroll()
  
  return (<>
    <section id="sobre" className="relative py-24 lg:py-32 bg-gradient-to-bl from-background/40 via-secondary/30 to-background/40  ">

    {/* bg-gradient-to-b from-background via-secondary to-background */}
       
      <div className="mx-auto container px-6 z-10">
        <div className="grid gap-0 lg:grid-cols-2 lg:items-center ">
          <div 
          ref={headerRef}
              className={`col-span-1 ${
                headerVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}
          >
            <span className="text-md font-semibold tracking-[0.2em] uppercase text-gold">
              Quem Somos
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
              Algumas empresas nascem de uma oportunidade.
A EBC nasceu de uma história de vida.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Somos três irmãos que cresceram em uma família simples, humilde e honesta, onde aprendemos desde cedo que caráter, trabalho e responsabilidade são valores que não se negociam. Foi com essa base que cada um de nós construiu sua própria trajetória profissional.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Com o passar dos anos, cada um seguiu um caminho diferente, adquirindo experiências importantes em áreas distintas. Mas em algum momento percebemos que, juntos, poderíamos transformar tudo o que aprendemos em algo maior.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Eric, o irmão mais velho, construiu uma sólida carreira na área comercial. Atuou como gerente em grandes empresas do setor financeiro, como Stone, Cielo e atualmente Mercado Pago, desenvolvendo forte experiência em relacionamento com clientes, crescimento de negócios e gestão comercial.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Bianca Fernandes, a irmã do meio, é contadora com mais de 10 anos de experiência. Ao longo da carreira trabalhou em escritórios contábeis de grande porte, atendendo milhares de empresas e ajudando negócios a crescerem com organização, planejamento e segurança na gestão.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Caio, o caçula, possui formação militar pelo Exército Brasileiro, onde desenvolveu disciplina, preparo técnico e forte atuação na área de segurança. Atualmente atua na segurança pessoal de autoridades e empresários, trazendo para a empresa experiência prática de campo, foco em procedimentos e treinamento das equipes operacionais.
            </p>
          
            </div>

            
          </div>
<div ref={textRef}
              className={`col-span-2 ${
                textVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700 delay-200"
                  : "opacity-0"
              }`}>

        
          <p className="mt-4 leading-relaxed text-foreground">
              A ideia de criar a EBC surgiu justamente da visão de Caio sobre a importância de serviços de segurança e controle de acesso bem estruturados. Ao unir essa experiência com a gestão administrativa e a visão comercial da família, nasceu a empresa.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Mais do que prestar serviços, nosso propósito é levar organização, segurança e tranquilidade para empresas, obras e pessoas.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Acreditamos que a união da família, o respeito às pessoas e o trabalho bem feito são a base para construir algo sólido e duradouro.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Estamos apenas no começo dessa história, mas seguimos com um objetivo claro: construir uma empresa que seja reconhecida pela confiança, pela qualidade dos serviços e pelo cuidado com cada cliente.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              Porque para nós, a EBC não é apenas um negócio.
É a união da nossa família transformada em trabalho, responsabilidade e propósito.
            </p>
            </div>
          <div className="relative justify-items-center animate-in fade-in blur-in-md duration-1000 lg:row-span-1 lg:row-end-2 lg:col-span-2 lg:col-end-4 mt-3">
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
              {/* <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" /> */}
            </div>
            {/* <div ref={highlightsRef}
              className={`mt-10 grid grid-cols-2 gap-6 ${
                highlightsVisible
                  ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
                  : "opacity-0"
              }`}>
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
            </div> */}
          </div>
        </div>
        
      </div>
    </section>
    <section className="relative py-24 lg:py-32 bg-secondary">
            <div className="mx-auto container px-6 grid md:grid-cols-2 gap-6">
              <div >
                <div 
                ref={textMissao}
              className={` ${
                textMissaoVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}>
                  <h2 className="text-md font-semibold tracking-[0.2em] mt-0 uppercase text-gold">
                    Missão
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Oferecer serviços de portaria, controle de acesso, segurança
                    patrimonial e apoio operacional com excelência, garantindo
                    segurança, organização e tranquilidade para empresas,
                    condomínios e obras.
                  </p>
                </div >
                <div 
                ref={textVisao}
              className={`mt-15 ${
                textVisaoVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}
                >
                  <h2 className="text-md font-semibold tracking-[0.2em]  uppercase text-gold">
                    Visão
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Ser reconhecida como uma empresa confiável e eficiente no setor
                    de serviços terceirizados, destacando-se pela qualidade e
                    profissionalismo.
                  </p>
                </div>
                <div ref={textproposito}
              className={`mt-15 ${
                textpropositoVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}>
                  <h2 className="text-md font-semibold tracking-[0.2em]  uppercase text-gold">
                    Propósito
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Contribuir para ambientes mais seguros, organizados e bem
                    estruturados, levando tranquilidade para empresas, obras e
                    pessoas.
                  </p>
                </div>
                <div ref={textValores}
              className={`mt-15 ${
                textValoresVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}>
                  <h2 className="text-md font-semibold tracking-[0.2em] uppercase text-gold">
                    Valores
                  </h2>
                  <ul className="mt-3">
                    <li className="mt-2 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                        <Shield className="h-5 w-5 text-gold" />
                      </div>Confiança</li>
                    <li className="mt-2 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                        <Clock className="h-5 w-5 text-gold" />
                      </div>Responsabilidade</li>
                    <li className="mt-2 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                        <Users className="h-5 w-5 text-gold" />
                      </div>Respeito às pessoas</li>
                    <li className="mt-2 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                        <Award className="h-5 w-5 text-gold" />
                      </div>Qualidade no serviço</li>
                    <li className="mt-2 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                        <HandFist className="h-5 w-5 text-gold" />
                      </div>União</li>
                  </ul>
                </div>
              </div>
              <div>
                
                <div ref={textLideranca}
              className={` ${
                textLiderancaVisible
                  ? "animate-in fade-in slide-in-from-right-8 duration-700"
                  : "opacity-0"
              }`}>
                  <h2 className="text-md font-semibold text-center tracking-[0.2em] mt-0 uppercase text-gold">
                    Liderança
                  </h2>
                  {lideranca.map((item) => (
                    <div key={item.nome} className="  items-center mt-3 bg-card  p-6 rounded-3xl">
                      <div className="grid md:grid-cols-2  mx-auto">
    
                      <div className="flex flex-col items-left justify-center ">
                        <h3 className="text-md font-bold text-foreground">
                          {item.nome}
                        </h3>
                        <span className="text-gold mt-0.5">{item.cargo}</span>
                        <p className="text-sm mt-2 leading-relaxed text-muted-foreground">
                          {item.descricao}
                        </p>
                      </div>
                      <div className="mx-auto mt-4 md:mt-0">
                         <Image
                                        src={item.foto}
                                        alt="EBC SERVIÇOS"
                                        height={0}
                                        width={240}
                                        className="object-cover justify-center"
                                      />
                        
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

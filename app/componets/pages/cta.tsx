
'use client'
import Image from "next/image"
import { useAnimateOnScroll } from "../hooks/use-animate-on-scroll"
import Link from "next/link"

export function CTA() {
    const { ref: logoRef, isVisible: logoVisible } = useAnimateOnScroll()
    const { ref: textRef, isVisible: textVisible } = useAnimateOnScroll()
    const { ref: buttonRef, isVisible: buttonVisible } = useAnimateOnScroll()
    const { ref: buttonRef2, isVisible: buttonVisible2 } = useAnimateOnScroll()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/fundo.png"
          alt="Seguranca de eventos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 mx-auto container px-6 text-center">
        <div 
        ref={logoRef}
        className={`flex justify-center mb-6 ${
          logoVisible
            ? "animate-in fade-in zoom-in-95 duration-700"
            : "opacity-0"
        }`}
        >
          <div className="flex  items-center justify-center ">
            <Image
          src="/logo55.png"
          alt="Seguranca de eventos"
          height={0}
          width={300}
          className="object-cover"
        />
          </div>
        </div>
        <div ref={textRef}
        className={`${          textVisible
            ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200"
            : "opacity-0"
        }`}>

        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          Atendemos empresas, obras e condomínios em toda a cidade de São Paulo e região.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
         Precisa de segurança e organização para sua operação?
         <br />
         Fale com a equipe da EBC e solicite um orçamento
        </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div
          ref={buttonRef}
          className={`${            buttonVisible
              ? "animate-in fade-in slide-in-from-left-6 duration-700 delay-300"
              : "opacity-0"
          }`}>
          <Link
            href="/#contato"
            // replace={true}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold-light"
            >
            Solicitar Orçamento Gratuito
          </Link>
            </div>
            <div
          ref={buttonRef2}
          className={`${            buttonVisible2
              ? "animate-in fade-in slide-in-from-right-6 duration-700 delay-300"
              : "opacity-0"
          }`}>

          <a
            href="tel:+5511945384557"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-10 py-4 text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-background"
            >
            Ligue Agora
          </a>
            </div>
        </div>
      </div>
    </section>
  )
}

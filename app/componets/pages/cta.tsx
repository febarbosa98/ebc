import Image from "next/image"
import { Shield } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/service-events.png"
          alt="Seguranca de eventos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex  items-center justify-center ">
            <Image
          src="/logoSemFundo-removebg-preview.png"
          alt="Seguranca de eventos"
        width={200}
            height={200}
          className="object-cover"
        />
          </div>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          Proteja o que é mais importante para você
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Não espere acontecer. Fale com nossos especialistas e tenha um plano de segurança sob medida para a sua necessidade.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold-light"
          >
            Solicitar Orçamento Gratuito
          </a>
          <a
            href="tel:+5500000000000"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-10 py-4 text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-background"
          >
            Ligue Agora
          </a>
        </div>
      </div>
    </section>
  )
}

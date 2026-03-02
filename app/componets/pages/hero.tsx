import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-corporate.png"
          alt="Seguranca profissional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-0 md:py-32 md:pt-40">
        <div className=" mx-auto flex flex-col md:flex-row  justify-center items-center md:gap-12">
          <div className="relative w-full  h-150 md:h-150 ">
            <Image
              src="/logoSemFundo-removebg-preview.png"
              alt="EBC Servicos Terceirizados"
            //   width={600}
            //   height={100}
            fill
              className="object-contain h-auto"
              priority
            />
          </div>
          <div>

         

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Segurança que{" "}
            <span className="text-gold">protege</span>{" "}
            o que importa
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            A EBC Serviços Terceirizados oferece soluções completas de segurança para empresas, eventos e proteção pessoal com excelência e profissionalismo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold-light"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-gold hover:text-gold"
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

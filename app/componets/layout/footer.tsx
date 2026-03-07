"use client"

import Image from "next/image"
import { Shield } from "lucide-react"
import { useAnimateOnScroll } from "../hooks/use-animate-on-scroll"

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Contato", href: "/#contato" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
]

export function Footer() {
const { ref: menuRef, isVisible: menuVisible } = useAnimateOnScroll()

  return (
    <footer className="border-t border-border bg-background">
      <div 
      ref={menuRef}
          className={`mx-auto max-w-7xl px-6 py-12 ${
              menuVisible
                ? "animate-in fade-in slide-in-from-bottom-8 duration-700"
                : "opacity-0"
            }`}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3">
              <Image
                src="/logo5.png"
                alt="EBC Servicos Terceirizados"
                width={40}
                height={40}
              />
              <div>
                <span className="text-lg font-bold tracking-wide text-foreground">EBC</span>
                <span className="block text-xs tracking-widest uppercase text-gold">
                  Serviços Terceirizados
                </span>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Empresa especializada em serviços terceirizados: controle de acesso, recepção, bombeiro civil, limpeza e análise de risco.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Navegação
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Servicos
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Controle de Acesso
              </a>
              <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Recepção Profissional
              </a>
              <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Análise de Risco
              </a>
              <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Bombeiro Civil
              </a>
              <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Limpeza e Conservação
              </a>
              
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+550000000000" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                (00) 0000-0000
              </a>
              <a href="mailto:contato@ebcservicos.com.br" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                contato@ebcservicos.com.br
              </a>
              <a href="https://www.instagram.com/ebcservicos" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                    @ebcservicos
                  </a>
              <p className="text-sm text-muted-foreground">Brasil</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {'© 2026 EBC Serviços Terceirizados. Todos os direitos reservados.'}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-3 w-3 text-gold" />
            Proteção e confiança
          </div>
        </div>
      </div>
    </footer>
  )
}

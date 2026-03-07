"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Contato", href: "/#contato" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo5.png"
            alt="EBC Servicos Terceirizados"
            width={48}
            height={48}
          />
          <div className="block">
            <span className="text-lg font-bold tracking-wide text-foreground">
              EBC
            </span>
            <span className="block text-xs tracking-widest uppercase text-gold">
              Serviços Terceirizados
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+5500000000000"
            className="hidden items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-background md:flex"
          >
            <Phone className="h-4 w-4" />
            Ligue Agora
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground lg:hidden"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-wide uppercase text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5500000000000"
              className="flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-background"
            >
              <Phone className="h-4 w-4" />
              Ligue Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

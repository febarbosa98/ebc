"use client"

import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Me chamo ${formData.name}. Gostaria de saber mais sobre ${formData.service || 'os servicos de seguranca'}. ${formData.message}`
    window.open(
      `https://wa.me/5511960255173?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )
  }

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
              Fale Conosco
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Solicite um orçamento personalizado
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Entre em contato conosco e receba uma proposta sob medida para as suas necessidades de segurança.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Telefone</p>
                  <p className="text-sm text-muted-foreground">(00) 0000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">contato@ebcseguranca.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Endereco</p>
                  <p className="text-sm text-muted-foreground">Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-sm border border-border bg-card p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground">
                  Servico
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="">Selecione um servico</option>
                  <option value="Seguranca Empresarial">Seguranca Empresarial</option>
                  <option value="Seguranca de Eventos">Seguranca de Eventos</option>
                  <option value="Seguranca Pessoal">Seguranca Pessoal</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="Descreva sua necessidade de seguranca..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold-light"
            >
              Enviar Mensagem
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

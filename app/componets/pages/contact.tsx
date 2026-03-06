"use client"

import { Phone, Mail, MapPin, Send, Instagram, Loader2, CheckCircle } from "lucide-react"
import { useState } from "react"
import { useAnimateOnScroll } from "../hooks/use-animate-on-scroll"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setErrorMsg(data.error || "Erro ao enviar mensagem.")
        return
      }

      if (data.method === "mailto") {
        window.location.href = data.mailto
      }

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch {
      setStatus("error")
      setErrorMsg("Erro ao enviar mensagem. Tente novamente.")
    }
  }
const { ref: menuRef, isVisible: menuVisible } = useAnimateOnScroll()
const { ref: menuRef2, isVisible: menuVisible2 } = useAnimateOnScroll()

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div
            ref={menuRef}
            className={`${
              menuVisible
                ? "animate-in fade-in slide-in-from-left-8 duration-700"
                : "opacity-0"
            }`}
          >
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
                  <a href="tel:+550000000000" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                (00) 0000-0000
              </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">E-mail</p>
                  <a href="mailto:contato@ebcseguranca.com.br" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                contato@ebcseguranca.com.br
              </a>
                  
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
                  <Instagram className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Instagram</p>
                  <a href="https://www.instagram.com/ebcseguranca" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                    @ebcseguranca
                  </a>
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
          
          <div
          ref={menuRef2}
          className={`${
              menuVisible2
                ? "animate-in fade-in slide-in-from-right-8 duration-700"
                : "opacity-0"
            }`}
          >
          <form
          onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-sm border border-border bg-card p-8">
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
                  Serviço
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold "
                >
                  <option className="hover:bg-red-500" value="">Selecione um serviço</option>
                  <option  value="Segurança Empresarial">Segurança Empresarial</option>
                  <option value="Segurança de Eventos">Segurança de Eventos</option>
                  <option value="Segurança Pessoal">Segurança Pessoal</option>
                  <option value="Limpeza Profissional">Limpeza Profissional</option>
                  <option value="Controle de Acesso">Controle de Acesso</option>
                  <option value="Analise de Risco">Analise de Risco</option>
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
                placeholder="Descreva sua necessidade de segurança..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold-light"
            >
               {status === "loading" ? (
                <>
                  Enviando...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : status === "success" ? (
                <>
                  Mensagem Enviada
                  <CheckCircle className="h-4 w-4" />
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-400 text-center">{errorMsg}</p>
            )}

            {status === "success" && (
              <p className="text-sm text-green-400 text-center">
                Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

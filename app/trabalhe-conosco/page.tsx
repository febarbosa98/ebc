"use client"

import Image from "next/image"
import { Users, Target, Heart, TrendingUp, Send } from "lucide-react"
import { useAnimateOnScroll } from "../componets/hooks/use-animate-on-scroll"
import { useState } from "react"
import { Header } from "../componets/layout/header"
import { Footer } from "../componets/layout/footer"

const benefits = [
  {
    icon: Users,
    title: "Equipe Colaborativa",
    description: "Trabalhe em um ambiente de equipe unida e motivada.",
  },
  {
    icon: Target,
    title: "Crescimento Profissional",
    description: "Oportunidades de desenvolvimento e capacitação contínua.",
  },
  {
    icon: Heart,
    title: "Bem-estar dos Colaboradores",
    description: "Cuidamos do seu bem-estar com benefícios e suporte.",
  },
  {
    icon: TrendingUp,
    title: "Carreira em Ascensão",
    description: "Plano de carreira estruturado para seu crescimento.",
  },
]

export default function TrabalheConosco() {
  const { ref: headerRef, isVisible: headerVisible } = useAnimateOnScroll()
  const { ref: textRef, isVisible: textVisible } = useAnimateOnScroll()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useAnimateOnScroll()
  const { ref: imageRef, isVisible: imageVisible } = useAnimateOnScroll()
  const { ref: formRef, isVisible: formVisible } = useAnimateOnScroll()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""

  })
  const [cv, setCv] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCv(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formDataToSend = new FormData()
    formDataToSend.append("name", formData.name)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("phone", formData.phone)
    formDataToSend.append("message", formData.message)
    if (cv) {
      formDataToSend.append("cv", cv)
    }

    try {
      const response = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.")
        setFormData({ name: "", email: "", phone: "",  message: "", service: "" })
        setCv(null)
      } else {
        setSubmitMessage("Erro ao enviar mensagem. Tente novamente.")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitMessage("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
   <>
    <Header />
    <main>
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div
              ref={headerRef}
              className={`${
                headerVisible
                  ? "animate-in fade-in slide-in-from-left-8 duration-700"
                  : "opacity-0"
              }`}
            >
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
                Carreiras
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Faça parte da nossa equipe de excelência
              </h1>
              <div
                ref={textRef}
                className={`${
                  textVisible
                    ? "animate-in fade-in slide-in-from-left-8 duration-700 delay-200"
                    : "opacity-0"
                }`}
              >
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Na EBC Serviços Terceirizados, valorizamos profissionais dedicados. Oferecemos um ambiente de trabalho dinâmico, com oportunidades de crescimento e desenvolvimento.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Se você busca uma carreira desafiadora e recompensadora, junte-se a nós.
                </p>
              </div>

              <div
                ref={benefitsRef}
                className={`mt-10 grid grid-cols-2 gap-6 ${
                  benefitsVisible
                    ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300"
                    : "opacity-0"
                }`}
              >
                {benefits.map((item) => (
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
              </div>
            </div>

            <div
              ref={imageRef}
              className={`relative aspect-4/5 overflow-hidden rounded-sm ${
                imageVisible
                  ? "animate-in fade-in slide-in-from-right-8 duration-700"
                  : "opacity-0"
              }`}
            >
              <Image
                src="/images/service-corporate.png"
                alt="Equipe EBC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-2xl px-6">
          <div
            ref={formRef}
            className={`${
              formVisible
                ? "animate-in fade-in slide-in-from-bottom-6 duration-700"
                : "opacity-0"
            }`}
          >
            <h2 className="text-2xl text-gold font-bold text-center mb-2">Envie sua Candidatura</h2>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Preencha o formulário abaixo e envie seu currículo para nossa equipe.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-sm border border-border bg-card p-8 ">
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
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="(00) 0000-0000"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground">
                  Area de Interesse
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold "
                >
                                    <option value="">Selecione uma área de interesse</option>
                                    <option value="Áreas Administrativas">Áreas Administrativas</option>
									<option value="Auxiliar de Limpeza">Auxiliar de Limpeza</option>
									<option value="Auxiliar de Serviços Gerais">Auxiliar de Serviços Gerais</option>
									<option value="Controlador de Acesso">Controlador de Acesso</option>
									<option value="Monitoramento">Monitoramento</option>
									<option value="Portaria">Portaria</option>
									<option value="Recepção">Recepção</option>
									<option value="Vigilância Desarmada">Vigilância Desarmada</option>
									<option value="Zeladoria">Zeladoria</option>
									<option value="Outros">Outros</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cv" className="text-sm font-semibold text-foreground ">
                  Currículo (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="mt-1 block w-fit text-sm text-muted-foreground  file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gold file:text-foreground hover:file:bg-gold/90"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Conte-nos um pouco sobre você e por que quer trabalhar conosco..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-medium text-foreground hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
              </button>
              {submitMessage && (
                <p className={`text-sm ${submitMessage.includes("sucesso") ? "text-green-600" : "text-red-600"}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}
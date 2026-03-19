import { NextResponse } from "next/server"


export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem sao obrigatorios." },
        { status: 400 }
      )
    }

    const emailBody = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      service ? `Servico: ${service}` : null,
      ``,
      `Mensagem:`,
      message,
    ]
      .filter(Boolean)
      .join("\n")

    const mailtoSubject = encodeURIComponent(
      `Contato via site - ${service || "Servicos Terceirizados"}`
    )
    const mailtoBody = encodeURIComponent(emailBody)

    // Send email via Resend if API key is available
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Site EBC <onboarding@resend.dev>",
          to: "fernando_fe1@hotmail.com",
          subject: `Contato via site - ${service || "Servicos Terceirizados"}`,
          text: emailBody,
          reply_to: email,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error("Resend error:", errorData)
        return NextResponse.json(
          { error: "Erro ao enviar e-mail. Tente novamente." },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true, method: "resend" })
    }

    // Fallback: return mailto link for client-side sending
    return NextResponse.json({
      success: true,
      method: "mailto",
      mailto: `mailto:fernando_fe1@hotmail.com?subject=${mailtoSubject}&body=${mailtoBody}`,
    })
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    )
  }
}

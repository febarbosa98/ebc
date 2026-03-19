import { NextResponse } from "next/server"


export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string
    const cv = formData.get("cv") as File

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      )
    }

    const emailBody = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      ``,
      `Mensagem:`,
      message,
    ]
      .filter(Boolean)
      .join("\n")

    const attachments = []
    if (cv) {
      const cvBuffer = await cv.arrayBuffer()
      const cvBase64 = Buffer.from(cvBuffer).toString('base64')
      attachments.push({
        filename: cv.name,
        content: cvBase64,
        type: cv.type,
      })
    }


    // Send email via Resend if API key is available
    if (process.env.RESEND_API_KEY) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const emailData: any = {
        from: "Site EBC <onboarding@resend.dev>",
        to: "fernando_fe1@hotmail.com",
        subject: "Candidatura via site - Trabalhe Conosco",
        text: emailBody,
        reply_to: email,
      }

      if (attachments.length > 0) {
        emailData.attachments = attachments
      }

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify(emailData),
      })

      if (!res.ok) {
        console.error("Resend API error:", await res.text())
        return NextResponse.json(
          { error: "Erro ao enviar e-mail." },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    )
  }
}
"use client";

import Image from "next/image";
import { Clock, Award, Eye, Shield, Users, HandFist  } from "lucide-react"
import { Header } from "../componets/layout/header";
import { Footer } from "../componets/layout/footer";
import { About } from "../componets/pages/about";
import { CTA } from "../componets/pages/cta";

const lideranca = [
  {
    nome: "Eric",
    cargo: "Diretor Comercial",
    descricao:
      "Responsável pela área comercial e relacionamento com clientes, com experiência em grandes empresas como Stone, Cielo e Mercado Pago.",
    foto: "/images/hero-corporate.png",
  },
  {
    nome: "Bianca Fernandes",
    cargo: "Diretora Administrativa e Financeira",
    descricao:
      "Contadora com mais de 10 anos de experiência na gestão contábil, fiscal e administrativa de empresas.",
    foto: "/images/hero-corporate.png",
  },
  {
    nome: "Caio",
    cargo: "Diretor Operacional",
    descricao:
      "Ex-militar do Exército Brasileiro, responsável pela área operacional e treinamento das equipes de segurança.",
    foto: "/images/hero-corporate.png",
  },
];

export default function TrabalheConosco() {
  return (
    <>
      <Header />
      <About />
      <CTA/>
      <Footer />
    </>
  );
}

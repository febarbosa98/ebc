"use client";

import { Header } from "../componets/layout/header";
import { Footer } from "../componets/layout/footer";
import { About } from "../componets/pages/about";
import { CTA } from "../componets/pages/cta";


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

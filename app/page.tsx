import Image from "next/image";
import { Header } from "./componets/layout/header";
import { Footer } from "./componets/layout/footer";
import { CTA } from "./componets/pages/cta";
import { Contact } from "./componets/pages/contact";
import { Differentials } from "./componets/pages/differentials";
import { Services } from "./componets/pages/services";
import { About } from "./componets/pages/about";
import { Hero } from "./componets/pages/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

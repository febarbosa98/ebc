// import Image from "next/image";
import { Header } from "./componets/layout/header";
import { Footer } from "./componets/layout/footer";
import { CTA } from "./componets/pages/cta";
import { Contact } from "./componets/pages/contact";
import { Differentials } from "./componets/pages/differentials";
import { Services } from "./componets/pages/services";
import { Hero } from "./componets/pages/hero";
import { AboutShort } from "./componets/pages/aboutShort";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutShort />
      <Services />
      <CTA />
      <Differentials />
      <Contact />
      <Footer />
    </main>
  );
}

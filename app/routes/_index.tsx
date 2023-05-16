import type { V2_MetaFunction } from "@remix-run/node";
import { About } from "~/components/About";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Technologies } from "~/components/Technologies";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Ulises Vargas - Portafolio" }];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}

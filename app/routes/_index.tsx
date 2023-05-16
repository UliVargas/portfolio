import type { V2_MetaFunction } from "@remix-run/node";
import { About } from "~/components/Sections/About";
import { Footer } from "~/components/Sections/Footer";
import { Header } from "~/components/Sections/Header";
import { Hero } from "~/components/Shared/Hero";
import { Technologies } from "~/components/Sections/Technologies";

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

import type { V2_MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/Navbar";
import avatar from "public/retrato.jpg";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Ulises Vargas - Portafolio" }];
};

export default function Index() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="h-[480px] flex items-center justify-center gap-10 border border-spacing-y-4 bg-gray-100">
          <img
            src={avatar}
            alt="Ulises Vargas"
            className="bg-gradient-to-r from-[#127357] from-0% to-[#010B40] to-80% border-4 border-spacing-2 max-h-32 rounded-full p-1 transition-transform hover:scale-105 md:max-h-40"
            width="auto"
            height="auto"
          />
          <div>
            <h4 className="text-lg font-sans">Desarrollador Web Full-Stack</h4>
            <h2 className="bg-gradient-to-r from-[#127357] from-0% to-[#010B40] to-100% bg-clip-text inline-block text-transparent text-6xl font-extrabold pt-1 pb-3">
              Ulises Vargas
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}

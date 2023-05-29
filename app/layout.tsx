import { Header } from "./components/Sections/Header";
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({ 
  weight: ['400', '700', '900'], 
  subsets: ["latin"] 
})

export const metadata = {
  title: "Ulises Vargas - Portafolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

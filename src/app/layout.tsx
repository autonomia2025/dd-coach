import type { Metadata } from "next";
import { Bebas_Neue, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ddperformance.cl"),
  title: "DD Performance · Basketball Coach Diego Droguett | Entrenamiento y formación",
  description: "Desarrollo de jugadores y formación de entrenadores bajo metodología DD LAB. Filosofía Kaizen aplicada al básquetbol. Reserva tu sesión.",
  keywords: ["basketball coach", "entrenamiento basketball", "Diego Droguett", "DD Lab", "Kaizen basketball", "Chile basketball"],
  authors: [{ name: "Diego Droguett" }],
  openGraph: {
    title: "DD Performance · Basketball Coach Diego Droguett",
    description: "Desarrollo de jugadores y formación de entrenadores bajo metodología DD LAB. Filosofía Kaizen aplicada al básquetbol.",
    url: "https://ddperformance.cl",
    siteName: "DD Performance",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "DD Performance - Diego Droguett",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DD Performance · Basketball Coach Diego Droguett",
    description: "Desarrollo de jugadores y formación de entrenadores bajo metodología DD LAB.",
    images: ["/og-image-placeholder.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${archivo.variable} ${jetbrainsMono.variable} font-sans bg-bg text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

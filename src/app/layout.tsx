import "./globals.css";
import type { Metadata } from "next";
import {
  Dancing_Script,
  Great_Vibes,
  Cormorant_Garamond,
} from "next/font/google";

const greatVibes = Great_Vibes({
  weight: ["400"],
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  weight: ["400"],
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wesele Oli i Jędrzeja",
  description: "Wrocław 05.08.2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${dancing.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

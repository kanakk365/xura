import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display type — headings, hero, stat figures (font-display).
const displayFont = Archivo({
  variable: "--font-display-src",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body type — paragraphs, UI, labels (font-body).
const bodyFont = Inter({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
});

// Mono — kickers, tags, figure captions. The reports and decks use
// JetBrains Mono for every label that isn't prose.
const monoFont = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xura — Site-Level Energy Infrastructure",
  description:
    "Xura designs and delivers EV charging and battery storage for commercial and fleet facilities — built for today's grid constraints.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper font-body">
        {children}
      </body>
    </html>
  );
}

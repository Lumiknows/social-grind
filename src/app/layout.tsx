import type { Metadata } from "next";
import { Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Social Grind | Social Media Agency",
  description:
    "Helping brands grow with strategy, content, and connection. Strategy. Content. Growth.",
  openGraph: {
    title: "Social Grind | Social Media Agency",
    description:
      "We don't just post, we position. Helping brands grow with strategy, content, and connection.",
    type: "website",
    locale: "en_US",
    siteName: "Social Grind",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full font-montserrat">{children}</body>
    </html>
  );
}

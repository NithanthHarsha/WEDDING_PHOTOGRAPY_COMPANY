import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aura & Light | Luxury Wedding Photographer Kerala & Destination Weddings",
    template: "%s | Aura & Light",
  },
  description: "Aura & Light is a premium luxury wedding photography and cinematography studio capturing candid and editorial love stories in Kerala, Goa, Dubai, Bali, Maldives, and Italy.",
  keywords: [
    "Wedding Photographer Kerala",
    "Luxury Wedding Photography",
    "Best Wedding Photographer",
    "Destination Wedding Photographer",
    "Wedding Cinematography",
    "Wedding Films Kerala",
    "Pre Wedding Shoot Kerala",
    "Candid Wedding Photography",
    "Luxury Wedding Album"
  ],
  authors: [{ name: "Aura & Light Studio" }],
  creator: "Aura & Light Studio",
  publisher: "Aura & Light Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auraandlight.com",
    title: "Aura & Light | Luxury Wedding Photographer & Filmmaker",
    description: "Editorial wedding photography and cinematography with soul. Targeting luxury destination weddings worldwide.",
    siteName: "Aura & Light",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiasedScroll`}
    >
      <body className="bg-luxury-bg text-luxury-dark min-h-full font-sans">
        {children}
      </body>
    </html>
  );
}

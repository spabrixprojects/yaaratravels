import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND } from "@/lib/content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yaaratravels.com"),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    "Yaara Travels",
    "Kerala Travel Agency",
    "Thrissur Tour Operator",
    "Kerala Backwaters Escape",
    "Maldives Honeymoon Packages",
    "Rajasthan Tours",
    "International Holiday Packages",
    "Air Tickets",
    "Visa Assistance Thrissur",
  ],
  authors: [{ name: "YAARA TRAVELS" }],
  creator: "YAARA TRAVELS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yaaratravels.com",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    siteName: BRAND.name,
    images: [
      {
        url: "/logor.png",
        width: 1983,
        height: 793,
        alt: `${BRAND.name} Logo`,
      },
    ],
  },
  icons: {
    icon: "/logor.png",
    apple: "/logor.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${montserrat.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#1f2226] bg-[#fdfbf7]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

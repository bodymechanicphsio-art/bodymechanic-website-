import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageLoader from "@/components/ui/PageLoader";
import { LocalBusinessSchema, ProfessionalSchema, WebSiteSchema } from "@/components/ui/JsonLd";
import { rootMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const interDisplay = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} ${jetbrains.variable} h-full`}>
      <head>
        <WebSiteSchema />
        <LocalBusinessSchema />
        <ProfessionalSchema />
      </head>
      <body className="min-h-full bg-bg-page text-text-1 antialiased font-sans">
        <PageLoader />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

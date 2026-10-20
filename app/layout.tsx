import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar/navbar";
import Footer from "@/components/shared/Footer/Footer";
import FloatingButtons from "@/components/shared/FloatingButtons/FloatingButtons";
import { GoogleTagManager } from "@next/third-parties/google";

const notoSerif = Noto_Serif({subsets:['latin'],variable:'--font-serif'});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable, "font-serif", notoSerif.variable)}
    >
      <GoogleTagManager gtmId="GTM-554VKJDN" />
      <body>
        {/* <ThemeProvider></ThemeProvider> */}
        <main>
<Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        </main>
      </body>
    </html>
  )
}

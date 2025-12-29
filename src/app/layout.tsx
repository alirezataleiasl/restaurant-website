import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Vazirmatn } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

const vazir = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazir'
})

export default function RootLayout({
  children,
  params: { locale }
}:{
  children: React.ReactNode;
  params: { locale: string };
}) {
  const direction = locale === 'fa' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className={`${playfair.variable} ${vazir.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

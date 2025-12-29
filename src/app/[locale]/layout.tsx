import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Playfair_Display, Vazirmatn } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const vazir = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazir" });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body className={`${playfair.variable} ${vazir.variable} antialiased font-sans`}>
        <NextIntlClientProvider   
        messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
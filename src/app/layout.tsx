import type { Metadata } from "next";
import { Comfortaa, Nunito } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "«Дана 2009» бөбекжай-балабақшасы",
  description:
    "«Дана 2009» бөбекжай-балабақшасы: балалар туралы толық ақпарат, тамақтану, қосымша сабақтар, құжаттар және байланыс мәліметтері.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kk"
      className={`${comfortaa.variable} ${nunito.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-bg-soft text-ink">
        {children}
      </body>
    </html>
  );
}

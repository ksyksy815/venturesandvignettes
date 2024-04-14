import Header from "@/components/shared/Header";
import appConfig from "@/constants/appConfig";
import Footer from "@/screens/main/Footer";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Providers from "./(root)/Providers";

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
  keywords: appConfig.keywords,
  openGraph: {
    title: appConfig.title,
    description: appConfig.description,
    type: "website",
    locale: "en_US",
    url: "https://www.venturesandvignettes.com",
  },
  twitter: {
    site: "https://www.venturesandvignettes.com",
    title: appConfig.title,
    description: appConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative flex items-center h-screen flex-col w-screen ${lora.className} bg-vv-bgGray `}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

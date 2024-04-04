import Header from "@/components/shared/Header";
import appConfig from "@/constants/appConfig";
import Logo from "@/screens/main/Logo";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

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
      <body className={`h-full w-screen ${lora.className}`}>
        <Logo />
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "modern-normalize/modern-normalize.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Campers rental service in Ukraine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

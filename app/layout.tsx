import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIP Driver Protection",
  description: "All your car services in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className="bg-[#749BAE]">
      <html lang="en" className="bg-vip-3">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

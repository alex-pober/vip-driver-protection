import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIP Driver Protection",
  description: "You and your car protected by top lawyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />

      <body className={cn(`${inter.className} bg-vip-3`)}>{children}</body>
    </html>
  );
}

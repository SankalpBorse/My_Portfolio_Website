import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `${siteContent.hero.name} | Portfolio`,
  description: siteContent.hero.role
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

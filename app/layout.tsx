import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";

const NewsGoth = localfont({
  src: [
    {
      path: "/fonts/NewsGoth.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Vugitive",
  description: "Vugitive: Elevate Your Style, Elevate Your Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NewsGoth.className} antialiased`}>{children}</body>
    </html>
  );
}

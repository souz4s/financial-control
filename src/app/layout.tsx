import type { Metadata } from "next";
import { Roboto as FontSans, Poppins as FontPoppins } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const fontPoppins = FontPoppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Financial Control",
  description: "TICTO Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontPoppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

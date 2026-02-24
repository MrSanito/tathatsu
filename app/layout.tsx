import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tathastu Dental Clinic and Implant Center | Gotri, Vadodara",
  description: "Advanced Dental Care with Precision & Compassion at Tathastu Dental Clinic and Implant Center in Gotri, Vadodara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-dark bg-light`}>
        {children}
      </body>
    </html>
  );
}

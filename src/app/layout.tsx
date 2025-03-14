import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins  } from "next/font/google";
import "./globals.css";
import Footer from "./layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({  // Add Poppins font
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "900"], // Choose required weights
});

export const metadata: Metadata = {
  title: "Mentogram |  Expert guidance, personalized learning-build your future with us",
  description: " Expert guidance, personalized learning-build your future with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}

import localFont from 'next/font/local';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';



const polySans = localFont({
  src: [
    {
      path: "Fonts/PolySans-Median.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "Fonts/PolySans-Neutral.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-polySans",
})

export const metadata: Metadata = {
  title: "HardSoft",
  description: "Les agents IA vous soulagent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden  ${polySans.variable}`}
      >
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

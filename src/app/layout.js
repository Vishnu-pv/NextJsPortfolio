import {Inter, Merienda, Pacifico} from "next/font/google";
import "./globals.css";

const pacifico = Merienda
({weight:"300", subsets:["latin"],
    variable: "--font-sans"});

export const metadata = {
  title: "PortFolio",
  description: "Designed By Vishnu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pacifico.className}>{children}</body>
    </html>
  );
}

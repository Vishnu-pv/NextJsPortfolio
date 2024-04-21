import {Inter, Merienda, Pacifico, Rajdhani} from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani
({weight:["300","400","500","600","700"], subsets:["latin"],
    variable: "--font-sans"});

export const metadata = {
  title: "Vishnu | Full Stack Dev",
  description: "Designed By Vishnu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>{children}</body>
    </html>
  );
}

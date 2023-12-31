import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Header from "./Components/shear/header/Header";
import Footer from "./Components/shear/footer/Footer";
import ShowCase from "./Components/SmallComponents/ShowCase";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <ShowCase />
        <Footer />
      </body>
    </html>
  );
}

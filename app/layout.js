import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Form from "./urunler/form";

const roboto = Roboto({
  weight: ['400', '500', '700'], // Kullanmak istediğiniz ağırlıkları burada belirtin
  subsets: ['latin'], // Kullanmak istediğiniz dil alt kümelerini burada belirtin
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div className={roboto.className}>
        <Navbar />
        <Form />
        {children}
        </div>
      </body>
    </html>
  );
}

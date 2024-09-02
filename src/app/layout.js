import { Inter } from "next/font/google";
import "./globals.css";
import AddOns from "./components/AddOns";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zadwax",
  description: "Complete your research processes on Zadwax",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-dvh`}>
        <AddOns />
        {children}
      </body>
    </html>
  );
}

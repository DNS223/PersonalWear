import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource-variable/josefin-sans';
import '@fontsource-variable/rubik';
const inter = Inter({ subsets: ["latin"] });
import '@fontsource-variable/inter';
import '@fontsource/permanent-marker';
export const metadata = {
  title: "PersonalWear",
  description: "Generated by create next app",
  icon:"./AstronautSticker.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

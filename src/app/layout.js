import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Foodies - Explore Delicious Recipes",
    template: "%s | Foodies",
  },
  description:
    "Foodies is your ultimate destination for delicious recipes, trending foods, and cooking inspiration. Discover, cook, and enjoy tasty meals!",
  keywords: [
    "Foodies",
    "Recipes",
    "Cooking",
    "Food Blog",
    "Delicious Meals",
    "Food Inspiration",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

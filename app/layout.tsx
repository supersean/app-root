import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-red-400 text-white text-xl h-screen pt-4">
          <div className="m-auto max-w-screen-lg h-full">
            <NavigationBar />
            <div className="flex justify-center items-center h-full ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

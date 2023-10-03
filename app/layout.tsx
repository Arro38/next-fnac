import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fnac Music",
  description: "Fnac Music - Vente de musique en ligne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={
            inter.className + " min-h-screen flex flex-col justify-between"
          }
        >
          <NavBar />
          <main className="flex  flex-col items-center justify-between p-24">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}

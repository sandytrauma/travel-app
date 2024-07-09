import Navbar from "@/components/Navbar";
import "./globals.css"
import type { Metadata } from "next";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
       <Navbar     
       />
       <main className="relative overflow-hidden">
        {children}
        <Footer />
       </main>
      </body>
    </html>
  );
}

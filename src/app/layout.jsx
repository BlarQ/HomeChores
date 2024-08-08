'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Check the initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            background-color: #fcf5f5;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {isMobile ? (
          <>
            <div className="sticky top-0 bg-[#ffffff]">
              <Header />
            </div>
            {children}
          </>
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-red-400">Warning!</h1>
            <p className="text-xl font-serif">Open on Mobile view Only...</p>
          </div>
        )}
      </body>
    </html>
  );
}

import { ThemeProvider } from "@/context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import React from "react";
import { Raleway, Macondo, Poppins } from "next/font/google";
import "./globals.css";
import "../styles/prism.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

const macondo = Macondo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-macondo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NexLab",
  description:
    "Where developers unite to innovate. Empowering collaboration with cutting-edge tools for seamless project creation. Join the future of development!",
  icons: {
    icon: "/assets/nexlab.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       suppressHydrationWarning={true}
       className={`${macondo.variable} ${raleway.variable} ${poppins.variable}`}
>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

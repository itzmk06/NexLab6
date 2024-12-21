"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Theme from "./Theme";
import { useTheme } from "@/context/ThemeProvider";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

export default function Navbar() {
  const { mode } = useTheme();

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-2 shadow-light-300 dark:shadow-none sm:px-8">
      <Link href="/dashboard" className="flex justify-start items-center gap-1 transition-all duration-300 hover:scale-105">
        <Image
          className="w-7 md:w-8 transition-transform duration-300 transform hover:rotate-3"
          src={`${mode === "dark" ? "/assets/nexlab-light.png" : "/assets/nexlab.png"}`}
          width={35}
          height={35}
          alt="NexLab"
          priority
        />
        <p className="md:text-2xl text-2xl   font-semibold text-gray-900 dark:text-white sm:block transition-all duration-300 hover:text-orange-500">
          exLab
        </p>
      </Link>

      <div className="hidden -ml-16 md:flex flex-grow justify-center transition-all duration-300">
        <GlobalSearch />
      </div>

      <div className="flex items-center gap-4">
        <div className="transition-all duration-300 transform hover:scale-105 hover:rotate-6">
          <Theme />
        </div>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-9 w-9 rounded-full border-2 border-transparent hover:border-orange-500 transition-all duration-300 ease-in-out",
              },
              variables: {
                colorPrimary: "#ff7000", 
              },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
}

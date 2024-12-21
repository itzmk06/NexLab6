"use client";

import { sidebarLinks } from "@/constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";  

export default function LeftSideBar() {
  const pathName = usePathname();
  const { userId } = useAuth();

  const filteredLinks = userId
    ? sidebarLinks.map((link) =>
        link.route === "/profile"
          ? { ...link, route: `${link.route}/${userId}` }
          : link
      )
    : sidebarLinks.filter((link) => link.route !== "/profile");

  return (
    <section className="bg-light900_dark200 custom-scrollbar sticky left-0 top-0 flex flex-col justify-between h-screen px-6 pt-20 shadow-xl dark:shadow-none overflow-y-auto max-sm:hidden lg:w-[250px] rounded-xl transition-all duration-300 ease-in-out transform">
      <div className="flex flex-1 flex-col gap-4 ">
        {filteredLinks.map((item) => {
          const isActive =
            (pathName.includes(item.route) && item.route.length > 1) ||
            pathName === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`group text-center flex items-center justify-start gap-3 px-2 py-2 hover:py-4 transition-all transform rounded-xl ease-in-out duration-5 hover:bg-${item.hoverColor} hover:shadow-2xl hover:scale-105 hover:border-2 ${
                isActive
                  ? "bg-blue-600 text-white shadow-2xl   ring-blue-500"
                  : "text-dark300_light900 bg-transparent"
              }`}
              style={{
                borderColor: item.color,
              }}
            >
              <i
                className={`${item.icon} text-xl transition-all ease-in-out duration-300 transform group-hover:scale-105`}
                style={{
                  color: isActive ? "#ffffff" : item.color,
                }}
              />
              <p
                className="-mt-2 text-xl font-semibold max-lg:hidden md:text-base opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                style={{
                  color:  "text-dark200_light300" , 
                }}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

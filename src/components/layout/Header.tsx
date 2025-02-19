"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface HeaderProps {}

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Student care programs",
    href: "/student-care-programs",
    childrens: [
      {
        label: "Centralised Meal Catering Programs",
        href: "/centralised-meal-catering-programs",
      },
      {
        label: "Food discovery workshop",
        href: "/food-discovery-workshop",
      },
      {
        label: "Food and Nutrition Education",
        href: "/food-and-nutrition-education",
      },
    ],
  },
  {
    label: "Subscription Meals",
    href: "/subscription-meals",
    childrens: [
      {
        label: "Subscription Meals",
        href: "/subscription-meals",
      },
      {
        label: "Food and Nutrition Education",
        href: "/food-and-nutrition-education",
      },
    ],
  },
  {
    label: "Corporate events",
    href: "/corporate-events",
    childrens: [
      {
        label: "Culinary Classes",
        href: "/culinary-classes",
      },
      {
        label: "Food and Nutrition Education",
        href: "/food-and-nutrition-education",
      },
    ],
  },
];

const Header = ({}: HeaderProps) => {
  const router = useRouter();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const mobileDropdownRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  let timeout: NodeJS.Timeout;

  const handleUpdateActiveMenu = (key: string) => {
    clearTimeout(timeout);
    setActiveSubMenu(key);
  };

  const handleClearDropdown = () => {
    timeout = setTimeout(() => {
      setActiveSubMenu("");
    }, 200);
  };

  const handleUpdateActiveMobileMenu = (key: string) => {
    setActiveSubMenu(activeSubMenu === key ? "" : key);
  };

  return (
    <header className="container mx-auto py-10">
      <div className="px-10 items-center justify-between hidden lg:flex">
        <Link href={"/"}>
          <Image src={"/svg/logo.svg"} width={50} height={50} alt={"logo"} />
        </Link>
        <div className="flex items-center gap-10 font-stretch-condensed">
          {menuItems.map((item) =>
            (
              item?.childrens as {
                label: string;
                href: string;
              }[]
            )?.length > 0 ? (
              <div
                key={item.href}
                className="text-persimmon relative text-sm 2xl:text-base font-bold uppercase flex gap-2 justify-between items-center"
              >
                <Link
                  onMouseEnter={() => handleUpdateActiveMenu(item.href)}
                  onMouseLeave={handleClearDropdown}
                  href={item.href}
                >
                  {item.label}
                </Link>
                <Image
                  onMouseEnter={() => handleUpdateActiveMenu(item.href)}
                  onMouseLeave={handleClearDropdown}
                  src={"/svg/chevron-down.svg"}
                  width={30}
                  height={30}
                  alt={""}
                />
                <div
                  onMouseEnter={() => handleUpdateActiveMenu(item.href)}
                  onMouseLeave={handleClearDropdown}
                  style={{
                    opacity: activeSubMenu === item?.href ? 1 : 0,
                    padding: activeSubMenu === item?.href ? 20 : 20,
                    height:
                      activeSubMenu === item?.href
                        ? dropdownRefs.current[item.href]?.scrollHeight
                        : "0",
                  }}
                  ref={(el: HTMLDivElement) => {
                    dropdownRefs.current[item.href] = el;
                  }}
                  className="absolute bg-seashell rounded-xl shadow-lg top-8 left-0 w-full flex flex-col gap-5 z-30 overflow-hidden transition-all"
                >
                  {item?.childrens?.map((child) => (
                    <Link
                      className="text-persimmon text-xs 2xl:text-base font-bold uppercase flex gap-2 items-center"
                      href={child.href}
                      key={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                className="text-persimmon text-sm 2xl:text-base font-bold uppercase flex gap-2 items-center"
                href={item.href}
                key={item.href}
              >
                {item.label}
                {(
                  item?.childrens as {
                    label: string;
                    href: string;
                  }[]
                )?.length > 0 && (
                  <Image
                    src={"/svg/chevron-down.svg"}
                    width={30}
                    height={30}
                    alt={""}
                  />
                )}
              </Link>
            )
          )}
        </div>
        <div>
          <Link
            className="text-persimmon font-bold uppercase"
            href={"/contact"}
          >
            Contact Us
            {/* {item.label} */}
          </Link>
        </div>
      </div>
      <div className="items-center justify-between lg:hidden flex">
        <Link href={"/"}>
          <Image src={"/svg/logo.svg"} width={50} height={50} alt={"logo"} />
        </Link>
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={"/images/burger-bar.png"}
              alt="hamburger-menu"
              className="size-10"
              width={30}
              height={30}
            />
          </button>
          <Drawer
            size={"100%"}
            open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
            direction="right"
          >
            <div className="p-10">
              <div className="mb-14">
                <button onClick={() => setIsOpen(!isOpen)}>
                  <Image
                    src={"/images/close.png"}
                    className="size-5"
                    width={30}
                    height={30}
                    alt={"close"}
                  />
                </button>
              </div>
              <div className="flex flex-col gap-5">
                {menuItems.map((item) =>
                  (
                    item?.childrens as {
                      label: string;
                      href: string;
                    }[]
                  )?.length > 0 ? (
                    <div className="flex flex-col gap-5" key={item.href}>
                      <div
                        onClick={() => handleUpdateActiveMobileMenu(item?.href)}
                        className="text-persimmon relative text-sm 2xl:text-base font-bold uppercase flex gap-2 justify-between items-center"
                      >
                        <Link
                          onClick={(e) => {
                            // e.preventDefault();
                            setIsOpen(false);
                            // router.push(item.href);
                          }}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                        <Image
                          className={`transition-all ${
                            activeSubMenu === item?.href ? "rotate-180" : ""
                          }`}
                          src={"/svg/chevron-down.svg"}
                          width={30}
                          height={30}
                          alt={""}
                        />
                      </div>
                      <div
                        style={{
                          padding: activeSubMenu === item?.href ? "20px 0" : 0,
                          height:
                            activeSubMenu === item?.href
                              ? mobileDropdownRefs.current[item.href]
                                  ?.scrollHeight
                              : "0px",
                        }}
                        className="flex pl-2 flex-col gap-5 overflow-hidden transition-all"
                      >
                        {item?.childrens?.map((child) => (
                          <Link
                            onClick={(e) => {
                              // e.preventDefault();
                              setIsOpen(false);
                              // router.push(item.href);
                            }}
                            className="text-persimmon pl-2 text-xs 2xl:text-base font-bold uppercase flex gap-2 items-center"
                            href={child.href}
                            key={child.href}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      onClick={(e) => {
                        // e.preventDefault();
                        setIsOpen(false);
                        // router.push(item.href);
                      }}
                      className="text-persimmon text-sm 2xl:text-base font-bold uppercase flex gap-2 items-center"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                      {(
                        item?.childrens as {
                          label: string;
                          href: string;
                        }[]
                      )?.length > 0 && (
                        <Image
                          src={"/svg/chevron-down.svg"}
                          width={30}
                          height={30}
                          alt={""}
                        />
                      )}
                    </Link>
                  )
                )}
                <Link
                  className="text-persimmon font-bold uppercase text-sm 2xl:text-base"
                  href={"/contact"}
                >
                  Contact Us
                  {/* {item.label} */}
                </Link>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;

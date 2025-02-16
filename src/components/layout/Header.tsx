"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface HeaderProps {}

export const menuItems = [
  { label: "Home", href: "/home" },
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="container mx-auto py-10">
      <div className="px-10 items-center justify-between hidden lg:flex">
        <div>
          <Image src={"/svg/logo.svg"} width={50} height={50} alt={"logo"} />
        </div>
        <div className="flex items-center gap-10 font-stretch-condensed">
          {menuItems.map((item) => (
            <Link
              className="text-persimmon text-sm 2xl:text-base font-bold uppercase flex gap-2 items-center"
              href={item.href}
              key={item.href}
            >
              {item.label}
              {item?.childrens !== undefined && (
                <Image
                  src={"/svg/chevron-down.svg"}
                  width={30}
                  height={30}
                  alt={""}
                />
              )}
            </Link>
          ))}
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
        <div>
          <Image src={"/svg/logo.svg"} width={50} height={50} alt={"logo"} />
        </div>
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
                    <div
                      key={item.href}
                      className="text-persimmon relative text-sm 2xl:text-base font-bold uppercase flex gap-2 items-center"
                    >
                      <Link href={item.href}>
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
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;

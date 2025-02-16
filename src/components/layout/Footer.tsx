"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./Header";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-eggshell">
      <div className="container mx-auto py-20 pb-0">
        <div className="flex flex-col lg:flex-row space-y-20">
          <div className="lg:w-1/2">
            <Image
              src={"/svg/logo-2.svg"}
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-10">
              <div className="flex gap-20 flex-col md:flex-row">
                <div className="flex flex-col gap-5">
                  <p className=" uppercase text-xs text-black font-medium font-dm">
                    QUICKLINKS
                  </p>

                  <ul className="flex flex-col gap-4 font-aeonik">
                    {/* <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>About</li>
                    <li>Contact</li> */}
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link className="capitalize text-lg" href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className=" uppercase text-xs text-black font-medium font-dm">
                    CONTACT
                  </p>

                  <ul className="flex flex-col gap-4 font-aeonik">
                    <li>
                      <Link className="text-lg" href="#">
                        hello@email.com
                      </Link>
                    </li>
                    <li>
                      <Link className="text-lg" href="#">
                        0123456789
                      </Link>
                    </li>
                    <li>
                      <Link className="text-lg" href="#">
                        Address
                      </Link>
                    </li>
                    <li className="flex items-center gap-4">
                      <Image
                        src={"/svg/facebook.svg"}
                        width={30}
                        height={30}
                        alt="facebook"
                      />
                      <Image
                        src={"/svg/instagram.svg"}
                        width={30}
                        height={30}
                        alt="instagram"
                      />
                      <Image
                        src={"/svg/x.svg"}
                        width={30}
                        height={30}
                        alt="x"
                      />
                      <Image
                        src={"/svg/linkedin.svg"}
                        width={30}
                        height={30}
                        alt="linkedin"
                      />
                      <Image
                        src={"/svg/youtube.svg"}
                        width={30}
                        height={30}
                        alt="youtube"
                      />
                      <Image
                        src={"/svg/tiktok.svg"}
                        width={30}
                        height={30}
                        alt="tiktok"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-black py-16 mt-16">
          <div className="flex flex-col md:flex-row gap-10 font-aeonik justify-between">
            <p>@2025 - Copyright</p>
            <div className="flex flex-col md:flex-row gap-5">
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Term of Service</Link>
              <Link href={"/"}>Cookies Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

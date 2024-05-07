"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { AppBar } from "./app-bar";

export default function NavBar() {
  return (
    <>
      <div className="w-full bg-black fixed top-0 left-0 right-0">
        <div className="justify-between px-4 py-1 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

          {/* Left Section (PACIFY and Logo) */}
          <div className="flex items-center">
            <Link href="/">
            <h2 className="text-2xl text-amber-500 font-mono font-bold mr-2 ml-10">PACIFY</h2>
            </Link>
            <Image
              src="/gold.png"
              width={30}
              height={30}
              alt="logo"
              className="focus:border-none active:border-none"
            />
          </div>

          {/* Center Section (Menu Buttons) */}
          <div className="flex flex-grow justify-center items-center">
            <Link href="/" passHref>
              <Button className="gap-x-3" variant="outline">
                <span className="font-semibold">Home</span>
              </Button>
            </Link>

            <Link href="/user-profile" passHref>
              <Button className="ml-4 gap-x-5" variant="outline">
                <span className="font-semibold">Student Profile</span>
              </Button>
            </Link>

            <Link href="/admin-dashboard" passHref>
              <Button className="ml-4 gap-x-5" variant="outline">
                <span className="font-semibold">Institution Profile</span>
              </Button>
            </Link>
          </div>

          {/* Right Section (AppBar) */}
          <div className="ml-4">
            <AppBar />
          </div>

        </div>
      </div>
    </>
  );
}

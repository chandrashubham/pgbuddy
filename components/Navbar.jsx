
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {

  
  const session = await auth();
  return (
    <header className="sticky flex justify-between top-0 items-center border-b-2 bg-background/50 backdrop-blur z-50">
      <div className="logo ml-11">
        <Link href={"/"}>
          <Image width={70} height={100} alt="logo" src="/logo.png"></Image>
        </Link>
      </div>
      <nav>
        <ul>
          <li className="hidden md:flex gap-4 items-center">
            <Link
              href="/"
              className="hover:scale-105 font-semibold hover:text-orange-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:scale-105 font-semibold hover:text-orange-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:scale-105 font-semibold hover:text-orange-400"
            >
              Contact Us
            </Link>
            <Link
              href="/roomList"
              className="hover:scale-105 font-semibold hover:text-orange-400"
            >
              PGs
            </Link>
          </li>
        </ul>
      </nav>
     
      <div className="flex text-sm my-4 btn  items-center mr-4 mb-4 gap-3">
      <div>
  {session && session.user ? (
    <>
      <span className="mr-5" href={`/user/${session.id}`}>
        <span>{session.user.name}</span>
      </span>
    
      <Button className=" bg-orange-400 hover:bg-orange-500 mr-5" onClick={async () => {
        "use server";
        await signOut("google");

      }}>
       Logout
      </Button>
     
      <Link href="/user/register">
          <Button className=" bg-orange-400 hover:bg-orange-500">
            Register
          </Button>
        </Link>
    </>
  ) : (
    <Button className=" bg-orange-400 hover:bg-orange-500"
      onClick={async () => {
        "use server";
        await signIn("google");
        window.location.href = "/";
      }}
    >
      Sign in
    </Button>
  )}
</div>
        
<div className="menu sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Image width={20} height={40} alt="logo" src="/menu.svg" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>PgBuddy</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col">
                <Link href="/" className="hover:scale-105 font-semibold hover:text-orange-400">
                  Home
                </Link>
                <Link href="/about" className="hover:scale-105 font-semibold hover:text-orange-400">
                  About
                </Link>
                <Link href="/contact" className="hover:scale-105 font-semibold hover:text-orange-400">
                  Contact Us
                </Link>
                <Link href="/roomList" className="hover:scale-105 font-semibold hover:text-orange-400">
                  PGs
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

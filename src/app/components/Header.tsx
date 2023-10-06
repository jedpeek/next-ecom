"use client";
import Link from "next/link";
import Container from "./Container";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { FiSearch } from "react-icons/Fi";
import { AiOutlineUser } from "react-icons/Ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/Fi";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="h-20">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Link href="/" className="hover:scale-110 duration-150 hover:underline">
          Logo
        </Link>
        <div className="w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1 focus-within:border-sky-600 duration-200 group">
          <FiSearch className="text-gray-500 group-focus-within:darkText " />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none"
          />
        </div>
        {session && (
          <div>
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </div>
        )}
        {!session && (
          <div
            onClick={() => signIn()}
            className="bg-bgLight text-gray-500 flex items-center justify-center p-1 rounded-full hover:bg-gray-200 border-[1px] hover:border-sky-500 duration-200 cursor-pointer bg-gray-100"
          >
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}
        <div className="bg-black hover:bg-slate-900 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1 border-black hover:border-sky-500 duration:200 relative cursor-pointer">
          <AiOutlineShoppingCart className="text-xl cursor-pointer" />
          <p className="text-sm font-semibold">$0.00</p>
          <span className="bg-white text-sky-800 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
            0
          </span>
        </div>
        {session && (
          <div
            onClick={() => signOut()}
            className="bg-bgLight text-gray-500 flex items-center justify-center p-1 rounded-full hover:bg-gray-200 border-[1px] hover:border-sky-500 duration-200 cursor-pointer bg-gray-100"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
}

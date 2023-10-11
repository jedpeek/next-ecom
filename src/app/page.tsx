"use client";
import Image from "next/image";
import Header from "./components/Header";
import { useSession } from "next-auth/react";
import Banner from "./components/Banner";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      <Banner />
    </main>
  );
}

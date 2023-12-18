"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Restaurant() {
  return (
    <>
      <Head>
        <title>Restaurant Soul's Kitchen</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-12 z-[20]">
          <Link href="/" className="font-semibold cursor-pointer">
            Soul's Kitchen
          </Link>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-[#FACE8D] font-dancing text-[50px] md:text-[80px] leading-none">
              Welcome to 
            </h2>
            <h2 className="font-medium text-[55px] md:text-[80px] lg:text-[130px] leading-none">
              Soul Kitchen
            </h2>
            <p  className="text-[16px]" style={{ color: "#BADA1C", fontSize: "40px" }}>
            A taste of soul, a beat of joy.
            </p>

            <div className="w-full flex-col justify-center max-w-[650px]">
              <NavigationFooter />
            </div>
          </div>
        </section>

        <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </main>
    </>
  );
}

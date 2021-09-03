import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  const menuLinks = ["Home", "Our Services", "Contact Us", "About Us"];
  return (
    <>
      {/* nav bar and header video */}
      <div className="h-screen">
        <div className=" bg-background">
          <header className="container flex items-center justify-between px-4 max-w-container h-nav ">
            <Image
              src="/logo.png"
              alt="Aarambha"
              width="140"
              height="103"
              className="py-1"
            />
            <div className="flex gap-x-5">
              {menuLinks.map((menu) => {
                return (
                  <Link key={menu} href="/">
                    <a className="text-xl uppercase">{menu}</a>
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-x-5">
              <button className="mr-3 uppercase w-60 bg-primary">
                Track Your Order
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="self-center w-9 h-11"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="self-center w-9 h-11"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </header>
        </div>
        <section className="relative flex justify-center h-video ">
          <video autoPlay={true} muted loop>
            <source
              src="/background.mp4"
              type="video/mp4"
              className="w-full "
            />
          </video>
          <div className="absolute top-0 left-0 z-50 w-full h-full bg-opacity-70 bg-background"></div>
        </section>
      </div>
      {/* our services section */}
      <section className="h-screen "></section>
    </>
  );
};

export default Home;

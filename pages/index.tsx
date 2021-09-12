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
        <section className="relative flex justify-center w-full h-video">
          <video autoPlay={true} muted loop>
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-30">
            <form className="flex flex-col max-w-96">
              <div className="flex items-center justify-center w-full text-2xl font-semibold h-14 bg-primary">
                PRICE ESTIMATION
              </div>

              <div className="flex items-center h-24 pl-4 font-semibold text-white border-b border-l border-r border-white gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  className="text-3xl font-semibold placeholder-current bg-transparent outline-none "
                  placeholder="Sender Address"
                ></input>
              </div>
              <div className="flex items-center h-24 pl-4 font-semibold text-white border-b border-l border-r border-white gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  className="text-3xl font-semibold placeholder-current bg-transparent outline-none "
                  placeholder="Receiver Address"
                ></input>
              </div>
              <div className="flex items-center h-24 pl-4 font-semibold text-white border-b border-l border-r border-white gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <input
                  className="text-3xl font-semibold placeholder-current bg-transparent outline-none "
                  placeholder="Phone Number"
                ></input>
              </div>
              <button
                className="w-full h-16 mt-8 text-2xl font-semibold bg-primary"
                type="submit"
              >
                ESTIMATE
              </button>
            </form>
          </div>
        </section>
      </div>
      {/* our services section */}
      <section className="h-screen "></section>
    </>
  );
};

export default Home;

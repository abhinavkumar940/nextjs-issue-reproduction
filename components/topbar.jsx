import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Subscribe from "./Subscribe";

export default function TopBar() {
  const [transparent, setTransparent] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 80) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    });
  }, []);

  const focusFormInput = useCallback(() => {
    document.querySelector("input") && document.querySelector("input").focus();
  }, []);

  return (
    <div
      className={`w-full z-50 fixed h-20 ${
        transparent ? "bg-transparent" : "bg-white"
      } opacity-95 px-6 py-4 flex items-center gap-3 justify-between ease-in-out duration-300 shadow-2xl`}
    >
      <div
        className={`h-10 w-100 drop-shadow-lg flex items-center gap-5 text-sm md:text-2xl font-bold ${
          transparent ? "text-white" : "text-green"
        }`}
      >
        <Link href="/" passHref>
          <React.Fragment>
            <img
              src="/images/512New.jpg"
              alt="Post Purchase Offers logo"
              className="rounded"
              width={48}
              height={48}
              layout="responsive"
            />
            <span className="hidden sm:block">BYG - Post Purchase Upsell</span>
          </React.Fragment>
        </Link>
      </div>
      <div className="flex items-center h-10 ">
        <button
          onClick={focusFormInput}
          className="sm:hidden bg-green text-white rounded-md mr-2 px-4 py-2 h-10 leading-3"
        >
          Get early access
        </button>
        <svg
          onClick={() => setShowMobileMenu(true)}
          xmlns="http://www.w3.org/2000/svg"
          className={`md:hidden h-10 w-10 ${
            transparent ? "text-white" : "text-green"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div
        className={`hidden ${
          transparent ? "text-white" : "text-green"
        } md:block md:ml-10 md:pr-4 md:space-x-8`}
      >
        <button
          onClick={focusFormInput}
          className="bg-green text-white rounded-md mr-2 px-4 py-2 h-10 leading-3"
        >
          Get early access
        </button>
        <span className="mr-2 font-medium  hover:text-green">
          <Link href="/faqs" className="">
            FAQs
          </Link>
        </span>
        <span className="mr-2 font-medium  hover:text-green"></span>
      </div>
      {showMobileMenu && (
        <div className="md:hidden fixed bg-gray-600 h-screen items-center w-full px-4 py-4 top-0 left-0  text-2xl ">
          <div className=" h-10 flex justify-end text-2xl ">
            <svg
              onClick={() => setShowMobileMenu(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col pt-10 text-center">
            <div className="my-2 font-medium   text-white">
              <Link href="/" className="">
                Home
              </Link>
            </div>
            <div className="my-2 font-medium  text-white">
              <Link href="/faqs" className="">
                FAQs
              </Link>
            </div>
            <div className="my-2 font-medium  text-white">
              <Link href="/privacy">Privacy Policy</Link>
            </div>

            <Subscribe />
          </div>
        </div>
      )}
    </div>
  );
}

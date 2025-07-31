"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from 'next/link';

const Navlink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <button
        onClick={() => setOpen(!open)}
        className='inline-flex items-center p-2 justify-center text-secondary-500 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200'
        aria-controls="mobile-menu"
        aria-expanded={open ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      <div
        className={clsx(
          "fixed inset-0 z-40 bg-transparent md:relative md:bg-transparent md:block",
          {
            "hidden": !open,
            "block": open 
          }
        )}
        id="mobile-menu"
      >
        <ul className="flex flex-col h-full items-center justify-center font-[400px] text-2xl px-4 pt-16 md:flex-row md:items-center md:space-x-10 md:p-0 md:h-auto">
          <li>
            <Link
              href="/about"
              className="block py-4 px-3 text-black md:p-0"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/benefits"
              className="block py-4 px-3 text-black md:p-0"
              onClick={() => setOpen(false)}
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/testimonials"
              className="block py-4 px-3 text-black md:p-0"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li className="pt-8 md:pt-0">
            <Link
              href="/login"
              className="py-3 px-8 bg-primary text-white font-bold rounded-full inline-block"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      
    </>
  );
};

export default Navlink;
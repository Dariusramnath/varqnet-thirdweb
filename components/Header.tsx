"use client";
import React from "react";
import Link from "next/link";
import { useMenuToggle } from "../hooks/navigation";
// import { PopupButton } from "@typeform/embed-react";
// import UserDropdown, { UserHamburger } from "./UserDropdown";
// import { Socials } from "./Socials";

export function Header() {
  const { menuOpen, menuCheckboxRef, handleToggle } = useMenuToggle();

  return (
    <nav
      className="group sticky top-0 z-30 border-b border-black bg-white data-[menu-open=true]:bg-black data-[menu-open=true]:text-white sm:data-[menu-open=true]:bg-white sm:data-[menu-open=true]:text-black"
      data-menu-open={menuOpen}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <Link
          href={"/"}
          className={`block px-6 py-4 aria-[current=page]:pointer-events-none sm:pl-12`}
        >
          <div className="flex-direction-row relative z-10 h-full max-w-[130px] sm:max-w-[160px]">
            <h1 className="text-3xl">Vi-Fi</h1>
          </div>
        </Link>
        <div className="flex">
          <div className="flex items-center text-center md:pr-2">
            <React.Fragment>
              <Link
                href="/"
                className="hidden px-4 py-5 aria-[current=page]:pointer-events-none sm:block"
              >
                VARQ
              </Link>
              <Link
                href="/"
                className="hidden px-4 py-5 aria-[current=page]:pointer-events-none sm:block"
              >
                AMM
              </Link>
              <Link
                href="/buyer"
                className="hidden px-4 py-5 text-cobalt aria-[current=page]:pointer-events-none sm:block"
              >
                VEX
              </Link>
            </React.Fragment>
          </div>
          <input
            ref={menuCheckboxRef}
            type="checkbox"
            id="mobileMenu"
            className="peer absolute -left-[100vw] appearance-none opacity-0 sm:hidden"
            onChange={handleToggle}
          />
          <label
            htmlFor="mobileMenu"
            className="hidden select-none px-6 py-4 peer-checked:block sm:hidden peer-checked:sm:hidden"
          >
            Close
          </label>
          <div className="fixed left-0 top-[56px] h-full max-h-0 w-full overflow-hidden bg-black text-white peer-checked:max-h-full sm:hidden">
            <div className="flex gap-6 px-6 pt-12">
            </div>
            <ul className="flex flex-col gap-3 pb-16 pt-14 text-2xl">
              <li className="md:flex-1 md:text-center">
                <Link href="/solutions" className="block px-12 py-2.5">
                  How it Works
                </Link>
              </li>
              <li className="md:flex-1 md:text-center">
                <Link href="vault/request" className="block px-12 py-2.5">
                  Apply to Vault
                </Link>
              </li>
              <li className="md:flex-1 md:text-center">
                <Link
                  href='/'
                  target="_blank"
                  className="block px-12 py-2.5"
                  rel="noreferrer"
                >
                  Membership
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-center gap-6 py-9 text-xs ">
              <Link href="/legal">Legal</Link>
              <Link href="/privacy">Privacy</Link>
              <p>&#169; Americana Technologies Inc 2024</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

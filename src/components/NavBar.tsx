"use client";

import { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import NavBarLink from "./NavBarLink";

import { Transition } from "@headlessui/react";

import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false);

  return (
    <div className="bg-white w-full">
      <nav className="flex items-center justify-end md:justify-center px-6 md:px-12 h-16 w-full max-w-screen-2xl mx-auto">
        <div className="hidden md:flex ml-8 lg:ml-14 gap-10">
          <NavBarLink href="#wedding">Ślub</NavBarLink>
          <NavBarLink href="#reception">Wesele</NavBarLink>
          <NavBarLink href="#contact">Kontakt</NavBarLink>
          {/* <NavBarLink href="/visitors">Dla przyjezdnych</NavBarLink> */}
        </div>
        <div className="flex md:hidden ml-8 lg:ml-14 gap-10">
          <button
            onClick={() => setMobileNavBarOpen(true)}
            aria-label="Drawer navigation"
          >
            <IoMenu size={48} className="text-blue" />
          </button>
        </div>
        <Transition
          show={mobileNavBarOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="md:hidden bg-white w-full absolute z-1 top-0 right-0 shadow-2xl"
        >
          <MobileNavBar onClick={() => setMobileNavBarOpen(false)} />
        </Transition>
      </nav>
    </div>
  );
}

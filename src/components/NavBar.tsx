"use client";

import NavBarLink from "./NavBarLink";

import { IoMenu } from "react-icons/io5";

export default function NavBar() {
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
            onClick={() => console.log("openMenu")}
            aria-label="Drawer navigation"
          >
            <IoMenu size={48} className="text-blue" />
          </button>
        </div>
      </nav>
    </div>
  );
}

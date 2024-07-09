"use client";
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

import { useState } from "react";

import Login from "./Login";



const Navbar: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Logo.png" alt="logo" width={268} height={168} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}
            className="refular-16 text-gray-30 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>


      {/* Menu items for small screens */}
      {showMenu && (

        <div className="lg:hidden fixed  top-28 inset-y-0 right-0 z-50 bg-blue-50 w-64 flex flex-col items-center justify-center">

          <ul className="bg-blue-50 p-4 lg:hidden top-0 absolute  right-0 w-full">
            <div className="lg:flexCenter">
              {isModalOpen && <Login isOpen={true} onClose={handleCloseModal} />}
            </div>
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key}>
                <li className="mt-6 text-grey-50 cursor-pointer hover:font-bold">{link.label}</li>
              </Link>
            ))}

          </ul>

        </div>
      )}


      <div className="lg:flexCenter hidden">
        {isModalOpen && <Login isOpen={true} onClose={handleCloseModal} />}
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

    </nav>
  )
}

export default Navbar
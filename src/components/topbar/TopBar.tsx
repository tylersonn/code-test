"use client";

import { useState } from "react";

const links = [
  {
    text: "Accueil",
    href: "/",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "À propos",
    href: "/#about",
  },
];

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-6 border-b border-black bg-[#7edb43]">
      <div className="flex items-center flex-shrink-0 mr-6 grow justify-center sm:grow-0">
        <span className="font-bold text-xl">Charennes</span>
      </div>
      {/* Navbar links when on a large screen => always visible */}
      <div className="w-full hidden flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">{links.map(({ text, href }, index) => NormalNavLink(text, href, index))}</div>
      </div>
      {/* Dropdown button for smaller screens */}
      <div className="block sm:hidden">
        <button
          className={
            "flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 hover:bg-orange-400" +
            (isMenuOpen ? " bg-orange-400" : "")
          }
          onClick={toggleMenu}
        >
          <DropdownIcon />
        </button>
      </div>
      {/* Navbar links when on a small screen => dropdown */}
      {isMenuOpen && (
        <div className="w-min sm:hidden absolute top-16 right-16 rounded border border-gray-800 bg-gray-100 text-gray-900 z-50">
          <div className="text-sm text-center">{links.map(({ text, href }, index) => DropdownNavLink(text, href, index))}</div>
        </div>
      )}
    </nav>
  );
}

function NormalNavLink(text: string, href: string, key: number) {
  return (
    <a href={href} className="inline-block mr-4 text-gray-900" key={key}>
      {text}
    </a>
  );
}

function DropdownNavLink(text: string, href: string, key: number) {
  return (
    <a
      href={href}
      className="block m-2 p-2 hover:bg-orange-400 border border-gray-800 rounded bg-gray-100 text-gray-900 whitespace-nowrap"
      key={key}
    >
      {text}
    </a>
  );
}

function DropdownIcon() {
  return (
    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path d="M0 0h20v20H0z" fill="none" />
      <path d="M0 5h20v2H0z" />
      <path d="M0 13h20v2H0z" />
    </svg>
  );
}

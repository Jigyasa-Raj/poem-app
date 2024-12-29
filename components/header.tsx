"use client";

import MenuButton from "./MenuButton"; // Ensure you have the correct import for MenuButton
import Link from "next/link";

export default function Header() {
  const toggleMenu = () => {
    // Toggle the `menu-open` class on the body element
    document.body.classList.toggle("menu-open");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-medium">
            jigyasa raj
          </Link>
          <span className="text-gray-600">poems|stories</span>
        </div>

        {/* Pass the `toggleMenu` function to MenuButton */}
        <MenuButton toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

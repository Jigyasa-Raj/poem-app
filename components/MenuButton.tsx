"use client"; // Ensure this is a client-side component

import { useState } from "react";
import { Menu } from 'lucide-react'; // Import menu icon from lucide-react
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/types"; // Import photos from types.ts
import { photoContentss } from "@/lib/content"; // Import titles from content.ts

// Define the type for the MenuButton props
interface MenuButtonProps {
  toggleMenu: () => void; // This is the function prop that will be passed from parent
  className?: string; // Allow className as an optional prop
}

const MenuButton = ({ toggleMenu, className }: MenuButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track the menu's open/close state

  // Function to toggle the menu visibility
  const toggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the local state for the menu
    toggleMenu(); // Call the passed function to toggle the global menu state
  };

  return (
    <>
      {/* Menu Button - Toggle the menu when clicked */}
      <button
        onClick={toggleMenuState} // Calls the function to toggle the menu
        className={`p-2 hover:bg-gray-100 rounded-md text-black z-50 ${className}`}
      >
        <Menu className="w-6 h-6" /> {/* Render the menu icon */}
      </button>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay Background - Clicking the overlay will also close the menu */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
            onClick={toggleMenuState} // Close the menu when clicking on the overlay
          ></div>

          {/* Sliding Menu */}
          <div
            className="fixed top-0 right-0 w-full sm:w-1/2 h-full bg-white shadow-lg z-40 overflow-y-auto transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)", // Slide the menu in/out
            }}
          >
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6">Menu</h1>

              {/* Dynamic Menu Items */}
              <ul className="space-y-4">
                {/* Sample dynamic list rendering */}
                {photos.map((photo) => {
                  const content = photoContentss.find(
                    (item) => item.id === photo.id
                  ); // Match photo with content
                  return (
                    <li
                      key={photo.id}
                      className="flex items-center gap-4 p-4 border-b border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full" // Ensures images are uniform and cover the area without distortion
                        />
                      </div>

                      {/* Title and Link */}
                      <Link href={`/photo/${photo.slug}`}>
                        <span className="text-lg font-medium">
                          {content?.title || "No Title"}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MenuButton;

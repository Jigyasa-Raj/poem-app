"use client";
import Image from "next/image";
import MenuButton from "@/components/MenuButton";
import HomeIcon from "@/components/home";
import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin } from 'lucide-react';
import { photos } from "@/lib/types";
import { notFound } from "next/navigation";
import { use } from "react";

// Function to render content by splitting paragraphs
const renderContent = (content: string) => {
  return content.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-4 whitespace-pre-wrap">{paragraph}</p>
  ));
};

// Define the type for params
type Params = {
  slug: string;
};

// This is a server-side Next.js function to handle params (assuming it's async)
export default function PhotoPage({ params }: { params: Promise<Params> }) {
  const unwrappedParams = use(params); // Unwrap the params Promise

  const photo = photos.find((p) => p.slug === unwrappedParams.slug);
  if (!photo) {
    notFound();
  }

  // Find the next photo
  const currentIndex = photos.findIndex(p => p.slug === unwrappedParams.slug);
  const nextPhoto = photos[currentIndex + 1];

  const isEvenId = photo.id % 2 === 0;
  const isFirstPhoto = photo.id === 1;

  // Toggle menu state function
  const toggleMenu = () => {
    // Add your toggle menu logic here, e.g., setting some state to show/hide the menu
    console.log("Menu toggled");
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Pass toggleMenu to MenuButton */}
      <MenuButton toggleMenu={toggleMenu} />
      <HomeIcon />

      {/* Even ID: Centered Image */}
      {isEvenId ? (
        <div className="flex items-center justify-center w-full min-h-screen bg-[#FAF9F7]">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <>
          {/* Odd ID: Left Fixed Image */}
          <div className="hidden md:block md:w-1/2 fixed top-0 left-0 h-screen">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={960}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute bottom-12 left-12">
              <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wide">
                {photo.title && photo.title.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          {/* Content for Odd ID */}
          <div className="w-full md:w-1/2 min-h-screen md:ml-[50%] bg-[#FAF9F7] px-6 md:px-12 py-8">
            <div className="md:hidden mb-8">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                priority
              />
            </div>

            <article className="space-y-4">
              {photo.date && <time className="text-sm text-gray-600">{photo.date}</time>}
              {photo.title && <h2 className="text-4xl font-serif tracking-wide">{photo.title}</h2>}
              {photo.content && (
                <div className="text-gray-700 leading-relaxed">
                  {renderContent(photo.content)}
                </div>
              )}
            </article>
          </div>
        </>
      )}

      {/* "Next" Button - For Odd ID after Content with a larger gap from the bottom */}
      {!isEvenId && nextPhoto && (
        <div className="w-full flex justify-end mt-8 pb-16 px-6 md:px-12">
          <Link 
            href={`/photo/${nextPhoto.slug}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Social Links for the first photo - Fixed at the bottom-right */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4">
        {isFirstPhoto && (
          <div className="flex gap-4">
            <a href="https://instagram.com/j1gyasa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jigyasa-raj-033063235/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Jigyasa-Raj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        )}
      </div>

      {/* "Next" Button for Even IDs - Fixed Bottom Right */}
      {isEvenId && nextPhoto && (
        <div className="fixed bottom-6 right-6">
          <Link 
            href={`/photo/${nextPhoto.slug}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

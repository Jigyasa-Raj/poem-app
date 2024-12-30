"use client";
import Image from "next/image";
import MenuButton from "@/components/MenuButton";
import Home from "@/components/home";
import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin } from 'lucide-react';
import { photos } from "@/lib/types";
import { notFound } from "next/navigation";
import { use } from "react";

const renderContent = (content: string) => {
  return content.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-4 whitespace-pre-wrap">{paragraph}</p>
  ));
};

type Params = {
  slug: string;
};

export default function PhotoPage({ params }: { params: Promise<Params> }) {
  const unwrappedParams = use(params);

  const photo = photos.find((p) => p.slug === unwrappedParams.slug);
  if (!photo) {
    notFound();
  }

  const currentIndex = photos.findIndex(p => p.slug === unwrappedParams.slug);
  const nextPhoto = photos[currentIndex + 1];

  const isEvenId = photo.id % 2 === 0;
  const isFirstPhoto = photo.id === 1;

  const toggleMenu = () => {
    console.log("Menu toggled");
  };

  return (
    <div className="flex min-h-screen flex-col relative">
      {isEvenId ? (
        <div className="flex items-center justify-center w-full min-h-screen bg-[#FAF9F7] relative">
          {/* Container for both Home and MenuButton */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-4 z-50">
            <Home />
            <MenuButton toggleMenu={toggleMenu} />
          </div>

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

          <div className="w-full md:w-1/2 min-h-screen md:ml-[50%] bg-[#FAF9F7] px-6 md:px-12 py-8">
            {/* Ensure Home and MenuButton are aligned properly */}
            <div className="flex justify-end items-center gap-4 mb-4">
              <Home />
              <MenuButton toggleMenu={toggleMenu} />
            </div>

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

      {isFirstPhoto && (
        <div className="md:fixed md:bottom-6 md:right-6 flex flex-col items-center gap-4 mt-8 mb-16 md:mb-0">
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
        </div>
      )}

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

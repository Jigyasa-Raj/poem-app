import Image from "next/image"
import Link from "next/link"
import { photos } from "../lib/types"

export default function ImageGrid() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
        {photos.map((photo, index) => (
          <Link
            key={photo.id}
            href={`/photo/${photo.slug}`}
            className={`relative group block ${photo.className} ${index % 2 === 0 ? '' : 'mt-[calc(50%)]'}`}
          >
            <div className="relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto"
                priority={photo.id <= 5}
              />
              {/* Hover overlay with bottom-left aligned text */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-lg font-medium">
                    {photo.title}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

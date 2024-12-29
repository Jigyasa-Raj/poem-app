import { photoContentss, PhotoContent } from './content';

export interface Photo {
    id: number;
    slug: string;
    src: string;
    alt: string;
    className: string;
    width: number;
    height: number;
}

const staticPhotos: Photo[] = [
    {
        id: 1,
        slug: "bicycle-silhouette",
        src: "/images/1.png",
        alt: "Bicycle silhouette",
        className: "lg:col-span-1 lg:row-span-1",
        width: 400,
        height: 300,
    },
    {
        id: 2,
        slug: "geometric-patterns",
        src: "/images/2.png",
        alt: "Geometric patterns with yellow line",
        className: "lg:col-span-1 lg:row-span-2 lg:mt-16",
        width: 400,
        height: 600,
    },
    {
        id: 3,
        slug: "shadow-hand-yellow-leaf",
        src: "/images/3.png",
        alt: "Shadow hand with yellow leaf",
        className: "lg:col-span-1 lg:row-span-1 lg:mt-8",
        width: 400,
        height: 400,
    },
    {
        id: 4,
        slug: "minimal-scene-blue-car",
        src: "/images/4.png",
        alt: "Minimal scene with blue car",
        className: "lg:col-span-1 lg:row-span-1 lg:mt-24",
        width: 300,
        height: 300,
    },
    {
        id: 5,
        slug: "architecture-detail",
        src: "/images/5.png",
        alt: "Architecture detail",
        className: "lg:col-span-1 lg:row-span-1 lg:mt-12",
        width: 400,
        height: 500,
    },
    {
        id: 6,
        slug: "ocean-waves",
        src: "/images/6.png",
        alt: "Ocean waves",
        className: "lg:col-span-1 lg:row-span-1",
        width: 400,
        height: 300,
    },
    {
        id: 7,
        slug: "green-staircase",
        src: "/images/7.png",
        alt: "Green staircase",
        className: "lg:col-span-2 lg:row-span-2 lg:mt-12",
        width: 800,
        height: 600,
    },
    {
        id: 8,
        slug: "geometric-pattern",
        src: "/images/8.png",
        alt: "Geometric pattern",
        className: "lg:col-span-1 lg:row-span-1 lg:mt-24",
        width: 400,
        height: 300,
    },
    {
        id: 9,
        slug: "shadow-patterns",
        src: "/images/9.png",
        alt: "Shadow patterns",
        className: "lg:col-span-2 lg:row-span-1 lg:mt-12",
        width: 800,
        height: 400,
    },
    {
        id: 10,
        slug: "white-architecture",
        src: "/images/10.png",
        alt: "White architecture",
        className: "lg:col-span-1 lg:row-span-2",
        width: 400,
        height: 600,
    },
    {
        id: 11,
        slug: "geometric-pattern-2",
        src: "/images/11.png",
        alt: "Geometric pattern",
        className: "lg:col-span-1 lg:row-span-1 lg:mt-24",
        width: 400,
        height: 300,
    },
    {
        id: 12,
        slug: "shadow-patterns-2",
        src: "/images/12.png",
        alt: "Shadow patterns",
        className: "lg:col-span-2 lg:row-span-1",
        width: 800,
        height: 400,
    },
    {
        id: 13,
        slug: "white-architecture-2",
        src: "/images/13.png",
        alt: "White architecture",
        className: "lg:col-span-1 lg:row-span-2 lg:mt-12",
        width: 400,
        height: 600,
    },
    {
        id: 14,
        slug: "minimal-architecture",
        src: "/images/14.png",
        alt: "Minimal architecture",
        className: "lg:col-span-2 lg:row-span-1 lg:mt-24",
        width: 800,
        height: 400,
    },
    {
        id: 15,
        slug: "abstract-shadow",
        src: "/images/15.png",
        alt: "Abstract shadow",
        className: "lg:col-span-1 lg:row-span-1 lg:mt-12",
        width: 400,
        height: 300,
    }
];

export const photos: (Photo & Partial<PhotoContent>)[] = staticPhotos.map((photo) => {
    const content = photoContentss.find((content) => content.id === photo.id);
    return {
        ...photo,
        ...(content || {}),
    };
});


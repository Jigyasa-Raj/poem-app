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
        slug: "hi-i-am-jigyasa",  // Changed slug to title
        src: "/images/1.png",
        alt: "hi, i am jigyasa :)",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-1",
        width: 400,
        height: 300,
    },
    {
        id: 2,
        slug: "sea-seakness",  // Changed slug to title
        src: "/images/2.png",
        alt: "sea seakness",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-2 lg:mt-16",
        width: 400,
        height: 600,
    },
    {
        id: 3,
        slug: "postal-addresses",  // Changed slug to title
        src: "/images/3.png",
        alt: "Postal Addresses",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-1 lg:mt-8",
        width: 400,
        height: 400,
    },
    {
        id: 4,
        slug: "of-all-thats-gone",  // Changed slug to title
        src: "/images/4.png",
        alt: "of all that's gone",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-1 lg:mt-24",
        width: 300,
        height: 300,
    },
    {
        id: 5,
        slug: "are-you-afraid-of-answers-too",  // Changed slug to title
        src: "/images/5.png",
        alt: "are you afraid of answers too",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-1 lg:mt-12",
        width: 400,
        height: 500,
    },
    {
        id: 6,
        slug: "conjunctions",  // Changed slug to title
        src: "/images/6.png",
        alt: "conjunctions",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-1",
        width: 400,
        height: 300,
    },
    {
        id: 7,
        slug: "on-my-writers-block",  // Changed slug to title
        src: "/images/7.png",
        alt: "on my writer's block",  // Changed alt to title
        className: "lg:col-span-2 lg:row-span-2 lg:mt-12",
        width: 800,
        height: 600,
    },
    {
        id: 8,
        slug: "flowers",  // Changed slug to title
        src: "/images/8.png",
        alt: "flowers",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-1 lg:mt-24",
        width: 400,
        height: 300,
    },
    {
        id: 9,
        slug: "an-art-was-left-behind",  // Changed slug to title
        src: "/images/9.png",
        alt: "an art was left behind",  // Changed alt to title
        className: "lg:col-span-2 lg:row-span-1 lg:mt-12",
        width: 800,
        height: 400,
    },
    {
        id: 10,
        slug: "bheed",  // Changed slug to title
        src: "/images/10.png",
        alt: "bheed",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-2",
        width: 400,
        height: 600,
    },
    {
        id: 11,
        slug: "my-mother-hates-my-poetry",  // Changed slug to title
        src: "/images/11.png",
        alt: "My mother hates my poetry",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-1 lg:mt-24",
        width: 400,
        height: 300,
    },
    {
        id: 12,
        slug: "letters",  // Changed slug to title
        src: "/images/12.png",
        alt: "letters",  // Changed alt to title
        className: "lg:col-span-2 lg:row-span-1",
        width: 800,
        height: 400,
    },
    {
        id: 13,
        slug: "before-you-judge-my-poems",  // Changed slug to title
        src: "/images/13.png",
        alt: "Before you judge my poems",  // Changed alt to title
        className: "lg:col-span-1 lg:row-span-2 lg:mt-12",
        width: 400,
        height: 600,
    },
    {
        id: 14,
        slug: "text",  // Changed slug to title
        src: "/images/14.png",
        alt: "text",  // Changed alt to title
        className: "lg:col-span-2 lg:row-span-1 lg:mt-24",
        width: 800,
        height: 400,
    },
    {
        id: 15,
        slug: "things-rain-could-touch-and-couldnt",  // Changed slug to title
        src: "/images/15.png",
        alt: "things rain could touch and couldn't",  // Changed alt to title
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

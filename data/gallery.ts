export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const GALLERY: GalleryImage[] = [
  { id: "1", src: "https://picsum.photos/seed/ephrem-1/600/800", alt: "Photo 1", width: 600, height: 800 },
  { id: "2", src: "https://picsum.photos/seed/ephrem-2/600/600", alt: "Photo 2", width: 600, height: 600 },
  { id: "3", src: "https://picsum.photos/seed/ephrem-3/600/900", alt: "Photo 3", width: 600, height: 900 },
  { id: "4", src: "https://picsum.photos/seed/ephrem-4/600/500", alt: "Photo 4", width: 600, height: 500 },
  { id: "5", src: "https://picsum.photos/seed/ephrem-5/600/700", alt: "Photo 5", width: 600, height: 700 },
  { id: "6", src: "https://picsum.photos/seed/ephrem-6/600/600", alt: "Photo 6", width: 600, height: 600 },
  { id: "7", src: "https://picsum.photos/seed/ephrem-7/600/850", alt: "Photo 7", width: 600, height: 850 },
  { id: "8", src: "https://picsum.photos/seed/ephrem-8/600/450", alt: "Photo 8", width: 600, height: 450 },
];

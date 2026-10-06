import galleryImg from "../assets/images/gallery/gallery.svg?url";

export interface GalleryItem {
  src: string;
  alt: string;
}

export const gallery: GalleryItem[] = [
  { src: galleryImg, alt: "Mesa de boda elegante con decoración floral" },
  { src: galleryImg, alt: "Plato principal servido en catering de lujo" },
  { src: galleryImg, alt: "Decoración temática para fiesta de 15 años" },
  { src: galleryImg, alt: "Barra de cócteles con iluminación cálida" },
  { src: galleryImg, alt: "Salón listo para evento corporativo" },
  { src: galleryImg, alt: "Detalles de bocaditos dulces en recepción" },
];

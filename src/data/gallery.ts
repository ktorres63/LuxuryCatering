import arregloRomatico2 from "../assets/images/gallery/arreglo romatico2.jpeg?url";
import cumpleJOven2 from "../assets/images/gallery/cumpleJOven2.jpeg?url";
import cumpleJOven3 from "../assets/images/gallery/CumpleJOven3.jpeg?url";
import cumpleJoven4 from "../assets/images/gallery/cumplejoven4.jpeg?url";
import cumpleJoven5 from "../assets/images/gallery/cumpleJoven5.jpeg?url";
import cumpleMariachis from "../assets/images/gallery/cumpleMariachis.jpeg?url";
import decoracion from "../assets/images/gallery/decoracion.jpeg?url";
import regalo1 from "../assets/images/gallery/regalo1.jpeg?url";
import torta1 from "../assets/images/gallery/torta1.jpeg?url";

export interface GalleryItem {
  src: string;
  alt: string;
}

export const gallery: GalleryItem[] = [
  { src: arregloRomatico2, alt: "Arreglo romántico con velas y flores" },
  { src: cumpleJOven2, alt: "Decoración de fiesta de quinceañera" },
  { src: cumpleJOven3, alt: "Mesa de celebración de quinceañera" },
  { src: cumpleJoven4, alt: "Ambiente de fiesta de jóvenes con iluminación" },
  { src: cumpleJoven5, alt: "Pista de baile en fiesta de quinceañera" },
  { src: cumpleMariachis, alt: "Presentación con mariachis en una celebración" },
  { src: decoracion, alt: "Decoración temática de evento" },
  { src: regalo1, alt: "Mesa de regalos elegante" },
  { src: torta1, alt: "Torta de celebración personalizada" },
];
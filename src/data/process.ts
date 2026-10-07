export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  cta: string;
}

export const process: ProcessStep[] = [
  { step: 1, title: "Cuéntanos tu idea", description: "Conversamos en persona o de forma virtual sobre tu fecha tentativa, inspiración, cantidad de invitados y expectativas deseadas.", cta: "PASO INICIAL" },
  { step: 2, title: "Diseñamos la propuesta", description: "Elaboramos el dossier integral a medida: planos escenográficos, paleta de colores, propuesta de catering y maridajes exclusivos.", cta: "CURADURÍA A MEDIDA" },
  { step: 3, title: "Coordinamos los detalles", description: "Despliegue logístico, degustación de menú previa con los novios o anfitriones, cronograma técnico y alineación de proveedores.", cta: "DEGUSTACIÓN & ENSAYOS" },
  { step: 4, title: "Disfruta tu celebración", description: "Vive el evento con absoluta serenidad. Nuestro equipo de etiqueta negra se encarga de cada tiempo, brindis y emoción.", cta: "TRANQUILIDAD ABSOLUTA" },
];

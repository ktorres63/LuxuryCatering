export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  { step: 1, title: "Contacto", description: "Conversemos sobre la visión de tu evento, sin compromiso." },
  { step: 2, title: "Planificación", description: "Diseñamos juntos cada etapa: menú, ambientación y logística." },
  { step: 3, title: "Diseño y detalles", description: "Cada elemento se cuida: decoración, carta, mobiliario y más." },
  { step: 4, title: "Tu gran día", description: "Disfruta. Nuestro equipo cuida que todo fluya a la perfección." },
];

import eventsImg from "../assets/images/events/events.svg?url";

export interface EventType {
  title: string;
  description: string;
  image: string;
}

export const events: EventType[] = [
  { title: "Bodas y matrimonios", description: "Ceremonias y recepciones inolvidables.", image: eventsImg },
  { title: "Fiestas de 15 años", description: "Cada detalle pensado para la quinceañera.", image: eventsImg },
  { title: "Fiestas de 50 años y jubilaciones", description: "Homenajes a la altura de cada historia.", image: eventsImg },
  { title: "Fiestas infantiles", description: "El sueño hecho realidad de los más pequeños.", image: eventsImg },
  { title: "Despedidas de soltero/a", description: "Festejos vibrantes antes del gran paso.", image: eventsImg },
  { title: "Eventos corporativos", description: "El escenario ideal para grandes logros y equipos.", image: eventsImg },
];

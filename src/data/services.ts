import servicesImg from "../assets/images/services/services.svg?url";

export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  { title: "Bodas y Matrimonios", description: "Planificación y ejecución integral para el día más especial.", image: servicesImg },
  { title: "Fiestas de 15 años", description: "Quinceañeras memorables con ambientación personalizada.", image: servicesImg },
  { title: "Fiestas de 50 años y jubilaciones", description: "Celebraciones elegantes para grandes hitos de vida.", image: servicesImg },
  { title: "Fiestas infantiles", description: "Eventos divertidos y cuidados al detalle para los más pequeños.", image: servicesImg },
  { title: "Despedidas de soltero/a y festejos", description: "Antes de celebrar el gran día, el festejo previo también merece magia.", image: servicesImg },
  { title: "Catering integral", description: "Menús completos, desde la entrada hasta el postre.", image: servicesImg },
  { title: "Bocaditos dulces y salados", description: "Propuestas gourmet para cada ocasión y paladar.", image: servicesImg },
  { title: "Cócteles y bebidas", description: "Bar mixto y servicio de coctelería profesional.", image: servicesImg },
  { title: "Decoración temática", description: "Ambientes únicos que convierten cada espacio en una experiencia.", image: servicesImg },
  { title: "Atención y servicio durante eventos", description: "Personal capacitado para un trato impecable en cada momento.", image: servicesImg },
  { title: "Alquiler de mobiliario e implementos", description: "Sillas, mesas, cristalería y todo lo necesario.", image: servicesImg },
];

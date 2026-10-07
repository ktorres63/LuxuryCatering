import boda1Img from "../assets/images/services/boda1.webp?url";
import cumple15Img from "../assets/images/services/15años.jpg?url";
import cumple50Img from "../assets/images/services/cumple50.jpeg?url";
import babyShower from "../assets/images/services/babySHowe.jpeg?url";
import fiestaInfantil from "../assets/images/services/cumpleañosniño.jpeg?url";
import fiestaJoven from "../assets/images/services/cumpleJOven.jpeg?url";
import catering from "../assets/images/services/bocadito1.jpeg?url";
import bocaditos from "../assets/images/services/bocadito2.jpeg?url";
import cocteles from "../assets/images/services/cocteles.jpeg?url";
import decoracionTematica from "../assets/images/services/ArregloROmantico.jpeg?url";
import mobiliario from "../assets/images/services/arregloMesa.jpeg?url";


import servicesImg from "../assets/images/services/services.svg?url";

export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  { title: "Bodas y Matrimonios", description: "Creamos el escenario perfecto para tu historia de amor, cuidando cada detalle con elegancia, romanticismo y una atmósfera conmovedora.", image: boda1Img },
  { title: "Baby Shower", description: "Celebramos la llegada de tu bebé con una ambientación dulce, menú especialmente diseñado y detalles pensados para las futuras mamás.", image: babyShower },
  { title: "Fiestas de 15 años", description: "Celebraciones memorables con ambientación personalizada, menú especial y una atmósfera pensada a la medida de la quinceañera.", image: cumple15Img },
  { title: "Fiestas de 50 años y jubilaciones", description: "Homenajes elegantes para grandes hitos de vida, con menú de curso y detalles que emocionan a cada invitado.", image: cumple50Img },
  { title: "Fiestas infantiles", description: "Eventos divertidos y cuidados al detalle para los más pequeños: decoración, menú y entretenimiento a la altura.", image: fiestaInfantil },
  { title: "Despedidas de soltero/a y festejos", description: "Antes de celebrar el gran día, el festejo previo también merece magia: coctelería, música y buena compañía.", image: fiestaJoven },
  { title: "Catering integral", description: "Menús completos, desde la entrada hasta el postre, con ingredientes seleccionados y presentación de restaurante.", image: catering },
  { title: "Bocaditos dulces y salados", description: "Propuestas gourmet para cada ocasión y paladar, desde canapés hasta el postre más especial.", image: bocaditos },  
  { title: "Cócteles y bebidas", description: "Bar mixto y servicio de coctelería profesional, con recetas de autor y una carta a la medida del evento.", image: cocteles },
  { title: "Decoración temática", description: "Diseñamos espacios que convierten cada lugar en una experiencia: flores, telas, iluminación y detalles a la medida.", image: decoracionTematica },
  { title: "Alquiler de mobiliario e implementos", description: "Sillas, mesas, cristalería y todo lo necesario para dar el acabado final que tu evento merece.", image: mobiliario },
];
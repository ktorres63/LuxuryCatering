export const site = {
  name: "Luxury Catering y Eventos",
  slogan: "Magia en cada detalle.",
  phone: "+00 000 000 0000", // REEMPLAZAR con el número real
  whatsapp: "+00000000000", // REEMPLAZAR con el WhatsApp real (solo dígitos)
  email: "hola@luxurycatering.com", // REEMPLAZAR
  instagram: "@luxurycatering", // REEMPLAZAR
  location: "Arequipa, Perú", // REEMPLAZAR
};

export const navItems = [
  { label: "INICIO", href: "#inicio" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "EVENTOS", href: "#eventos" },
  { label: "GALERÍA", href: "#galeria" },
  { label: "NOSOTROS", href: "#nosotros" },
  { label: "CONTACTO", href: "#contacto" },
];

export function whatsappUrl(message: string): string {
  const number = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

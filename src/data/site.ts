export const site = {
  name: "Luxury Catering y Eventos",
  slogan: "Magia en cada detalle.",
  phone1: "+00 000 000 0000", // REEMPLAZAR con el número real
  whatsapp1: "+51904771457", // REEMPLAZAR con el WhatsApp real (solo dígitos)
  whatsapp2: "+51920177955 ", // REEMPLAZAR con el WhatsApp real (solo dígitos)
  email: "hola@luxurycatering.com", // REEMPLAZAR
  instagram: "@luxurycatering", // REEMPLAZAR
  location: "Arequipa, Perú", // REEMPLAZAR
};

export interface Vendedor {
  id: string;
  nombre: string;
  whatsapp: string; // solo dígitos, con código de país
}

export const vendedores: Vendedor[] = [
  { id: "vendedor-1", nombre: "Vendedor 1", whatsapp: "+51904771457" }, // REEMPLAZAR
  { id: "vendedor-2", nombre: "Vendedor 2", whatsapp: "+51920177955" }, // REEMPLAZAR
];

export const navItems = [
  { label: "INICIO", href: "#inicio" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "EVENTOS", href: "#eventos" },
  { label: "GALERÍA", href: "#galeria" },
  { label: "NOSOTROS", href: "#nosotros" },
  { label: "CONTACTO", href: "#contacto" },
];

export function whatsappUrl(message: string): string {
  const number = site.whatsapp1.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

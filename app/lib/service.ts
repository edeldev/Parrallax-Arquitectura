import SERVICE1 from "@/public/images/service1.webp";
import SERVICE2 from "@/public/images/service2.webp";
import SERVICE3 from "@/public/images/service3.webp";
import SERVICE4 from "@/public/images/service4.webp";
import SERVICE5 from "@/public/images/service5.webp";
import SERVICE6 from "@/public/images/service6.webp";
import { TService } from "./types";

export const SERVICES: TService[] = [
  {
    id: 1,
    category: "Naves",
    title:
      "Diseño y construcción de naves industriales y estructuras metálicas.",
    src: SERVICE1,
  },
  {
    id: 2,
    category: "Obra civil",
    title:
      "Servicios completos de obra civil para construcción y remodelación.",
    src: SERVICE2,
  },
  {
    id: 3,
    category: "Subestación",
    title:
      "Proyectos de baja y alta tensión, desde instalaciones básicas hasta subestaciones.",
    src: SERVICE3,
  },
  {
    id: 4,
    category: "Remodelación y acabados",
    title:
      "Remodelaciones con materiales de alta calidad y acabados profesionales.",
    src: SERVICE4,
  },
  {
    id: 5,
    category: "Mantenimientos preventivos",
    title: "Ejecución de proyectos con equipo y personal especializado.",
    src: SERVICE5,
  },
  {
    id: 6,
    category: "Instalaciones eléctricas",
    title:
      "Mantenimiento e instalación de desconectadores, pruebas de tierra, subestaciones, líneas aéreas y actualización de tableros.",
    src: SERVICE6,
  },
];

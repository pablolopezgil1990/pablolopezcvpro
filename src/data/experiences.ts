/**
 * EXPERIENCIAS PROFESIONALES
 * 
 * Este archivo contiene todas las experiencias laborales que se muestran en la sección "Trayectoria".
 * 
 * PARA AGREGAR UNA NUEVA EXPERIENCIA:
 * Agrega el objeto al array EXPERIENCES siguiendo esta estructura:
 * 
 * {
 *   company: "Nombre de la empresa",
 *   dates: "fecha inicio - fecha fin (duración)",  // Ej: "ene. 2020 - dic. 2022 (2 años 11 meses)"
 *   role: "Título del puesto",
 *   bullets: [                                      // Opcional - Array de logros/responsabilidades
 *     "Logro o responsabilidad 1",
 *     "Logro o responsabilidad 2",
 *   ],
 *   isOlder: false,                                 // true si es experiencia antigua (se oculta por defecto)
 * }
 */

import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Universidad Internacional de Valencia",
    dates: "nov. 2022 - actualidad",
    role: "Análisis de datos y procesos de calidad",
    bullets: [
      "Gestión y análisis de indicadores, resultados de encuestas y procesos de seguimiento, garantizando coherencia, trazabilidad y fiabilidad del dato para la toma de decisiones.",
      "Coordinación de la migración operativa del departamento al ERP (Microsoft Dynamics).",
      "Definición y seguimiento de KPIs para evaluar el impacto de la mejora de procesos.",
      "Automatización de procesos en Python para reducir tiempos y errores en tareas manuales.",
      "Representación y análisis de rankings en Power BI para apoyar la toma de decisiones.",
      "Diseño e implantación de un proceso de control interno para la revisión de encuestas e informes.",
    ],
    isOlder: false,
  },
  {
    company: "NATURALEX",
    dates: "may. 2021 - nov. 2022 (1 año 7 meses)",
    role: "Gestión y análisis de datos — Dpto. Marketplaces",
    bullets: [
      "Soporte interdepartamental mediante Excel, incluyendo formación y desarrollo de herramientas.",
      "Consultas SQL en coordinación con el DBA para la gestión de datos procedentes de plataformas como Amazon, Cdiscount o Mirakl.",
      "Desarrollo de macros en VBA para automatizar la descarga, transformación y carga de información.",
      "Uso avanzado de Power Query para integrar datos desde múltiples orígenes y generar tablas dinámicas.",
      "Automatización de procesos con Power Automate Desktop.",
      "Diseño y presentación de dashboards en Power BI.",
      "Formulación avanzada: búsquedas con múltiples coincidencias, conexiones online en tiempo real y condiciones dependientes del factor tiempo.",
    ],
    isOlder: false,
  },
  {
    company: "Consellería de Hacienda y Modelo Económico",
    dates: "nov. 2018 - oct. 2020 (2 años)",
    role: "Análisis de datos, estadista — Servicio de Financiación Autonómica",
    bullets: [
      "Gestión y seguimiento de indicadores del sistema sanitario.",
      "Diseño de macros y tablas dinámicas en Excel para agilizar la extracción y explotación de datos.",
      "Creación y mantenimiento de una base de datos sanitaria en Microsoft Access.",
      "Análisis estadístico avanzado (regresiones, correlaciones, cargas factoriales) con Stata.",
      "Visualización de resultados y análisis geolocalizado mediante Power BI.",
    ],
    isOlder: true,
  },
  {
    company: "Consellería de Vivienda, O.P. y V.T.",
    dates: "abr. 2017 - may. 2017",
    role: "Técnico superior de informes poblacionales",
    bullets: [
      "Elaboración de ratios e indicadores poblacionales a partir de datos del INE.",
      "Investigación y actualización de indicadores económicos.",
      "Realización de informes de tendencias y gráficos.",
    ],
    isOlder: true,
  },
  {
    company: "Hospital Universitario Doctor Peset",
    dates: "oct. 2015 - ene. 2016",
    role: "Técnico superior de compras y logística",
    bullets: [
      "Estudio de aprovisionamiento para comprobar costes.",
      "Recepción de transportistas y registro de pedidos.",
      "Emisión de facturas y etiquetado de lotes.",
    ],
    isOlder: true,
  },
  {
    company: "TÜV Rheinland España",
    dates: "ene. 2011 - may. 2011",
    role: "Técnico superior administrativo",
    bullets: [
      "Facturación de servicios a través de SAP S3.",
      "Gestión de la cartera de clientes mediante Microsoft Access.",
      "Cumplimentación auxiliar de informes de calidad.",
      "Atención en oficina, física, virtual y telefónica.",
    ],
    isOlder: true,
  },
];

/**
 * STACK TECNOLÓGICO / PROGRAMAS
 * 
 * Este archivo contiene todas las herramientas/tecnologías que se muestran en la sección "Stack".
 * 
 * PARA AGREGAR UN NUEVO PROGRAMA/HERRAMIENTA:
 * 1. Importa el icono necesario de lucide-react (o usa uno existente)
 * 2. Agrega el objeto al array PROGRAMS siguiendo esta estructura:
 * 
 * {
 *   slug: "nombre-unico",                    // Debe ser único, se usa para filtrado
 *   name: "Nombre del Programa",
 *   desc: "Descripción de cómo lo usas y para qué sirve",
 *   Icon: Braces,                            // Icono de lucide-react
 * }
 */

import {
  Braces,
  FileBarChart2,
  GitBranch,
  LineChart,
  FileSpreadsheet,
  Database,
  Wrench,
  Workflow,
  Share2,
  Boxes,
} from "lucide-react";
import type { Program } from "../types";

export const PROGRAMS: Program[] = [
  {
    slug: "python",
    name: "Python",
    desc: "La navaja suiza para el análisis avanzado. Python permite romper las limitaciones del software convencional, creando automatismos mediante bucles para tareas masivas y ejecutando estadística compleja allí donde las herramientas tradicionales no llegan.",
    Icon: Braces,
  },
  {
    slug: "power-bi",
    name: "Power BI",
    desc: '"Si no lo cuentas, no lo has hecho". Un Dashboard favorece que el dato hable, transformando modelos complejos en narrativas visuales e interactivas, facilitando la toma de decisiones de forma clara, directa y en tiempo real.',
    Icon: FileBarChart2,
  },
  {
    slug: "power-query",
    name: "Power Query",
    desc: "Se habla mucho de SQL y muy poco de Power Query. Permite configurar flujos de información de principio a fin: conecta a bases de datos, transforma información desestructurada y construye modelos de datos listos para tablas dinámicas o gráficos.",
    Icon: GitBranch,
  },
  {
    slug: "estadistica",
    name: "Programas para estadística",
    desc: "R / Stata / Mathematica para elaborar regresiones lineales, correlaciones, análisis de causalidad y refactorización de variables para elaborar indicadores sintéticos, etcétera.",
    Icon: LineChart,
  },
  {
    slug: "excel",
    name: "Excel",
    desc: "La herramienta universal para el prototipado de datos. A menudo subestimada, pero un valor seguro para garantizar resultados con plazos ajustados.",
    Icon: FileSpreadsheet,
  },
  {
    slug: "sql",
    name: "SQL",
    desc: "Dominar SQL no es solo escribir código, es entender cómo se vertebra una base de datos. Significa identificar las Primary Keys, definir con precisión los campos, controlar la integridad de los registros, dominar la lógica de las relaciones mediante Joins y Unions, etcétera. Si el dato no es correcto en origen, no lo será en destino.",
    Icon: Database,
  },
  {
    slug: "vba",
    name: "VBA",
    desc: "Automatizaciones en Office para escalar tareas operativas: exportaciones, validaciones y plantillas que ahorran tiempo a varios equipos.",
    Icon: Wrench,
  },
  {
    slug: "power-automate-desktop",
    name: "Power Automate Desktop",
    desc: "Orquestación de procesos repetitivos: descargas, cargas, pasos de validación y tareas de backoffice con menos fricción y menos errores.",
    Icon: Workflow,
  },
  {
    slug: "dynamics",
    name: "Microsoft Dynamics (ERP)",
    desc: "Trabajo con entornos de ERP: migración operativa, adaptación de procesos y definición de indicadores para seguimiento y mejora continua.",
    Icon: Boxes,
  },
  {
    slug: "sharepoint",
    name: "SharePoint / Gestión documental",
    desc: "Estandarización y trazabilidad de evidencias: repositorios, estructura, control de versiones y acceso para auditorías y reporting.",
    Icon: Share2,
  },
];

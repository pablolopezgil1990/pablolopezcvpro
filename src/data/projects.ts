/**
 * PROYECTOS / CASOS REALES
 * 
 * Este archivo contiene todos los casos/proyectos que se muestran en la sección "Casos".
 * 
 * PARA AGREGAR UN NUEVO PROYECTO:
 * 1. Importa el icono necesario de lucide-react (o usa uno existente)
 * 2. Agrega el objeto del proyecto al array PROJECTS siguiendo esta estructura:
 * 
 * {
 *   slug: "nombre-unico-url",           // URL: /proyectos/nombre-unico-url
 *   stackSlug: "python",                 // Debe coincidir con un slug de programs.ts
 *   title: "Tecnología · Título del Proyecto",
 *   subtitle: "Subtítulo descriptivo",
 *   summary: "Resumen corto del objetivo",
 *   tags: ["Tag1", "Tag2"],             // Opcional
 *   context: "Descripción del contexto y problema",
 *   approach: [                          // Array de pasos/métodos
 *     "Paso 1 del desarrollo",
 *     "Paso 2 del desarrollo",
 *   ],
 *   impactIntro: "Introducción al impacto (opcional, puede estar vacío)",
 *   impact: [                            // Array de impactos/resultados
 *     "Impacto 1: Descripción",
 *     "Impacto 2: Descripción",
 *   ],
 *   Icon: Braces,                        // Icono de lucide-react
 *   impactBadges: [                      // Opcional - badges de impacto
 *     { icon: "fire", label: "Alto impacto" },
 *     { icon: "zap", label: "Automatización" },
 *   ],
 * }
 * 
 * NOTA: Los iconos disponibles para impactBadges son:
 * - "fire" | "zap" | "chart" | "target" | "users" | "clock"
 */

import {
  Braces,
  FileBarChart2,
  GitBranch,
  LineChart,
  FileSpreadsheet,
  Database,
  Boxes,
} from "lucide-react";
import type { ProjectCase } from "../types";

export const PROJECTS: ProjectCase[] = [
  {
    slug: "excel-consultoria-clima-laboral",
    stackSlug: "excel",
    title: "Excel · Consultoría Analítica · Auditoría de Clima Laboral (Adecco)",
    subtitle: "Consultoría Analítica · Auditoría de Clima Laboral (Adecco)",
    summary:
      "Transformar las percepciones de los empleados de grandes cuentas en indicadores accionables, mediante el análisis híbrido (cuantitativo/cualitativo) de encuestas de clima.",
    tags: ["Análisis cuantitativo", "Análisis de Sentimiento", "Consultoría Estratégica"],
    impactBadges: [
      { icon: "users", label: "People Analytics" },
      { icon: "target", label: "Consultoría" },
      { icon: "chart", label: "Análisis Híbrido" }
    ],
    context:
      "Como consultor autónomo para Adecco, procesaba grandes volúmenes de datos provenientes de encuestas. La información era masiva y heterogénea, combinando métricas numéricas con preguntas de respuesta abiertas. El objetivo final era entregar una hoja de ruta clara a la dirección de las empresas cliente para mejorar la retención de talento y la satisfacción interna.",
    approach: [
      "Estandarización de Procesos: Diseño de un ecosistema de plantillas vinculadas (Excel-Word) que permitió automatizar la transición desde los datos brutos hasta la estructura del informe final, reduciendo los tiempos de entrega y asegurando la coherencia visual y técnica.",
      "Segmentación Multivariable Avanzada: Implementación de una matriz de tabulación para cruzar dimensiones clave: Antigüedad, Departamento, Sección y Tipo de jornada (Presencial/Otros), permitiendo granularidad total en el análisis.",
      "Análisis Cuantitativo de Indicadores: Evaluación de bloques críticos de RR.HH. como: Liderazgo, Desarrollo y Promoción, Identidad y Compromiso, Organización, y Recursos y Tecnología.",
      "Análisis Cualitativo y de Sentimiento: Procesamiento de respuestas abiertas mediante la clasificación de sentimientos y detección de patrones de palabras clave (frecuencia de conceptos) para identificar preocupaciones específicas no numéricas (ej. ergonomía, turnos, trato humano).",
      "Diagnóstico Estratégico: Elaboración de informes ejecutivos que traducían los datos en \"Áreas Fuertes\" (para potenciar como marca empleadora) y \"Áreas de Mejora\" (con recomendaciones tácticas inmediatas).",
    ],
    impactIntro: "",
    impact: [
      "Eficiencia Operativa: La estandarización mediante plantillas avanzadas permitió escalar la capacidad de análisis, manejando plantillas de grandes empresas con mayor agilidad.",
      "Insights Profundos: El análisis cualitativo permitió dar \"voz\" a los empleados, aportando matices que los números por sí solos no mostraban (ej. problemas específicos de comunicación en departamentos clave).",
      "Soporte a la Toma de Decisiones: Los informes sirvieron como base directa para que los departamentos de RR.HH. de los clientes finales implementaran planes de acción específicos, mejorando los KPIs de clima laboral en mediciones posteriores.",
    ],
    Icon: FileSpreadsheet,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "excel-control-entrada",
    stackSlug: "excel",
    title: "Excel · Control de entrada y estandarización para mejorar la calidad del dato",
    subtitle: "Control de entrada y estandarización para mejorar la calidad del dato",
    summary:
      "Mejorar la calidad del dato mediante el control de la entrada manual, sustituyendo el registro libre por un formulario de captura estructurado.",
    tags: ["VBA", "Formulario", "Reporting"],
    impactBadges: [
      { icon: "zap", label: "Automatización" },
      { icon: "target", label: "Calidad de Datos" }
    ],
    context:
      "En el departamento de Postventa, la ausencia de un método normalizado para registrar incidencias telefónicas generaba un conjunto de datos caótico. Al no existir restricciones en la entrada, la información era heterogénea, difícil de tabular y presentaba serias lagunas de integridad, lo que impedía cualquier análisis posterior fiable.",
    approach: [
      "Diseño de Interfaz de Captura: Elaboración de un formulario de entrada de datos para acotar y ordenar la información desde el origen.",
      "Automatización mediante Macros: Implementación de lógica en VBA para procesar la información del formulario, validando campos obligatorios y volcando los datos automáticamente a una tabla maestra.",
      "Limpieza de Arquitectura: Eliminación de campos redundantes y aplicación de reglas de negocio para asegurar que cada registro sea único y coherente.",
      "Estandarización: Creación de una estructura de base de datos optimizada para su posterior explotación.",
    ],
    impactIntro:
      'Este caso demuestra cómo la intervención en la fase de "Entrada" (Input) es crítica para asegurar el éxito del "Reporting" (Output).',
    impact: [
      "Eficiencia Operativa: Reducción significativa de los tiempos de registro gracias a la eliminación de redundancias y la simplificación de la interfaz.",
      "Calidad de Información: Eliminación del ruido en los datos, garantizando que la información de postventa sea veraz y uniforme.",
      "Capacidad Analítica: Por primera vez, el departamento cuenta con una base sólida para consolidar análisis de rendimiento, detectar patrones de fallos y generar reporting de gestión fiable.",
    ],
    Icon: FileSpreadsheet,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&q=80",
  },
  {
    slug: "python-consolidacion-profesorado",
    stackSlug: "python",
    title: "Python · Consolidación y Armonización de Datos Históricos",
    subtitle: "Consolidación y Armonización de Datos Históricos",
    summary:
      "Unificar seis años de registros de profesorado (2019-2024) en una base de datos única y coherente mediante la normalización de estructuras heterogéneas.",
    tags: ["Reporting", "Estandarización", "Data Engineering"],
    impactBadges: [
      { icon: "chart", label: "39K registros" },
      { icon: "clock", label: "6 años unificados" },
      { icon: "zap", label: "Automatización" }
    ],
    context:
      "El departamento gestionaba la información del profesorado en archivos de Excel anuales con estructuras inconsistentes. A lo largo de los años, los nombres de las columnas, los tipos de datos y los criterios de registro variaron (por ejemplo, \"faculty\" frente a \"area_viu\"), lo que fragmentaba la información e impedía realizar análisis históricos de tendencias o evolución de la plantilla docente.",
    approach: [
      "Ingesta Multifuente: Desarrollo de un motor de carga en Python (Pandas/Openpyxl) capaz de localizar y extraer tablas dinámicas específicas (ListObjects) dentro de múltiples libros de Excel.",
      "Canonización de Atributos: Implementación de un diccionario de mapeo (CANON) para resolver la sinonimia técnica, traduciendo variables históricas a una nomenclatura estándar común.",
      "Normalización Algorítmica: Aplicación de limpieza automática de cabeceras mediante eliminación de tildes, conversión a snake_case y gestión de duplicados por coincidencia de mapeo.",
      "Unificación y Reordenación: Consolidación de 39,344 registros en un dataset maestro con un orden de columnas optimizado para la lectura y explotación analítica.",
    ],
    impactIntro: "",
    impact: [
      "Eficiencia Operativa: Automatización del proceso de unión de tablas, reduciendo el tiempo de preparación de datos de horas de trabajo manual a pocos segundos de ejecución.",
      "Integridad de Información: Eliminación de la fragmentación de datos mediante la trazabilidad por año y la resolución de discrepancias en nombres de columnas.",
      "Visibilidad Histórica: Creación de un repositorio completo de 70 columnas unificadas que permite, por primera vez, realizar análisis comparativos sobre doctorados, acreditaciones y cargas lectivas desde 2019 hasta 2024.",
    ],
    Icon: Braces,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "power-query-profesorado",
    stackSlug: "power-query",
    title: "Power Query · Modelo de datos para cálculo de profesorado",
    subtitle:
      "Sistema automatizado para ratios de profesorado mediante integración de bases de datos relacionales",
    summary:
      "Generar un sistema de cálculo masivo y automatizado para ratios de profesorado (como el porcentaje de doctores) mediante la integración de bases de datos relacionales.",
    tags: ["ETL", "Modelado de datos", "Reporting"],
    impactBadges: [
      { icon: "zap", label: "Automatización" },
      { icon: "chart", label: "Modelo estrella" },
      { icon: "fire", label: "Miles de registros" }
    ],
    context:
      "Anualmente, la institución debe reportar a la Agencia de Calidad métricas críticas, como el porcentaje de doctores por titulación. La gestión es extremadamente compleja debido al volumen de datos: la intersección de todas las asignaturas impartidas en la universidad con las fichas individuales de cada docente. El proceso manual es susceptible de errores de conteo y conjuntamente difícil de abarcar.",
    approach: [
      "Integración de Fuentes (ETL): Conexión directa con el ERP para extraer la información total de las titulaciones y características docentes.",
      "Limpieza y Transformación: Aplicación de múltiples pasos de limpieza en Power Query para normalizar nombres, formatos y registros. Homogeneización de encabezados y eliminación de duplicados para asegurar JOINS y UNIONS correctos.",
      "Modelado en Estrella: Diseño de un modelo de datos robusto utilizando al docente como Primary Key. Esta arquitectura permite relacionar las características del profesorado (dimensión) con las asignaciones de asignaturas (hechos).",
      "Normalización: El modelo garantiza que la información de un docente sea única y coherente en toda la estructura. Además, está ideado para que sea fácilmente actualizable.",
    ],
    impactIntro:
      "La transición de un recuento manual a un modelo de datos relacional no solo ahorra tiempo, sino que eleva el estándar de garantía ante auditorías externas.",
    impact: [
      "Cálculo Masivo y Automatizado: Se eliminó el recuento manual. El sistema ahora procesa miles de registros de forma instantánea, permitiendo que el reporte se genere al pulsar \"Actualizar\".",
      "Integridad del Dato: Al centralizar la información del docente, cualquier corrección en su ficha técnica se propaga automáticamente a todas las titulaciones relacionadas, eliminando correcciones repetidas e individuales y garantizando coherencia total.",
      "Escalabilidad del Reporting: El output final es una base de datos procesada que permite realizar análisis granulares a tres niveles: por Título, por Facultad o a nivel global de Universidad.",
    ],
    Icon: GitBranch,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "python-web-scraping-competencia",
    stackSlug: "python",
    title: "Python · Automatización de Inteligencia Competitiva (Web Scraping)",
    subtitle: "Automatización de Inteligencia Competitiva (Web Scraping)",
    summary:
      "Monitorizar dinámicamente el posicionamiento de mercado mediante la extracción automatizada de precios y catálogos de la competencia.",
    tags: ["Web Scraping", "Pricing", "Market Intelligence", "Python Automation"],
    impactBadges: [
      { icon: "fire", label: "Tiempo real" },
      { icon: "zap", label: "Automatización" },
      { icon: "target", label: "Market Intelligence" }
    ],
    context:
      "En un entorno de mercado altamente volátil, el seguimiento de los precios de la competencia se realizaba de forma manual, lo que resultaba en una visión fragmentada, desactualizada y propensa a errores. El reto consistía en obtener datos en tiempo real de múltiples portales web externos para permitir una estrategia de precios (pricing) reactiva y basada en evidencias, sin depender de la descarga manual de catálogos.",
    approach: [
      "Arquitectura de Extracción: Desarrollo de scripts en Python utilizando librerías como BeautifulSoup o Selenium para navegar y parsear el contenido HTML de diversos sitios web de la competencia.",
      "Normalización de Datos Externos: Implementación de lógica de limpieza de strings y regex para extraer valores numéricos y nombres de productos, convirtiendo datos no estructurados en una base de datos tabular limpia.",
      "Pipeline de Actualización: Automatización del proceso para que la recogida de datos se ejecute de forma recurrente, permitiendo construir un histórico de fluctuaciones de precios.",
    ],
    impactIntro: "",
    impact: [
      "Agilidad Comercial: Reducción del tiempo de detección de cambios de precio de la competencia de días (revisión manual) a pocos minutos (ejecución de script).",
      "Precisión Estratégica: Eliminación de errores de transcripción manual, garantizando que las decisiones de precios de la empresa se basen en datos veraces y capturados directamente de la fuente.",
      "Ventaja Competitiva: Capacidad para identificar tendencias de descuentos y promociones de terceros de forma proactiva, permitiendo al departamento ajustar su oferta de manera casi instantánea.",
    ],
    Icon: Braces,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "python-encuestas-reporting",
    stackSlug: "python",
    title: "Python · Automatización de reporting masivo para encuestas",
    subtitle: "Consolidación masiva de CSV y generación automática de informes por titulación",
    summary:
      "Consolidar bases de datos de gran volumen y automatizar la generación de más de 100 informes individuales de calidad docente.",
    tags: ["Reporte", "Big Data", "Automatización"],
    impactBadges: [
      { icon: "chart", label: "Big Data" },
      { icon: "fire", label: "+100 informes" },
      { icon: "zap", label: "Automatización" }
    ],
    context:
      "La gestión de encuestas de satisfacción para la acreditación de títulos requería reportar los últimos seis cursos académicos. El volumen de los archivos CSV superaba la capacidad de procesamiento de las herramientas de hoja de cálculo tradicionales, y la heterogeneidad de los datos (cambios en el orden y número de preguntas según el año) imposibilitaba una consolidación manual eficiente.",
    approach: [
      "Arquitectura de Consolidación: Implementación de un script en Python para la lectura y unión de bases de datos masivas, gestionando mediante lógica de programación las discrepancias estructurales entre cursos.",
      "Transformación y Dinamización: Ejecución de procesos de limpieza y pivoting de columnas para estandarizar indicadores (tasas de participación, promedios por bloque y resultados de ítems individuales) a pesar de la evolución de los cuestionarios en el tiempo.",
      "Automatización mediante Bucles: Programación de un sistema de generación de informes que itera sobre el dataset consolidado para exportar automáticamente resultados específicos por cada titulación.",
    ],
    impactIntro: "",
    impact: [
      "Procesamiento de Grandes Volúmenes: Superación de las limitaciones de software convencional, haciendo posible el análisis de series históricas completas que de otro modo no se podría.",
      "Escalabilidad y Precisión: Generación automática de más de 100 reportes individuales, eliminando el riesgo de error humano asociado al \"copy-paste\" y garantizando la trazabilidad total de las cifras.",
      "Eficiencia Temporal: Reducción drástica de los tiempos de entrega, transformando un proceso tedioso de trabajo manual en un automatismo de ejecución inmediata.",
    ],
    Icon: Braces,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "power-bi-reingenieria-ranking",
    stackSlug: "power-bi",
    title: "Power BI · Reingeniería de Modelo para Análisis Comparativo",
    subtitle: "Reingeniería de Modelo para Análisis Comparativo",
    summary:
      "Transformar una estructura de datos plana e inflexible en un modelo dinámico y escalable que permita la comparación multivariante de indicadores universitarios.",
    tags: ["Visualización de Datos", "Modelado", "ETL", "BI"],
    impactBadges: [
      { icon: "fire", label: "Alto impacto" },
      { icon: "chart", label: "Modelo dinámico" },
      { icon: "target", label: "UX mejorada" }
    ],
    context:
      "La base de datos original del Ranking de la Fundación CYD presentaba una estructura horizontal donde cada magnitud (tasa de graduación, publicaciones, etc.) ocupaba una columna distinta. Esta arquitectura impedía al usuario final alternar entre indicadores de forma ágil, obligaba a crear visualizaciones estáticas para cada métrica y hacía imposible realizar comparativas dinámicas entre universidades bajo un mismo marco de referencia.",
    approach: [
      "Dinamización de Jerarquías (Unpivot): Reestructuración profunda del dataset mediante Power Query, transponiendo las columnas de magnitudes en un modelo de pares \"Atributo-Valor\". Esto permitió centralizar cientos de métricas en una sola dimensión filtrable.",
      "Contextualización Estadística: Implementación de medidas DAX para calcular los valores máximos y mínimos del promedio global de la base de datos.",
      "Diseño de Referencias Visuales: Integración en los gráficos de un margen superior e inferior sutil que actúa como \"bandas de referencia\". Esto permite que, al filtrar un grupo de universidades, se visualice inmediatamente su posición relativa respecto a los extremos de todo el ecosistema universitario.",
      "Optimización de UX: Consolidación de múltiples páginas de informe en un único dashboard interactivo donde la selección de la magnitud redefine toda la lógica visual.",
    ],
    impactIntro: "",
    impact: [
      "Agilidad Analítica: Reducción radical de la complejidad para el usuario, permitiendo visualizar la evolución histórica de cualquier indicador con un solo clic.",
      "Contexto Inmediato: Mejora en la interpretación de los datos; ya no solo se observa el valor de una universidad, sino que se comprende su desempeño en comparación con el rango total (máximos y mínimos) del mercado.",
      "Escalabilidad del Modelo: La nueva estructura permite añadir futuras ediciones del ranking o nuevas métricas sin necesidad de rediseñar los gráficos o modificar la arquitectura del informe.",
    ],
    Icon: FileBarChart2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "power-bi-marketplace",
    stackSlug: "power-bi",
    title: "Power BI · Dashboard Global de Ventas Marketplace",
    subtitle: "Panel unificado para análisis global de ventas en marketplaces internacionales",
    summary:
      "Centralizar y representar las ventas de múltiples marketplaces en un único panel de control integral usable tanto por gerencia como por managers.",
    tags: ["BI", "ETL", "Reporting"],
    impactBadges: [
      { icon: "chart", label: "Multi-país" },
      { icon: "fire", label: "Tiempo real" },
      { icon: "target", label: "Decisiones ágiles" }
    ],
    context:
      "La dispersión de las ventas en plataformas de distintos países (Francia, UK, España, Italia, Holanda) generaba una visión fragmentada del negocio. Cada marketplace operaba con formatos de archivo propios, idiomas locales y diferentes divisas, lo que impedía una comparativa rápida de la rentabilidad global y por canal.",
    approach: [
      "Arquitectura de Conexión Híbrida: Implementación de flujos de datos mediante APIs y ERP propio, unificando orígenes heterogéneos en un modelo relacional único.",
      "Estandarización Semántica y Multidivisa: Mapeo de categorías de producto y creación de una tabla dinámica de tipos de cambio vinculada a valores reales del mercado para convertir todas las transacciones a una moneda base (Euro) en tiempo real.",
      "Diseño de Modelo de Datos: Estructuración del modelo para permitir un análisis multinivel, facilitando tanto la visión agregada como el detalle granular.",
    ],
    impactIntro: "",
    impact: [
      "Reporting de Doble Perfil: Dashboard jerarquizado para ofrecer una visión estratégica a Gerencia y táctica a Managers, identificando desviaciones por marketplace y producto.",
      "Margen de maniobra en la Toma de Decisiones: Eliminación de horas de consolidación manual, permitiendo una reacción inmediata ante cambios en el rendimiento de cualquier canal internacional.",
      "Eficiencia Financiera: Unificación de métricas considerando distintos tipos de cambio, garantizando que el análisis de márgenes sea preciso y comparable.",
    ],
    Icon: FileBarChart2,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "sql-especializacion-postgresql",
    stackSlug: "sql",
    title: "SQL · PostgreSQL Data Analysis & Database Design",
    subtitle: "PostgreSQL Data Analysis & Database Design",
    summary:
      "Especialización técnica en SQL para interactuar directamente con bases de datos corporativas, realizar consultas complejas y estructurar datos de manera eficiente para análisis avanzado.",
    tags: ["PostgreSQL", "Data Analysis", "Database Design"],
    impactBadges: [
      { icon: "target", label: "Especialización" },
      { icon: "chart", label: "Consultas avanzadas" },
      { icon: "zap", label: "Autonomía" }
    ],
    context:
      "Para potenciar la capacidad de análisis y reducir la dependencia de procesos manuales, completé una trayectoria de especialización técnica enfocada en SQL. El objetivo fue adquirir las competencias necesarias para interactuar directamente con bases de datos corporativas, permitiendo realizar consultas complejas, unir múltiples fuentes de información y estructurar datos de manera eficiente para su posterior análisis.",
    approach: [
      "Consultas Avanzadas y Joins: Especialización en la combinación de tablas y el uso de subconsultas para responder preguntas de negocio complejas utilizando múltiples entidades de datos.",
      "Manipulación y Procesamiento de Datos: Uso de funciones de PostgreSQL para transformar, limpiar y procesar datos directamente desde el motor de la base de datos.",
      "Estadísticas de Resumen y Window Functions: Implementación de funciones de ventana y agregaciones avanzadas para la creación de informes analíticos y de ingeniería de datos.",
      "Diseño de Bases de Datos: Aprendizaje de los principios de diseño para organizar y almacenar la información de forma óptima, mejorando el rendimiento y la integridad de los datos.",
      "Análisis de Impacto Real: Aplicación de las habilidades en proyectos prácticos, como el análisis de datos históricos para ONGs, traduciendo grandes volúmenes de registros en insights accionables.",
    ],
    impactIntro: "",
    impact: [
      "Autonomía en la Extracción de Datos: Capacidad para consultar directamente el ERP y otras bases de datos sin necesidad de intermediarios técnicos, acelerando la toma de decisiones.",
      "Eficiencia en el Reporting: Optimización de procesos de reporte mediante el uso de SQL para pre-procesar los datos, reduciendo significativamente la carga de trabajo en herramientas de visualización como Excel o Power BI.",
      "Calidad y Estructura: Aplicación de mejores prácticas en el diseño y organización de datos, asegurando que la información sea escalable y fácil de auditar.",
    ],
    Icon: Database,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "dynamics-consultoria-migracion",
    stackSlug: "dynamics",
    title: "Microsoft Dynamics · Consultoría Funcional y Migración Operativa",
    subtitle: "Consultoría Funcional y Migración Operativa",
    summary:
      "Transformar el repositorio documental de titulaciones en una base de datos relacional dentro del ERP, automatizando la gestión del ciclo de vida académico y el reporte institucional.",
    tags: ["Gestión de Proyectos", "ERP", "Arquitectura de Datos", "QA"],
    impactBadges: [
      { icon: "fire", label: "Alto impacto" },
      { icon: "target", label: "ERP Migration" },
      { icon: "users", label: "Consultoría" }
    ],
    context:
      "El departamento de Calidad gestionaba la información crítica para la oficialización de títulos (memorias, plazas, fases administrativas) de forma descentralizada y en formatos no estructurados (PDF). Esta fragmentación impedía la trazabilidad del ciclo de vida de los títulos y convertía las tareas regulares, como el reporte anual de plazas al Ministerio, en procesos manuales lentos, propensos a errores y con nula visibilidad para el resto de la universidad.",
    approach: [
      "Parametrización de Información Silenciada: Liderazgo del equipo operativo en la identificación, extracción y estructuración de datos clave contenidos en documentos físicos y digitales para su migración al sistema.",
      "Modelado Relacional de Negocio: Diseño de la lógica de datos para Dynamics, resolviendo la complejidad de entidades con diferentes granularidades: información estática del título (códigos/nombres) frente a información dinámica y recurrente (plazas anuales, históricos de modificaciones y fases de acreditación).",
      "Gestión de Requerimientos y QA: Coordinación directa con el departamento técnico (IT) para la definición de flujos de trabajo y ejecución de pruebas funcionales por fases (UAT), asegurando que la arquitectura del ERP respondiera a las necesidades de usuario.",
      "Democratización del Dato: Centralización de la información en el ERP, permitiendo que cualquier departamento de la universidad consulte de forma más amigable y en tiempo real el estado y los atributos de las titulaciones.",
    ],
    impactIntro: "",
    impact: [
      "Optimización del Reporte Institucional: Reducción drástica en los tiempos de respuesta para informes recurrentes (como el reporte anual de plazas al Ministerio) gracias a la extracción directa desde el ERP.",
      "Integridad y Trazabilidad: Eliminación de los silos de información en PDF, garantizando una \"fuente única de verdad\" para todo el ciclo de vida de las titulaciones oficiales.",
      "Capacidad Analítica: Preparación de la infraestructura de datos necesaria para la explotación posterior mediante Dashboards de gestión, permitiendo la monitorización integral del departamento desde la base de datos corporativa.",
    ],
    Icon: Boxes,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "stata-sns-pca",
    stackSlug: "estadistica",
    title: "Stata · Análisis Multivariante del Sistema Nacional de Salud",
    subtitle: "Síntesis estadística avanzada para benchmarking sanitario",
    summary:
      "Sintetizar la complejidad de cientos de indicadores sanitarios (recursos, costes y resultados) para identificar patrones de gestión y clasificar el desempeño de las Comunidades Autónomas.",
    tags: ["PCA", "Econometría / Estadística", "Data Cleaning"],
    impactBadges: [
      { icon: "chart", label: "Análisis multivariante" },
      { icon: "target", label: "Benchmarking" },
      { icon: "fire", label: "Cientos de indicadores" }
    ],
    context:
      "El análisis del Sistema Nacional de Salud implicaba manejar una base de datos heterogénea con múltiples dimensiones: recursos estructurales (camas, alta tecnología), gasto per cápita, calidad percibida (satisfacción) y resultados de salud (esperanza de vida, reingresos). La alta dimensionalidad y la correlación entre variables hacían imposible una comparativa directa y limpia entre regiones a través de simples tablas de Excel.",
    approach: [
      "Consolidación de Datos (Excel): Estructuración de un dataset panel unificando series temporales (2002-2016) y normalizando variables de diversas fuentes para su ingesta en software estadístico.",
      "Análisis de Componentes Principales (Stata): Ejecución de scripts (.do) para realizar tests de correlación (pwcorr) y reducción de dimensiones mediante PCA.",
      "Factorización y Rotación: Uso de técnicas de rotación (Varimax) para simplificar la interpretación, agrupando variables en factores latentes explicativos.",
      "Test de Robustez: Aplicación de pruebas y análisis de scree plots para validar matemáticamente la elección de factores principales.",
    ],
    impactIntro: "",
    impact: [
      "Síntesis de Información Compleja: Se logró reducir una base de datos de cientos de columnas a unos pocos factores sintéticos manejables, facilitando la interpretación gerencial.",
      "Benchmarking Objetivo: Creación de un ranking basado en evidencia estadística que permite comparar modelos de gestión sanitaria eliminando el ruido de variables individuales.",
      "Evidencia para Políticas Públicas: Capacidad de detectar correlaciones no obvias mediante matrices de correlación robustas.",
    ],
    Icon: LineChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80",
  },
  {
    slug: "r-logit-probit-salarios",
    stackSlug: "estadistica",
    title: "R · Modelización de Salarios y Participación Laboral (Logit/Probit)",
    subtitle: "Modelos econométricos para brecha salarial y probabilidad de participación laboral",
    summary:
      "Determinar cuantitativamente los factores que influyen en la brecha salarial y calcular la probabilidad de participación activa en el mercado laboral mediante modelos econométricos avanzados.",
    tags: ["Modelos de Elección Discreta", "Econometría con R"],
    impactBadges: [
      { icon: "chart", label: "Econometría" },
      { icon: "target", label: "Modelos predictivos" },
      { icon: "users", label: "People Analytics" }
    ],
    context:
      "Se disponía de datasets socioeconómicos con información sobre salarios, educación, género y composición familiar. El reto era doble: (1) identificar si existía discriminación salarial estadística hacia la mujer; (2) predecir la probabilidad de que una persona decida trabajar o no basándose en su entorno familiar (hijos, otros ingresos), superando las limitaciones de los modelos lineales clásicos.",
    approach: [
      "Regresión Lineal Múltiple: Estimación de ecuaciones de salarios (Mincer earnings function) introduciendo variables dummy de género para aislar el efecto discriminatorio y cálculo de elasticidades.",
      "Modelado No Lineal (Logit/Probit): Al tratar una variable binaria (Trabaja: Sí/No), se descartó el Modelo Lineal de Probabilidad por sus inconsistencias (predicciones fuera del rango 0-1 y heterocedasticidad). Se implementaron modelos Logit y Probit.",
      "Cálculo de Efectos Marginales: Transformación de los coeficientes estimados para interpretar cómo cambia la probabilidad real de trabajar ante un cambio unitario en las variables (ej: tener un hijo más).",
      "Diagnóstico y Bondad de Ajuste: Validación de la significatividad conjunta e individual de los parámetros y evaluación del ajuste del modelo.",
    ],
    impactIntro: "",
    impact: [
      "Detección de Discriminación: Se cuantificó la diferencia porcentual exacta de salario entre hombres y mujeres ceteris paribus (manteniendo constantes educación y experiencia).",
      "Simulación de Escenarios: Capacidad de predecir cómo cae la probabilidad de participación laboral al pasar de 0 a 1 hijo, o de 1 a 2 hijos menores, aportando datos duros para políticas de conciliación.",
      "Rigor Matemático: Transición de estimaciones sesgadas a modelos robustos (MCP y Máxima Verosimilitud) para corregir problemas de heterocedasticidad inherentes a los datos de encuestas.",
    ],
    Icon: LineChart,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
  },
];

/**
 * Función helper para crear un mapa de proyectos por slug
 * Esto facilita la búsqueda rápida de proyectos en las rutas
 */
export const getProjectsBySlug = (): Record<string, ProjectCase> => {
  return PROJECTS.reduce(
    (acc, project) => {
      acc[project.slug] = project;
      return acc;
    },
    {} as Record<string, ProjectCase>
  );
};

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Layers,
  Briefcase,
  TrendingUp,
  GraduationCap,
  ChevronDown,
  FileSpreadsheet,
  GitBranch,
  Braces,
  Database,
  Wrench,
  Workflow,
  LineChart,
  FileBarChart2,
  Share2,
  Boxes,
  ExternalLink,
  ArrowLeft,
  FolderKanban,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";

// --- TIPOS ---
type Experience = {
  company: string;
  dates: string;
  role: string;
  bullets?: string[];
  isOlder?: boolean;
};

type Program = {
  slug: string;
  name: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
};

type ProjectCase = {
  slug: string;
  stackSlug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags?: string[];
  context: string;
  approach: string[];
  impactIntro: string;
  impact: string[];
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
};

// --- DATOS ---
const PROGRAMS: Program[] = [
  {
    slug: "python",
    name: "Python",
    desc: "La navaja suiza para el análisis avanzado. Python permite romper las limitaciones del software convencional, creando automatismos mediante bucles para tareas masivas y ejecutando estadística compleja allí donde las herramientas tradicionales no llegan.",
    Icon: Braces,
  },
  {
    slug: "power-query",
    name: "Power Query",
    desc: "Se habla mucho de SQL y muy poco de Power Query. Permite configurar flujos de información de principio a fin: conecta a bases de datos, transforma información desestructurada y construye modelos de datos listos para tablas dinámicas o gráficos.",
    Icon: GitBranch,
  },
  {
    slug: "power-bi",
    name: "Power BI",
    desc: '"Si no lo cuentas, no lo has hecho". Un Dashboard favorece que el dato hable, transformando modelos complejos en narrativas visuales e interactivas, facilitando la toma de decisiones de forma clara, directa y en tiempo real.',
    Icon: FileBarChart2,
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
    desc: "Dominar SQL no es solo escribir código, es entender cómo se vertebra una base de datos. Si el dato no es correcto en origen, no lo será en destino.",
    Icon: Database,
  },
  {
    slug: "estadistica",
    name: "Programas para estadística",
    desc: "R / Stata / Mathematica para elaborar regresiones lineales, correlaciones, análisis de causalidad y refactorización de variables.",
    Icon: LineChart,
  },
];

const PROJECTS: ProjectCase[] = [
  {
    slug: "python-1",
    stackSlug: "python",
    title: "Python · Automatización de Reporting Académico",
    subtitle: "Consolidación de indicadores para seguimiento de títulos",
    summary: "Optimizar la generación de informes de calidad mediante scripts de Python.",
    tags: ["Automatización", "Pandas", "Reporting"],
    context: "El proceso manual de unir múltiples fuentes de datos académicos era propenso a errores y consumía días de trabajo.",
    approach: ["Limpieza de datos con Pandas", "Generación automática de Excel con Openpyxl"],
    impactIntro: "Se logró una reducción drástica del tiempo de entrega.",
    impact: ["Eficiencia: Ahorro del 80% del tiempo manual", "Calidad: Error humano reducido a cero"],
    Icon: Braces,
  },
  {
    slug: "python-historicos",
    stackSlug: "python",
    title: "Python · Consolidación y Armonización de Datos Históricos",
    subtitle: "Unificación de registros de profesorado (2019-2024)",
    summary: "Unificar seis años de registros de profesorado en una base de datos única y coherente mediante la normalización de estructuras heterogéneas.",
    tags: ["Data Engineering", "Estandarización", "Normalización"],
    context: "El departamento gestionaba la información en archivos anuales inconsistentes. Los nombres de columnas y criterios variaban año tras año, impidiendo análisis de tendencias históricos.",
    approach: [
      "Ingesta Multifuente: Motor de carga en Python para extraer tablas específicas de múltiples libros de Excel.",
      "Canonización de Atributos: Diccionario de mapeo (CANON) para traducir variables históricas a una nomenclatura estándar.",
      "Normalización Algorítmica: Limpieza automática de cabeceras, eliminación de tildes y conversión a snake_case.",
      "Unificación: Consolidación de 39,344 registros en un dataset maestro optimizado."
    ],
    impactIntro: "",
    impact: [
      "Eficiencia Operativa: Reducción del tiempo de preparación de horas a pocos segundos.",
      "Integridad de Información: Resolución de discrepancias en nombres y trazabilidad total por año.",
      "Visibilidad Histórica: Repositorio de 70 columnas unificadas que permite análisis comparativos desde 2019."
    ],
    Icon: Braces,
  },
  {
    slug: "power-query-1",
    stackSlug: "power-query",
    title: "Power Query · ETL Multiorigen",
    subtitle: "Normalización de bases de datos externas",
    summary: "Conexión y transformación de datos heterogéneos.",
    tags: ["ETL", "M Language", "Data Cleaning"],
    context: "Los datos llegaban en formatos incompatibles de distintos proveedores.",
    approach: ["Creación de funciones personalizadas en M", "Automatización de limpieza de tipos"],
    impactIntro: "Mejora en la fiabilidad de los datos base.",
    impact: ["Consistencia: Datos 100% normalizados", "Velocidad: Carga instantánea"],
    Icon: GitBranch,
  },
  {
    slug: "power-bi-1",
    stackSlug: "power-bi",
    title: "Power BI · Dashboard de Rankings",
    subtitle: "Visualización estratégica para toma de decisiones",
    summary: "Diseño de panel interactivo para posicionamiento institucional.",
    tags: ["Visualización", "DAX", "Business Intelligence"],
    context: "Era difícil visualizar la evolución de la universidad frente a la competencia.",
    approach: ["Modelado de datos en estrella", "Métricas avanzadas en DAX"],
    impactIntro: "Acceso inmediato a KPIs críticos.",
    impact: ["Toma de decisiones: Basada en datos reales", "Interactividad: Filtros dinámicos por sede"],
    Icon: FileBarChart2,
  },
  {
    slug: "excel-1",
    stackSlug: "excel",
    title: "Excel · Control de entrada y estandarización",
    subtitle: "Mejora de la calidad del dato",
    summary: "Implementación de validaciones y plantillas estructuradas.",
    tags: ["Excel Avanzado", "Calidad del Dato", "Procesos"],
    context: "La entrada de datos manual era caótica y sin reglas de validación.",
    approach: ["Diseño de formularios de entrada", "Fórmulas de validación cruzada"],
    impactIntro: "El dato llega limpio al sistema central.",
    impact: ["Calidad: 95% menos de errores de entrada", "Estandarización: Formato único"],
    Icon: FileSpreadsheet,
  }
];

const PROJECTS_BY_SLUG = PROJECTS.reduce((acc, p) => ({ ...acc, [p.slug]: p }), {} as Record<string, ProjectCase>);

// --- COMPONENTES AUXILIARES ---
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`bg-white p-5 rounded-2xl shadow-sm border border-gray-100 ${className}`}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

function ExperienceCard({ company, dates, role, bullets, primary }: Experience & { primary: string }) {
  return (
    <Card>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-gray-900 text-sm leading-tight">{company}</h4>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100 whitespace-nowrap ml-2">
          {dates}
        </span>
      </div>
      <p className="text-xs font-semibold mb-3" style={{ color: primary }}>{role}</p>
      {bullets && (
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-300" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

// --- VISTAS PRINCIPALES ---
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<"cv" | "stack" | "cases">("cv");
  const [caseStack, setCaseStack] = useState<string>("");
  const primary = "#6B4C5F";

  return (
    <div className="relative min-h-[100dvh] bg-[#F9FAFB] text-[#374151] antialiased pb-10">
      <header className="sticky top-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <h1 className="text-lg font-bold text-gray-900">Perfil Profesional</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-8">
        {/* Perfil */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <img
              alt="Pablo López Gil"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl"
              src="/profile.jpg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Pablo López Gil</h2>
            <p className="text-sm tracking-widest uppercase font-semibold mt-1" style={{ color: primary }}>
              Analista de Datos
            </p>
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/34654033645" className="p-3 bg-white rounded-full shadow-sm border border-gray-100"><FaWhatsapp style={{ color: primary }} /></a>
            <a href="https://www.linkedin.com/in/pablolopezeconomista/" className="p-3 bg-white rounded-full shadow-sm border border-gray-100"><Linkedin className="h-5 w-5" style={{ color: primary }} /></a>
            <a href="mailto:pablolopezgil1990@gmail.com" className="p-3 bg-white rounded-full shadow-sm border border-gray-100"><Mail className="h-5 w-5" style={{ color: primary }} /></a>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1 shadow-inner">
          {(["cv", "stack", "cases"] as const).map((t) => (
            <button
              key={t}
              className={`flex-1 py-3 px-2 rounded-lg text-xs font-medium transition-all ${tab === t ? "bg-white shadow-sm" : "text-gray-500"}`}
              onClick={() => setTab(t)}
            >
              {t === "cv" ? "Trayectoria" : t === "stack" ? "Stack" : "Casos"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "cv" && (
            <motion.div key="cv" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <ExperienceCard 
                company="Universidad Internacional de Valencia" 
                dates="nov. 2022 - actualidad" 
                role="Análisis de datos y procesos de calidad"
                primary={primary}
                bullets={["Gestión y análisis de indicadores.","Automatización de procesos en Python.","Reporting en Power BI."]}
              />
            </motion.div>
          )}

          {tab === "stack" && (
            <motion.div key="stack" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              {PROGRAMS.map((p) => (
                <Card key={p.slug}>
                  <div className="flex items-center gap-3 mb-2">
                    <p.Icon className="h-6 w-6" style={{ color: primary }} />
                    <h4 className="font-bold text-gray-900">{p.name}</h4>
                  </div>
                  <p className="text-xs text-gray-600 mb-4">{p.desc}</p>
                  <div className="space-y-2">
                    {PROJECTS.filter(proj => proj.stackSlug === p.slug).map(proj => (
                      <Link key={proj.slug} to={`/proyectos/${proj.slug}`} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg text-xs hover:bg-gray-100 transition-colors">
                        {/* ELIMINADO EL NOMBRE DEL PROGRAMA DE LA TARJETA */}
                        <span className="font-medium text-gray-700">{proj.title.split(" · ")[1]}</span>
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          )}

          {tab === "cases" && (
            <motion.div key="cases" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Filtros */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button 
                  onClick={() => setCaseStack("")}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${caseStack === "" ? "bg-[#374151] text-white border-[#374151]" : "bg-white text-gray-500 border-gray-200"}`}
                >
                  Todos
                </button>
                {PROGRAMS.map(p => (
                  <button 
                    key={p.slug}
                    onClick={() => setCaseStack(p.slug)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${caseStack === p.slug ? "text-white border-current" : "bg-white text-gray-500 border-gray-200"}`}
                    style={caseStack === p.slug ? { backgroundColor: primary, borderColor: primary } : {}}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              
              <div className="space-y-4">
                {PROJECTS.filter(p => !caseStack || p.stackSlug === caseStack).map(p => (
                  <Link key={p.slug} to={`/proyectos/${p.slug}`}>
                    <Card className="hover:border-gray-300">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gray-50">
                          <p.Icon className="h-5 w-5" style={{ color: primary }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">{p.title}</h4>
                          {/* ELIMINADO EL SUBTÍTULO DE AQUÍ */}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {p.tags?.slice(0, 2).map(t => (
                              <span key={t} className="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? PROJECTS_BY_SLUG[slug] : undefined;
  const primary = "#6B4C5F";

  if (!project) return null;

  return (
    <div className="min-h-[100dvh] bg-[#F9FAFB] pb-10">
      <header className="sticky top-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200 px-4 py-4">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100"><ArrowLeft className="h-5 w-5" /></button>
          <h1 className="text-sm font-bold text-gray-900">{project.title}</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-6">
        <Card>
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed"><b>Objetivo:</b> {project.summary}</p>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Contexto</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">{project.context}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Desarrollo</h3>
              <ul className="space-y-2">
                {project.approach.map((a, i) => (
                  <li key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-gray-300">•</span> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Impacto</h3>
              <ul className="space-y-2">
                {project.impact.map((imp, i) => (
                  <li key={i} className="text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">{imp}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
        <button onClick={() => navigate("/")} className="w-full py-3 text-xs font-bold text-gray-400 border-2 border-dashed border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          VOLVER AL INICIO
        </button>
      </main>
    </div>
  );
}

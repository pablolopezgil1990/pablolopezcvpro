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
  const [showOlderExp, setShowOlderExp] = useState(false);

  const primary = "#6B4C5F";

  const rootClass = useMemo(
    () =>
      "relative min-h-[100dvh] bg-[#F9FAFB] text-[#374151] transition-colors duration-300 antialiased pb-20",
    [],
  );

  const experiences: Experience[] = useMemo(
    () => [
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
    ],
    [],
  );

  const programs: Program[] = useMemo(
    () => [
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
    ],
    [],
  );

  return (
    <div className={rootClass}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        .font-sans { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
        .font-display { font-family: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp .6s ease-out both; }
      `}</style>

      <header className="sticky top-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center max-w-md mx-auto font-sans">
          <h1 className="text-lg font-bold text-gray-900">Perfil Profesional</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-8 font-sans">
        <motion.div
          aria-hidden={true}
          className="pointer-events-none absolute left-1/2 top-24 -z-10 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: primary }}
          initial={reduceMotion ? false : { opacity: 0.12, scale: 0.92 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.12, 0.22, 0.14],
                  scale: [0.92, 1.04, 0.95],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative group">
            <div
              className="absolute -inset-0.5 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
              style={{
                backgroundImage: `linear-gradient(90deg, ${primary}, rgb(192 132 252))`,
              }}
            />
            <img
              alt="Foto de perfil profesional de Pablo López Gil"
              className="relative w-32 h-32 object-cover rounded-full border-4 border-[#F9FAFB] shadow-xl"
              src="/profile.jpg"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-gray-900">Pablo López Gil</h2>
            <p
              className="text-sm tracking-widest uppercase font-semibold mt-1"
              style={{ color: primary }}
            >
              Analista de Datos
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center w-full">
            <a
              className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:scale-105 transition-transform"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pablolopezgil1990@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              title="Enviar email"
            >
              <Mail className="h-5 w-5" style={{ color: primary }} />
            </a>

            <a
              className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:scale-105 transition-transform"
              href="https://wa.me/34654033645"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="Abrir WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" style={{ color: primary }} />
            </a>

            <a
              className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:scale-105 transition-transform"
              href="https://www.linkedin.com/in/pablolopezeconomista/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="Ver LinkedIn"
            >
              <Linkedin className="h-5 w-5" style={{ color: primary }} />
            </a>
          </div>

          <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
            Economista especializado en transformar información compleja en
            indicadores claros para la toma de decisiones.
          </p>
        </motion.div>

        <div className="bg-gray-100 p-1 rounded-xl flex gap-1 shadow-inner">
          <button
            type="button"
            className={
              tab === "cv"
                ? "flex-1 py-3 px-2 rounded-lg bg-white shadow-sm font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
                : "flex-1 py-3 px-2 rounded-lg text-gray-500 hover:text-gray-900 font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
            }
            onClick={() => setTab("cv")}
          >
            <TrendingUp
              className="h-4 w-4 shrink-0"
              style={{ color: tab === "cv" ? primary : undefined }}
            />
            <span style={tab === "cv" ? { color: primary } : {}} className="whitespace-nowrap">
              Trayectoria
            </span>
          </button>

          <button
            type="button"
            className={
              tab === "stack"
                ? "flex-1 py-3 px-2 rounded-lg bg-white shadow-sm font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
                : "flex-1 py-3 px-2 rounded-lg text-gray-500 hover:text-gray-900 font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
            }
            onClick={() => setTab("stack")}
          >
            <Layers
              className="h-4 w-4 shrink-0"
              style={{ color: tab === "stack" ? primary : undefined }}
            />
            <span style={tab === "stack" ? { color: primary } : {}} className="whitespace-nowrap">
              Stack
            </span>
          </button>

          <button
            type="button"
            className={
              tab === "cases"
                ? "flex-1 py-3 px-2 rounded-lg bg-white shadow-sm font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
                : "flex-1 py-3 px-2 rounded-lg text-gray-500 hover:text-gray-900 font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
            }
            onClick={() => setTab("cases")}
          >
            <FolderKanban
              className="h-4 w-4 shrink-0"
              style={{ color: tab === "cases" ? primary : undefined }}
            />
            <span style={tab === "cases" ? { color: primary } : {}} className="whitespace-nowrap">
              Casos
            </span>
          </button>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {tab === "cv" ? (
            <motion.div
              key="cv"
              className="space-y-6"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
                  >
                    <Briefcase className="h-5 w-5" style={{ color: primary }} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Experiencia profesional
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Más de 7 años minimizando tiempos y errores en múltiples
                  contextos:
                </p>

                <div className="space-y-4">
                  {experiences
                    .filter((e) => !e.isOlder)
                    .map((exp) => (
                      <ExperienceCard
                        key={exp.company + exp.dates}
                        {...exp}
                        primary={primary}
                      />
                    ))}

                  {showOlderExp ? (
                    <>
                      {experiences
                        .filter((e) => e.isOlder)
                        .map((exp) => (
                          <ExperienceCard
                            key={exp.company + exp.dates}
                            {...exp}
                            primary={primary}
                          />
                        ))}
                    </>
                  ) : null}
                </div>

                <button
                  type="button"
                  className="w-full mt-3 py-2 text-xs font-semibold flex items-center justify-center gap-1"
                  style={{ color: primary }}
                  onClick={() => setShowOlderExp((v) => !v)}
                >
                  {showOlderExp
                    ? "Ocultar experiencia anterior"
                    : "Ver experiencia anterior"}
                  <ChevronDown
                    className={
                      "h-4 w-4 transition-transform " +
                      (showOlderExp ? "rotate-180" : "")
                    }
                  />
                </button>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
                  >
                    <GraduationCap
                      className="h-5 w-5"
                      style={{ color: primary }}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Formación académica
                  </h3>
                </div>

                <div className="space-y-4">
                  <Card>
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-2 w-2 bg-black inline-block"
                        aria-hidden={true}
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">
                          Máster en Política Económica y E. Pública
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Universidad de Valencia · 2016—2017
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-2 w-2 bg-black inline-block"
                        aria-hidden={true}
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">
                          Grado en Economía
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Universidad de Valencia · 2011—2016
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-2 w-2 bg-black inline-block"
                        aria-hidden={true}
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">
                          CS Administración y Finanzas
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          IES Abastos · 2009—2011
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
            </motion.div>
          ) : tab === "stack" ? (
            <motion.div
              key="stack"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <StackTecnologico primary={primary} programs={programs} />
            </motion.div>
          ) : (
            <motion.div
              key="cases"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <CasosReales
                primary={primary}
                cases={PROJECTS}
                programs={programs}
                selectedStack={caseStack}
                onSelectStack={setCaseStack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <a
        href="https://wa.me/34654033645"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: primary }}
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}

function ProjectPage() {
  const reduceMotion = useReducedMotion();
  const { slug } = useParams();
  const navigate = useNavigate();

  const primary = "#6B4C5F";
  const rootClass =
    "min-h-[100dvh] bg-[#F9FAFB] text-[#374151] transition-colors duration-300 antialiased pb-10";

  const project = slug ? PROJECTS_BY_SLUG[slug] : undefined;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !project) {
    return (
      <div className={rootClass}>
        <header className="sticky top-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200 px-4 py-4">
          <div className="flex items-center gap-2 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Volver"
              title="Volver"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-bold text-gray-900">
              Proyecto no encontrado
            </h1>
          </div>
        </header>

        <main className="max-w-md mx-auto px-4 pt-6 space-y-4">
          <Card>
            <p className="text-sm text-gray-700">
              Este enlace no existe. Vuelve al inicio y elige un caso desde la
              pestaña de <b>Casos reales</b>.
            </p>
            <div className="mt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm font-semibold"
                style={{ color: primary }}
              >
                Volver <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <header className="sticky top-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200 px-4 py-4">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Volver"
            title="Volver"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h1 className="text-lg font-bold text-gray-900 whitespace-normal break-words leading-snug">
              {`${project.title.split(" · ")[0]} · ${project.subtitle}${
                project.subtitle.trim().endsWith(".") ? "" : "."
              }`}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-4">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Card>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed text-justify">
              <b>Objetivo:</b> {project.summary}
            </p>

            {project.tags?.length ? (
              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            <h3 className="text-sm font-bold text-gray-900">Contexto</h3>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed text-justify">
              {project.context}
            </p>

            <h3 className="text-sm font-bold text-gray-900 mt-4">Desarrollo</h3>
            <ul className="text-sm text-gray-700 mt-2 leading-relaxed list-disc pl-5 space-y-1.5 text-justify">
              {project.approach.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-gray-900 mt-4">Impacto</h3>
            <ul className="text-sm text-gray-700 mt-2 leading-relaxed list-disc pl-5 space-y-1.5 text-justify">
              {project.impact.map((line, idx) => {
                const i = line.indexOf(":");
                if (i > 0) {
                  const label = line.slice(0, i).trim();
                  const rest = line.slice(i + 1).trim();
                  return (
                    <li key={label + idx}>
                      <b>{label}:</b> {rest}
                    </li>
                  );
                }
                return <li key={line + idx}>{line}</li>;
              })}
            </ul>

            {project.impactIntro?.trim() ? (
              <p className="text-sm text-gray-700 mt-3 leading-relaxed text-justify">
                {project.impactIntro}
              </p>
            ) : null}
          </Card>
        </motion.div>

        <div className="flex justify-end">
          <Link
            to="/"
            className="text-xs font-semibold inline-flex items-center gap-1 hover:opacity-80 px-2 py-1 rounded-md border border-gray-200 bg-gray-50"
            style={{ color: primary }}
            title="Volver"
          >
            Volver <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
    </div>
  );
}

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
  Icon: React.ComponentType<{ className?: string }>;
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
  Icon: React.ComponentType<{ className?: string }>;
};

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

function ExperienceCard(props: Experience & { primary: string }) {
  const { company, dates, role, bullets, primary } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Card>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-bold text-gray-800">{company}</h4>
            <p className="text-xs font-semibold uppercase" style={{ color: primary }}>
              {dates}
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-gray-700 mb-3">{role}</p>

        {bullets?.length ? (
          <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 leading-relaxed text-justify">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}
      </Card>
    </motion.div>
  );
}

function CasosReales({
  primary,
  cases,
  programs,
  selectedStack,
  onSelectStack,
}: {
  primary: string;
  cases: ProjectCase[];
  programs: Program[];
  selectedStack: string;
  onSelectStack: (v: string) => void;
}) {
  const visibleProgramChips = useMemo(() => {
    const hidden = new Set(["vba", "power-automate-desktop", "dynamics", "sharepoint"]);
    return programs
      .filter((p) => !hidden.has(p.slug))
      .map((p) => ({ slug: p.slug, name: p.name }));
  }, [programs]);

  const filtered = useMemo(() => {
    const s = selectedStack.trim();
    if (!s) return cases;
    return cases.filter((c) => c.stackSlug === s);
  }, [cases, selectedStack]);

  return (
    <div className="space-y-6">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div
            className="p-1.5 rounded-lg"
            style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
          >
            <FolderKanban className="h-5 w-5" style={{ color: primary }} />
          </div>
          <h3 className="font-bold text-lg text-gray-900">Casos reales</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Aquí agrupo mis casos para que puedas ver <b>qué hice</b>, <b>cómo lo enfoqué</b> y <b>qué impacto tuvo</b>.
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onSelectStack("")}
            className={
              "px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors " +
              (selectedStack
                ? "bg-gray-50 border-gray-200 text-gray-600 hover:bg-white"
                : "bg-gray-900 border-gray-900 text-white")
            }
            title="Ver todos"
          >
            Todos
          </button>

          {visibleProgramChips.map((p) => {
            const active = selectedStack === p.slug;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => onSelectStack(p.slug)}
                className={
                  "px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors " +
                  (active
                    ? "text-white border-transparent"
                    : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-white")
                }
                style={active ? { backgroundColor: primary } : undefined}
                title={p.name}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        <div className="space-y-4 mt-4">
          {filtered.map((c) => (
            <Card key={c.slug}>
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
                  aria-hidden={true}
                >
                  <c.Icon className="h-5 w-5" style={{ color: primary }} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 leading-snug">{c.title}</h4>
                    </div>

                    <Link
                      to={`/proyectos/${c.slug}`}
                      className="shrink-0 text-xs font-semibold inline-flex items-center gap-1 hover:opacity-80 px-2 py-1 rounded-md border border-gray-200 bg-gray-50"
                      style={{ color: primary }}
                      title="Ver caso"
                    >
                      Ver <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{c.summary}</p>

                  {c.tags?.length ? (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}

          {filtered.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <p className="text-sm text-gray-700">No hay casos para este filtro.</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function StackTecnologico({
  primary,
  programs,
}: {
  primary: string;
  programs: Program[];
}) {
  const [showMoreStack, setShowMoreStack] = useState(false);

  const extraSlugs = useMemo(
    () => new Set(["vba", "power-automate-desktop", "dynamics", "sharepoint"]),
    [],
  );

  const mainPrograms = programs.filter((p) => !extraSlugs.has(p.slug));
  const extraPrograms = programs.filter((p) => extraSlugs.has(p.slug));
  const visiblePrograms = showMoreStack ? [...mainPrograms, ...extraPrograms] : mainPrograms;

  return (
    <div className="space-y-6">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div
            className="p-1.5 rounded-lg"
            style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
          >
            <Layers className="h-5 w-5" style={{ color: primary }} />
          </div>
          <h3 className="font-bold text-lg text-gray-900">Stack tecnológico</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Trabajo el dato desde origen hasta destino. El método dependerá del propósito y plazo:
        </p>

        <div className="space-y-4">
          {visiblePrograms.map(({ slug, name, desc, Icon }) => (
            <div key={slug} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
                  aria-hidden={true}
                >
                  <Icon className="h-5 w-5" style={{ color: primary }} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900">{name}</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</p>

                  {(() => {
                    const related = PROJECTS.filter((c) => c.stackSlug === slug);
                    if (!related.length) return null;
                    return (
                      <div className="mt-3">
                        <p className="text-[11px] font-semibold text-gray-500">Casos reales</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {related.map((c) => {
                            const titleWithoutPrefix = c.title.includes(' · ') 
                              ? c.title.split(' · ').slice(1).join(' · ')
                              : c.title;
                            return (
                              <Link
                                key={c.slug}
                                to={`/proyectos/${c.slug}`}
                                className="text-xs font-semibold inline-flex items-center gap-1 hover:opacity-80 px-2 py-1 rounded-md border border-gray-200 bg-gray-50"
                                style={{ color: primary }}
                                title="Ver caso"
                              >
                                {titleWithoutPrefix} <ExternalLink className="h-3.5 w-3.5" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {extraPrograms.length ? (
          <button
            type="button"
            className="w-full mt-3 py-2 text-xs font-semibold flex items-center justify-center gap-1"
            style={{ color: primary }}
            onClick={() => setShowMoreStack((v) => !v)}
          >
            {showMoreStack ? "Ver menos" : `Ver más (${extraPrograms.length})`}
            <ChevronDown
              className={"h-4 w-4 transition-transform " + (showMoreStack ? "rotate-180" : "")}
            />
          </button>
        ) : null}
      </section>

      <section>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Cada herramienta está acompañada de un <b>caso real</b> (cuando aplica) para ver el detalle sin exponer datos sensibles.
          </p>
        </div>
      </section>
    </div>
  );
}

const PROJECTS: ProjectCase[] = [
  {
    slug: "excel-consultoria-clima-laboral",
    stackSlug: "excel",
    title: "Excel · Consultoría Analítica · Auditoría de Clima Laboral (Adecco)",
    subtitle: "Consultoría Analítica · Auditoría de Clima Laboral (Adecco)",
    summary:
      "Transformar las percepciones de los empleados de grandes cuentas en indicadores accionables, mediante el análisis híbrido (cuantitativo/cualitativo) de encuestas de clima.",
    tags: ["People Analytics", "Análisis de Sentimiento", "Consultoría Estratégica"],
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
  },
  {
    slug: "excel-control-entrada",
    stackSlug: "excel",
    title: "Excel · Control de entrada y estandarización para mejorar la calidad del dato",
    subtitle: "Control de entrada y estandarización para mejorar la calidad del dato",
    summary:
      "Mejorar la calidad del dato mediante el control de la entrada manual, sustituyendo el registro libre por un formulario de captura estructurado.",
    tags: ["VBA", "Formulario", "Reporting"],
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
  },
  {
    slug: "python-consolidacion-profesorado",
    stackSlug: "python",
    title: "Python · Consolidación y Armonización de Datos Históricos",
    subtitle: "Consolidación y Armonización de Datos Históricos",
    summary:
      "Unificar seis años de registros de profesorado (2019-2024) en una base de datos única y coherente mediante la normalización de estructuras heterogéneas.",
    tags: ["Reporting", "Estandarización", "Data Engineering"],
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
  },
  {
    slug: "python-web-scraping-competencia",
    stackSlug: "python",
    title: "Python · Automatización de Inteligencia Competitiva (Web Scraping)",
    subtitle: "Automatización de Inteligencia Competitiva (Web Scraping)",
    summary:
      "Monitorizar dinámicamente el posicionamiento de mercado mediante la extracción automatizada de precios y catálogos de la competencia.",
    tags: ["Web Scraping", "Pricing", "Market Intelligence", "Python Automation"],
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
  },
  {
    slug: "python-encuestas-reporting",
    stackSlug: "python",
    title: "Python · Automatización de reporting masivo para encuestas",
    subtitle: "Consolidación masiva de CSV y generación automática de informes por titulación",
    summary:
      "Consolidar bases de datos de gran volumen y automatizar la generación de más de 100 informes individuales de calidad docente.",
    tags: ["Reporte", "Big Data", "Automatización"],
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
  },
  {
    slug: "power-bi-reingenieria-ranking",
    stackSlug: "power-bi",
    title: "Power BI · Reingeniería de Modelo para Análisis Comparativo",
    subtitle: "Reingeniería de Modelo para Análisis Comparativo",
    summary:
      "Transformar una estructura de datos plana e inflexible en un modelo dinámico y escalable que permita la comparación multivariante de indicadores universitarios.",
    tags: ["Visualización de Datos", "Modelado", "ETL", "BI"],
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
  },
  {
    slug: "power-bi-marketplace",
    stackSlug: "power-bi",
    title: "Power BI · Dashboard Global de Ventas Marketplace",
    subtitle: "Panel unificado para análisis global de ventas en marketplaces internacionales",
    summary:
      "Centralizar y representar las ventas de múltiples marketplaces en un único panel de control integral usable tanto por gerencia como por managers.",
    tags: ["BI", "ETL", "Reporting"],
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
      "

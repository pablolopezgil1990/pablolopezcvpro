import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Layers,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Download,
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
  const cvPdfUrl = "/pablo-lopez-gil-cv.pdf";

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
        desc: "Dominar SQL no es solo escribir código, es entender cómo se vertebra una base de datos. Significa identificar las Primary Keys, definir con precisión los campos, controlar la integridad de los registros, dominar la lógica de las relaciones mediante Joins y Unions, etcétera. Si el dato no es correcto en origen, no lo será en destino.",
        Icon: Database,
      },
      {
        slug: "estadistica",
        name: "Programas para estadística",
        desc: "R / Stata / Mathematica para elaborar regresiones lineales, correlaciones, análisis de causalidad y refactorización de variables para elaborar indicadores sintéticos, etcétera.",
        Icon: LineChart,
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
    const order = ["python", "power-query", "power-bi", "excel", "sql", "estadistica"];
    return order
      .map(slug => programs.find(p => p.slug === slug))
      .filter((p): p is Program => p !== undefined && !hidden.has(p.slug))
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
                          {related.map((c) => (
                            <Link
                              key={c.slug}
                              to={`/proyectos/${c.slug}`}
                              className="text-xs font-semibold inline-flex items-center gap-1 hover:opacity-80 px-2 py-1 rounded-md border border-gray-200 bg-gray-50"
                              style={{ color: primary }}
                              title="Ver caso"
                            >
                              {c.title.replace(/^[^·]+·\s*/, '')} <ExternalLink className="h-3.5 w-3.5" />
                            </Link>
                          ))}
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
    slug: "python-consolidacion-profesorado",
    stackSlug: "python",
    title: "Python · Consolidación y Armonización de Datos Históricos",
    subtitle: "Unificación de seis años de registros mediante normalización de estructuras heterogéneas",
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
    slug: "power-query-profesorado",
    stackSlug: "power-query",
    title: "Power Query · Modelo de datos para cálculo de profesorado",
    subtitle:
      "Sistema automatizado para ratios de profesorado mediante integración de bases de datos relacionales",
    summary:
      "Generar un sistema de cálculo masivo y automatizado para ratios de profesorado (como el porcentaje de doctores) mediante la integración de bases de datos relacionales.",
    tags: ["ETL", "Modelado de datos", "Reporting"],
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
      "Eficiencia Financiera: Unificación de métricas considerando distintos tipos de cambio, garantizando que el análisis de márgenes sea preciso y comparable.",
    ],
    Icon: FileBarChart2,
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
    slug: "stata-sns-pca",
    stackSlug: "estadistica",
    title: "Stata · Análisis Multivariante del Sistema Nacional de Salud",
    subtitle: "Síntesis estadística avanzada para benchmarking sanitario",
    summary:
      "Sintetizar la complejidad de cientos de indicadores sanitarios (recursos, costes y resultados) para identificar patrones de gestión y clasificar el desempeño de las Comunidades Autónomas.",
    tags: ["PCA", "Econometría / Estadística", "Data Cleaning"],
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
  },
  {
    slug: "r-logit-probit-salarios",
    stackSlug: "estadistica",
    title: "R · Modelización de Salarios y Participación Laboral (Logit/Probit)",
    subtitle: "Modelos econométricos para brecha salarial y probabilidad de participación laboral",
    summary:
      "Determinar cuantitativamente los factores que influyen en la brecha salarial y calcular la probabilidad de participación activa en el mercado laboral mediante modelos econométricos avanzados.",
    tags: ["People Analytics", "Modelos de Elección Discreta", "Econometría con R"],
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
  },
];

const PROJECTS_BY_SLUG: Record<string, ProjectCase> = PROJECTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, ProjectCase>,
);uste: Validación de la significatividad conjunta e individual de los parámetros y evaluación del ajuste del modelo.",
    ],
    impactIntro: "",
    impact: [
      "Detección de Discriminación: Se cuantificó la diferencia porcentual exacta de salario entre hombres y mujeres ceteris paribus (manteniendo constantes educación y experiencia).",
      "Simulación de Escenarios: Capacidad de predecir cómo cae la probabilidad de participación laboral al pasar de 0 a 1 hijo, o de 1 a 2 hijos menores, aportando datos duros para políticas de conciliación.",
      "Rigor Matemático: Transición de estimaciones sesgadas a modelos robustos (MCP y Máxima Verosimilitud) para corregir problemas de heterocedasticidad inherentes a los datos de encuestas.",
    ],
    Icon: LineChart,
  },
];uste: Validación de la significatividad conjunta e individual de los parámetros y evaluación del ajuste del modelo.",
    ],
    impactIntro: "",
    impact: [
      "Detección de Discriminación: Se cuantificó la diferencia porcentual exacta de salario entre hombres y mujeres ceteris paribus (manteniendo constantes educación y experiencia).",
      "Simulación de Escenarios: Capacidad de predecir cómo cae la probabilidad de participación laboral al pasar de 0 a 1 hijo, o de 1 a 2 hijos menores, aportando datos duros para políticas de conciliación.",
      "Rigor Matemático: Transición de estimaciones sesgadas a modelos robustos (MCP y Máxima Verosimilitud) para corregir problemas de heterocedasticidad inherentes a los datos de encuestas.",
    ],
    Icon: LineChart,
  },
];

const PROJECTS_BY_SLUG: Record<string, ProjectCase> = PROJECTS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<string, ProjectCase>,
);

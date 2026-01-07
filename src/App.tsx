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
            className="text-xs font-semibold inline-flex items-center gap-1 hover:opacity-80 px-2 py-1 rounded-md border border

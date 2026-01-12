import React, { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, TrendingUp, Layers, FolderKanban, Briefcase, GraduationCap, ChevronDown, Workflow, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ExperienceCard } from "./ExperienceCard";
import { CasosReales } from "../projects/CasosReales";
import { StackTecnologico } from "../stack/StackTecnologico";
import { WorkflowProcesos } from "../workflow/WorkflowProcesos";
import { Card } from "../layout/Card";
import { EXPERIENCES } from "../../data/experiences";
import { PROGRAMS } from "../../data/programs";
import { PROJECTS } from "../../data/projects";
import { PRIMARY_COLOR } from "../../constants";
import type { TabType } from "../../types";

export const Home: React.FC = () => {
  const reduceMotion = useReducedMotion();
  
  // Restaurar la pestaña activa desde sessionStorage
  const savedTab = sessionStorage.getItem('activeTab') as TabType | null;
  // Si la pestaña guardada es "workflow", usar "cv" por defecto ya que workflow está oculto
  const [tab, setTab] = useState<TabType>(savedTab && savedTab !== "workflow" ? savedTab : "cv");
  const [caseStack, setCaseStack] = useState<string>("");
  const [showOlderExp, setShowOlderExp] = useState(false);

  // Guardar la pestaña activa cuando cambia
  useEffect(() => {
    sessionStorage.setItem('activeTab', tab);
  }, [tab]);

  // Restaurar la posición del scroll cuando el tab se restaura o cambia
  useEffect(() => {
    // Solo restaurar si hay un tab guardado (venimos de volver atrás)
    const savedTab = sessionStorage.getItem('activeTab');
    if (savedTab && savedTab === tab) {
      const savedScroll = sessionStorage.getItem(`scrollPosition_${savedTab}`);
      if (savedScroll) {
        // Delay para asegurar que el contenido esté renderizado
        const timer = setTimeout(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo({
                top: parseInt(savedScroll, 10),
                behavior: 'auto'
              });
              sessionStorage.removeItem(`scrollPosition_${savedTab}`);
            });
          });
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [tab]); // Ejecutar cuando cambia el tab

  const primary = PRIMARY_COLOR;

  const rootClass = useMemo(
    () =>
      "relative min-h-[100dvh] bg-[#F9FAFB] text-[#374151] transition-colors duration-300 antialiased pb-20",
    [],
  );

  const experiences = EXPERIENCES;
  const programs = PROGRAMS;

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
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/pablo-lopez-gil-cv.pdf';
              link.download = 'pablo-lopez-gil-cv.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 text-sm font-semibold shadow-sm hover:shadow-md"
            style={{ color: primary }}
            title="Descargar CV en PDF"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Descargar CV</span>
            <span className="sm:hidden">CV</span>
          </button>
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

          {/* PESTAÑA DE PROCESOS OCULTA TEMPORALMENTE - MANTENER PARA REHABILITAR */}
          {/* <button
            type="button"
            className={
              tab === "workflow"
                ? "flex-1 py-3 px-2 rounded-lg bg-white shadow-sm font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
                : "flex-1 py-3 px-2 rounded-lg text-gray-500 hover:text-gray-900 font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
            }
            onClick={() => setTab("workflow")}
          >
            <Workflow
              className="h-4 w-4 shrink-0"
              style={{ color: tab === "workflow" ? primary : undefined }}
            />
            <span style={tab === "workflow" ? { color: primary } : {}} className="whitespace-nowrap">
              Procesos
            </span>
          </button> */}
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
                        className="mt-1.5 h-1.5 w-1.5 bg-black inline-block"
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
                        className="mt-1.5 h-1.5 w-1.5 bg-black inline-block"
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
                        className="mt-1.5 h-1.5 w-1.5 bg-black inline-block"
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
          ) : tab === "cases" ? (
            <motion.div
              key="cases"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <CasosReales
                currentTab={tab}
                primary={primary}
                cases={PROJECTS}
                programs={programs}
                selectedStack={caseStack}
                onSelectStack={setCaseStack}
              />
            </motion.div>
          ) : null}
          {/* CONTENIDO DE PROCESOS OCULTO TEMPORALMENTE - MANTENER PARA REHABILITAR */}
          {/* ) : (
            <motion.div
              key="workflow"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <WorkflowProcesos primary={primary} />
            </motion.div>
          )} */}
        </AnimatePresence>
      </main>
    </div>
  );
};

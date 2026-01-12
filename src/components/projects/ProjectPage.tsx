import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Target, Flame, Zap, BarChart3, Users, Clock, FileText, Settings, TrendingUp, ArrowLeft as ArrowBack } from "lucide-react";
import { Card } from "../layout/Card";
import { Header } from "../layout/Header";
import { getProjectsBySlug } from "../../data/projects";
import { PROGRAMS } from "../../data/programs";
import { PRIMARY_COLOR } from "../../constants";
import type { ImpactBadgeIcon } from "../../types";

const getBadgeIcon = (icon: ImpactBadgeIcon) => {
  switch (icon) {
    case "fire":
      return Flame;
    case "zap":
      return Zap;
    case "chart":
      return BarChart3;
    case "target":
      return Target;
    case "users":
      return Users;
    case "clock":
      return Clock;
    default:
      return Flame;
  }
};

export const ProjectPage: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const { slug } = useParams();
  const navigate = useNavigate();

  const primary = PRIMARY_COLOR;
  const rootClass =
    "min-h-[100dvh] bg-[#F9FAFB] text-[#374151] transition-colors duration-300 antialiased pb-10";

  const projectsBySlug = getProjectsBySlug();
  const project = slug ? projectsBySlug[slug] : undefined;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !project) {
    return (
      <div className={rootClass}>
        <Header 
          title="Proyecto no encontrado"
          showBackButton={true}
          onBack={() => navigate("/")}
        />

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

  // Obtener el nombre de la tecnología para el header
  const technologyName = PROGRAMS.find(p => p.slug === project.stackSlug)?.name || project.title.split(" · ")[0];

  return (
    <div className={rootClass}>
      <Header
        title={technologyName}
        showBackButton={true}
        onBack={() => navigate(-1)}
      />

      <main className="max-w-md mx-auto px-4 pt-6 space-y-8">
        {/* Hero Section con Imagen o Icono */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card className="border-2 overflow-hidden p-0" style={{ borderColor: primary + "20" }}>
            {/* Imagen del encabezado si existe */}
            {project.image ? (
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/45"
                />
                {/* Contenido sobre la imagen - Icono arriba, título debajo (igual que en lista) */}
                <div className="absolute top-3 left-3 right-3 z-10">
                  {/* Icono */}
                  <div className="mb-3">
                    <div
                      className="h-14 w-14 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/90 transition-transform duration-300 hover:scale-110 hover:rotate-3"
                      style={{ color: primary }}
                    >
                      <project.Icon className="h-7 w-7" />
                    </div>
                  </div>
                  {/* Título y badges justo debajo del icono */}
                  <div>
                    <h1 className="font-bold text-white leading-tight text-base mb-4 line-clamp-3 break-words" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 0 1px rgba(0,0,0,0.6)' }}>
                      {project.title}
                    </h1>
                    {project.impactBadges && project.impactBadges.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.impactBadges.map((badge, idx) => {
                          const BadgeIcon = getBadgeIcon(badge.icon);
                          const bgColor = badge.color || primary;
                          
                          return (
                            <div
                              key={idx}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold shadow-lg backdrop-blur-sm"
                              style={{ 
                                backgroundColor: bgColor + "E6",
                                color: "white"
                              }}
                            >
                              <BadgeIcon className="h-3 w-3" />
                              <span>{badge.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Header con icono si no hay imagen */
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100 p-6 pt-6">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ 
                    backgroundColor: primary,
                    color: "white"
                  }}
                >
                  <project.Icon className="h-7 w-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <div 
                    className="text-xs font-semibold mb-1"
                    style={{ color: primary }}
                  >
                    {project.title.split(" · ")[0]}
                  </div>
                  <h1 className="text-lg font-bold text-gray-900 leading-tight">
                    {project.subtitle}
                  </h1>
                </div>
              </div>
            )}

            {/* Contenido principal (si hay imagen, se muestra aquí, si no, continúa después del header) */}
            <div className={project.image ? "p-6 pt-4" : "px-6 pb-6"}>

            {/* Objetivo destacado */}
            <div 
              className="p-4 rounded-xl mb-4"
              style={{ backgroundColor: primary + "08" }}
            >
              <div className="flex items-start gap-2 mb-2">
                <Target className="h-4 w-4 mt-0.5" style={{ color: primary }} />
                <h3 className="text-sm font-bold text-gray-900">Objetivo</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                {project.summary}
              </p>
            </div>

              {/* Tags */}
              {project.tags?.length ? (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Impact Badges solo si no hay imagen (si hay imagen, ya se mostraron arriba) */}
              {!project.image && project.impactBadges && project.impactBadges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.impactBadges.map((badge, idx) => {
                    const BadgeIcon = getBadgeIcon(badge.icon);
                    const bgColor = badge.color || primary;
                    
                    return (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm"
                        style={{ 
                          backgroundColor: bgColor + "CC",
                          color: "white"
                        }}
                      >
                        <BadgeIcon className="h-3.5 w-3.5" />
                        <span>{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Contexto */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <div 
                className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: primary + "15" }}
              >
                <FileText className="h-5 w-5" style={{ color: primary }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Contexto</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              {project.context}
            </p>
          </Card>
        </motion.div>

        {/* Desarrollo */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <div 
                className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: primary + "15" }}
              >
                <Settings className="h-5 w-5" style={{ color: primary }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Desarrollo</h3>
            </div>
            <div className="space-y-4">
              {project.approach.map((x, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-100"
                >
                  <div 
                    className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm"
                    style={{ backgroundColor: primary }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify flex-1 pt-0.5">
                    {x}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Impacto */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
        >
          <Card>
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <div 
                className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: primary + "15" }}
              >
                <TrendingUp className="h-5 w-5" style={{ color: primary }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Impacto</h3>
            </div>
            {project.impactIntro?.trim() && (
              <div className="mb-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed text-justify italic">
                  {project.impactIntro}
                </p>
              </div>
            )}
            <div className="space-y-3">
              {project.impact.map((line, idx) => {
                const i = line.indexOf(":");
                if (i > 0) {
                  const label = line.slice(0, i).trim();
                  const rest = line.slice(i + 1).trim();
                  return (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl border-l-4 hover:shadow-sm transition-all duration-200"
                      style={{ 
                        borderLeftColor: primary,
                        backgroundColor: primary + "05"
                      }}
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <b className="text-gray-900 font-semibold">{label}:</b> {rest}
                      </p>
                    </div>
                  );
                }
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl border-l-4 hover:shadow-sm transition-all duration-200"
                    style={{ 
                      borderLeftColor: primary,
                      backgroundColor: primary + "05"
                    }}
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {line}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        <div className="flex justify-center pt-4 pb-6">
          <button
            onClick={() => {
              // Usar navigate(-1) para volver atrás en el historial
              navigate(-1);
            }}
            className="text-sm font-semibold inline-flex items-center gap-2 px-4 py-3 rounded-xl border-2 hover:shadow-md transition-all duration-200 cursor-pointer"
            style={{ 
              borderColor: primary + "30",
              backgroundColor: primary + "08",
              color: primary 
            }}
            title="Volver a Casos"
          >
            <ArrowBack className="h-4 w-4" />
            Volver a Casos
          </button>
        </div>
      </main>
    </div>
  );
};

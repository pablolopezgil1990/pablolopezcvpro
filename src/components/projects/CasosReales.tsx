import React, { useMemo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FolderKanban, ExternalLink, Flame, Zap, BarChart3, Target, Users, Clock } from "lucide-react";
import { Card } from "../layout/Card";
import type { ProjectCase, Program, ImpactBadgeIcon } from "../../types";

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

// Componente para manejar el estado de cada imagen individualmente
const ProjectCard: React.FC<{
  project: ProjectCase;
  primary: string;
  index: number;
}> = ({ project, primary, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        to={`/proyectos/${project.slug}`}
        className="block group"
        onClick={() => {
          // Guardar la posición actual del scroll y el tab activo antes de navegar
          sessionStorage.setItem(`scrollPosition_${currentTab}`, window.scrollY.toString());
          sessionStorage.setItem('activeTab', currentTab);
        }}
      >
        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 overflow-hidden">
          <div className="relative overflow-hidden">
            {/* Imagen del encabezado si existe y no hay error */}
            {project.image && !imageError && (
              <div className="relative h-44 w-full overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={() => setImageError(true)}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/45"
                />
                {/* Contenido sobre la imagen - Icono arriba, título debajo */}
                <div className="absolute top-3 left-3 right-3 z-10">
                  {/* Botón ver en esquina superior derecha */}
                  <div className="absolute top-0 right-0">
                    <div 
                      className="h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/90 group-hover:shadow-lg backdrop-blur-sm bg-white/70"
                    >
                      <ExternalLink 
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                        style={{ color: primary }} 
                      />
                    </div>
                  </div>
                  {/* Icono */}
                  <div className="mb-3">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ color: primary }}
                    >
                      <project.Icon className="h-5 w-5" />
                    </div>
                  </div>
                  {/* Título y badges justo debajo del icono */}
                  <div>
                    <h4 className="font-bold text-white leading-tight text-sm mb-4 break-words text-justify" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 0 1px rgba(0,0,0,0.6)' }}>
                      {project.title}
                    </h4>
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
            )}

            {/* Header con gradiente (si no hay imagen o si falló) */}
            {(!project.image || imageError) && (
              <div 
                className="p-4 pb-3 relative"
                style={{ 
                  background: `linear-gradient(135deg, ${primary}15 0%, ${primary}05 100%)`
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div
                      className="shrink-0 h-12 w-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ 
                        backgroundColor: primary,
                        color: "white"
                      }}
                    >
                      <project.Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 leading-tight text-sm mb-2 group-hover:text-purple-700 transition-colors break-words text-justify">
                        {project.title}
                      </h4>
                      {project.impactBadges && project.impactBadges.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {project.impactBadges.map((badge, idx) => {
                            const BadgeIcon = getBadgeIcon(badge.icon);
                            const bgColor = badge.color || primary;
                            const textColor = badge.color ? "white" : "white";
                            
                            return (
                              <div
                                key={idx}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold shadow-sm"
                                style={{ 
                                  backgroundColor: bgColor + "CC",
                                  color: textColor
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

                  <div className="shrink-0">
                    <div 
                      className="h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md"
                      style={{ backgroundColor: primary + "20" }}
                    >
                      <ExternalLink 
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                        style={{ color: primary }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contenido */}
            <div className="p-4">
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                {project.summary}
              </p>

              {project.tags?.length ? (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                  {project.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[11px] rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-[11px] rounded-full font-medium">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

interface CasosRealesProps {
  primary: string;
  cases: ProjectCase[];
  programs: Program[];
  selectedStack: string;
  onSelectStack: (v: string) => void;
  currentTab?: string;
}

export const CasosReales: React.FC<CasosRealesProps> = ({
  primary,
  cases,
  programs,
  selectedStack,
  onSelectStack,
  currentTab = "cases",
}) => {
  const location = useLocation();

  // Restaurar la posición del scroll cuando se vuelve a esta página desde un proyecto
  useEffect(() => {
    // Este efecto se ejecuta cuando el componente se monta o cuando cambia la ubicación
    // Solo restaurar si estamos en la ruta raíz y el tab actual es 'cases'
    if (location.pathname === '/' && currentTab === 'cases') {
      const savedScroll = sessionStorage.getItem(`scrollPosition_cases`);
      const savedTab = sessionStorage.getItem('activeTab');
      
      // Solo restaurar si realmente venimos de la página de casos
      if (savedScroll && savedTab === 'cases') {
        // Usar múltiples requestAnimationFrame para asegurar que el DOM esté completamente listo
        const timer = setTimeout(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                window.scrollTo({
                  top: parseInt(savedScroll, 10),
                  behavior: 'auto'
                });
                sessionStorage.removeItem(`scrollPosition_cases`);
              });
            });
          });
        }, 250);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, currentTab]);
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
          Aquí agrupo mis casos para que puedas ver qué hice, cómo lo enfoqué y qué impacto tuvo:
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

        <div className="grid gap-4 mt-6">
          {filtered.map((c, index) => (
            <ProjectCard
              key={c.slug}
              project={c}
              primary={primary}
              index={index}
            />
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
};

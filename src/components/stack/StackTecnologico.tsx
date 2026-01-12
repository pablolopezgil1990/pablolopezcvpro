import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layers, ChevronDown, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import type { Program } from "../../types";

interface StackTecnologicoProps {
  primary: string;
  programs: Program[];
}

export const StackTecnologico: React.FC<StackTecnologicoProps> = ({ primary, programs }) => {
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
          {visiblePrograms.map(({ slug, name, desc, Icon }) => {
            const related = PROJECTS.filter((c) => c.stackSlug === slug);
            return (
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

                    {related.length > 0 && (
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
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {extraPrograms.length > 0 && (
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
        )}
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
};

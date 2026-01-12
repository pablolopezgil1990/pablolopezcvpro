import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Target } from "lucide-react";
import { Card } from "../layout/Card";

interface CasoClave {
  texto: string;
  slug?: string;
}

interface FaseData {
  id: string;
  emoji: string;
  titulo: string;
  color: string;
  descripcion?: string;
  objetivo: string;
  problema: string;
  solucion: string;
  casosClave: CasoClave[];
}

const FASES: FaseData[] = [
      {
        id: "fase1",
        emoji: "📥",
        titulo: "Fase 1: Captura y control de entrada",
        color: "#3B82F6", // azul
        descripcion: "\"Garbage in, garbage out.\" Es decir, si entra basura, sale basura.",
        objetivo: "Garantizar calidad desde el origen.",
        problema: "Entrada libre de datos = caos y ruido",
        solucion: "Formularios estructurados + validación automática (VBA/Macros)",
        casosClave: [
          { texto: "Control de entrada Postventa → 100% eliminación del ruido", slug: "excel-control-entrada" },
        ],
      },
      {
        id: "fase2",
        emoji: "🔄",
        titulo: "Fase 2: Consolidación y limpieza",
        color: "#10B981", // verde
        descripcion: "Aquí los datos dispersos se integran, se normalizan y se depuran.",
        objetivo: "Unificar fuentes heterogéneas.",
        problema: "Múltiples archivos, formatos incompatibles, nomenclaturas cambiantes",
        solucion: "ETL automatizado (Python/Power Query) + diccionarios de mapeo",
        casosClave: [
          { texto: "39K registros de profesorado (6 años)", slug: "python-consolidacion-profesorado" },
          { texto: "+100 informes de encuestas automatizados", slug: "python-encuestas-reporting" },
        ],
      },
      {
        id: "fase3",
        emoji: "🏗️",
        titulo: "Fase 3: Modelado y arquitectura",
        color: "#F59E0B", // naranja
        descripcion: "Definimos cómo se organiza el dato para que pueda escalar y analizarse.",
        objetivo: "Diseñar estructuras escalables.",
        problema: "Datos planos sin relaciones, actualizaciones manuales masivas",
        solucion: "Modelos relacionales (Star Schema) con claves primarias",
        casosClave: [
          { texto: "Modelo estrella para cálculo de profesorado", slug: "power-query-profesorado" },
          { texto: "Migración a Dynamics 365 (PDF → ERP relacional)", slug: "dynamics-consultoria-migracion" },
        ],
      },
      {
        id: "fase4",
        emoji: "📊",
        titulo: "Fase 4: Análisis e insights",
        color: "#8B5CF6", // morado
        descripcion: "Extraemos patrones, respondemos preguntas y generamos insights útiles.",
        objetivo: "Convertir datos en inteligencia.",
        problema: "Datos limpios pero sin interpretación de negocio",
        solucion: "Análisis estadístico avanzado + híbrido cuantitativo/cualitativo + web scraping",
        casosClave: [
          { texto: "Clima laboral Adecco (cuantitativo + sentimiento)", slug: "excel-consultoria-clima-laboral" },
          { texto: "PCA Sistema Nacional de Salud (cientos de indicadores → factores sintéticos)", slug: "stata-sns-pca" },
          { texto: "Web scraping competencia (precios en tiempo real)", slug: "python-web-scraping-competencia" },
        ],
      },
      {
        id: "fase5",
        emoji: "📈",
        titulo: "Fase 5: Visualización y reporting",
        color: "#EF4444", // rojo
        descripcion: "El dato completa su ciclo en forma de decisión y acción.",
        objetivo: "Comunicar para la toma de decisiones.",
        problema: "Dashboards bonitos pero inútiles, reportes estáticos obsoletos",
        solucion: "Dashboards dinámicos + reporting jerarquizado (estratégico/táctico)",
        casosClave: [
          { texto: "Reingeniería modelo ranking (estructura dinámica)", slug: "power-bi-reingenieria-ranking" },
          { texto: "Dashboard marketplace global (multi-país, multidivisa)", slug: "power-bi-marketplace" },
        ],
      },
];

interface WorkflowProcesosProps {
  primary: string;
}

export const WorkflowProcesos: React.FC<WorkflowProcesosProps> = ({ primary }) => {
  const [hoveredFase, setHoveredFase] = useState<string>("fase1");

  return (
    <div className="space-y-6">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div
            className="p-1.5 rounded-lg"
            style={{ backgroundColor: "rgba(107, 76, 95, 0.1)" }}
          >
            <Settings className="h-5 w-5" style={{ color: primary }} />
          </div>
          <h3 className="font-bold text-lg text-gray-900">Las cinco fases del Dato</h3>
        </div>

        <p className="text-sm text-gray-600 mb-6 text-justify">
          ¿Cómo viajan los datos desde el caos hasta la decisión?
          <br />
          Con un proceso en cinco etapas que ordena, analiza y comunica:
        </p>

        {/* Contenedor relativo para la línea conectora */}
        <div className="relative overflow-visible">
          {/* Diagrama del workflow con imagen y áreas de hover invisibles */}
          <div className="relative w-full mb-6 overflow-visible">
            <img
              src="/workflow-diagram.png"
              alt="Diagrama de procesos de datos"
              className="w-full h-auto"
            />
            
            {/* Áreas de hover invisibles sobre la imagen */}
            <div className="absolute inset-0 flex">
              {/* Fase 1 */}
              <motion.div
                className="flex-1 h-full"
                onMouseEnter={() => setHoveredFase("fase1")}
                style={{ cursor: "pointer" }}
              />
              {/* Fase 2 */}
              <motion.div
                className="flex-1 h-full"
                onMouseEnter={() => setHoveredFase("fase2")}
                style={{ cursor: "pointer" }}
              />
              {/* Fase 3 */}
              <motion.div
                className="flex-1 h-full"
                onMouseEnter={() => setHoveredFase("fase3")}
                style={{ cursor: "pointer" }}
              />
              {/* Fase 4 */}
              <motion.div
                className="flex-1 h-full"
                onMouseEnter={() => setHoveredFase("fase4")}
                style={{ cursor: "pointer" }}
              />
              {/* Fase 5 */}
              <motion.div
                className="flex-1 h-full"
                onMouseEnter={() => setHoveredFase("fase5")}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          {/* Panel de información que aparece al hacer hover */}
          <AnimatePresence mode="wait">
            {(() => {
              const fase = FASES.find((f) => f.id === hoveredFase);
              if (!fase) return null;

              const faseIndex = FASES.findIndex((f) => f.id === hoveredFase);
              const faseWidth = 100 / 5; // Cada fase ocupa 20% del ancho
              const lineX = `${(faseIndex + 0.5) * faseWidth}%`; // Centro de la fase

              return (
                <div key={hoveredFase} className="relative">
                  {/* Línea conectora vertical desde la tarjeta hacia arriba hasta la fase */}
                  <AnimatePresence>
                    <motion.div
                      key={hoveredFase}
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="absolute z-10"
                      style={{
                        left: lineX,
                        bottom: "100%",
                        marginBottom: "0px",
                        height: "24px", // Espacio entre diagrama y tarjeta
                        width: "1.5px",
                        minWidth: "1.5px",
                        maxWidth: "1.5px",
                        backgroundColor: fase.color,
                        transformOrigin: "bottom",
                        transform: "translateX(-50%)", // Centrar la línea en el punto X
                        pointerEvents: "none", // No interferir con el hover
                        boxSizing: "border-box",
                      }}
                    />
                  </AnimatePresence>
                  
                  {/* Tarjeta con efecto de barrido tipo ola desde arriba */}
                  <motion.div
                    initial={{ opacity: 0, y: -100, scaleY: 0 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: 20, scaleY: 0.95 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.34, 1.56, 0.64, 1] // Easing tipo "bounce" suave para efecto ola
                    }}
                    style={{ transformOrigin: "top" }}
                  >
                    <Card 
                      className="shadow-md"
                      style={{ 
                        borderColor: fase.color,
                        borderWidth: "1.5px",
                        borderStyle: "solid"
                      }}
                    >
                  {/* Título */}
                  <div className="mb-4">
                    <h3
                      className="font-bold text-base mb-3"
                      style={{ color: fase.color }}
                    >
                      {fase.titulo}
                    </h3>
                    {fase.descripcion && (
                      <p className="text-sm text-gray-600 italic leading-relaxed mb-3">
                        {fase.descripcion}
                      </p>
                    )}
                  </div>

                  {/* Separador con icono de diana */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: fase.color + "15" }}
                      >
                        <Target className="h-4 w-4" style={{ color: fase.color }} />
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        Objetivo
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {fase.objetivo}
                    </p>
                  </div>

                  {/* Casos reales */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                      Casos reales:
                    </p>
                    <ul className="space-y-2">
                      {fase.casosClave.map((caso, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 leading-relaxed"
                        >
                          {caso.slug ? (
                            <Link
                              to={`/proyectos/${caso.slug}`}
                              className="text-sm underline hover:no-underline transition-colors"
                              style={{ color: fase.color }}
                            >
                              {caso.texto}
                            </Link>
                          ) : (
                            <span>{caso.texto}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                    </Card>
                  </motion.div>
                </div>
              );
            })()}
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
};

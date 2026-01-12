import React from "react";

interface WorkflowDiagramProps {
  onFaseHover?: (faseId: string | null) => void;
  hoveredFase?: string | null;
}

const FASES_DIAGRAM = [
  {
    id: "fase1",
    numero: "1",
    titulo: "CAPTURA Y CONTROL",
    color: "#3B82F6", // azul
  },
  {
    id: "fase2",
    numero: "2",
    titulo: "CONSOLIDACIÓN",
    color: "#10B981", // verde
  },
  {
    id: "fase3",
    numero: "3",
    titulo: "MODELADO",
    color: "#F59E0B", // naranja/amarillo
  },
  {
    id: "fase4",
    numero: "4",
    titulo: "ANÁLISIS",
    color: "#8B5CF6", // morado/azul claro
  },
  {
    id: "fase5",
    numero: "5",
    titulo: "VISUALIZACIÓN",
    color: "#EF4444", // rojo
  },
];

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ 
  onFaseHover, 
  hoveredFase 
}) => {
  const hexSize = 70; // Reducido para que quepan todos pegados
  // 3mm de espacio entre hexágonos ≈ 11px (a 96 DPI, 1mm = 3.78px)
  const gapBetweenHexagons = 11; // 3mm en píxeles
  // Los hexágonos están casi pegados, así que el espacio horizontal entre centros es:
  // hexSize (radio) + hexSize * 0.5 (mitad del lado compartido) + gap = hexSize * 1.5 + gap
  const horizontalSpacing = hexSize * 1.5 + gapBetweenHexagons; // Distancia entre centros con 3mm de gap
  const totalWidth = hexSize + (horizontalSpacing * 4); // Primer hexágono + 4 espacios
  const totalHeight = hexSize * 2.5;

  // Función para crear hexágono regular
  const createRegularHexagon = (size: number) => {
    const r = size;
    return `M ${r},0 L ${r * 0.5},${r * 0.866} L ${-r * 0.5},${r * 0.866} L ${-r},0 L ${-r * 0.5},${-r * 0.866} L ${r * 0.5},${-r * 0.866} Z`;
  };

  return (
    <div className="w-full py-8">
      <svg
        width="100%"
        height="auto"
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        {/* Hexágonos de las fases */}
        {FASES_DIAGRAM.map((fase, index) => {
          // Posición X: el primer hexágono empieza en hexSize, luego cada uno se desplaza por horizontalSpacing
          const x = hexSize + (index * horizontalSpacing);
          const y = totalHeight / 2;
          const isHovered = hoveredFase === fase.id;
          
          // Alternar posición vertical para efecto escalonado (1,3,5 arriba; 2,4 abajo)
          const offsetY = index % 2 === 0 ? -12 : 12;
          const currentY = y + offsetY;

          return (
            <g
              key={fase.id}
              onMouseEnter={() => onFaseHover?.(fase.id)}
              onMouseLeave={() => onFaseHover?.(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Hexágono principal sólido de color - sin bordes */}
              <path
                d={createRegularHexagon(hexSize)}
                transform={`translate(${x}, ${currentY})`}
                fill={fase.color}
                opacity={isHovered ? "1" : "0.95"}
                className="transition-all duration-200"
              />

              {/* Número grande dentro del hexágono */}
              <text
                x={x}
                y={currentY + 8}
                textAnchor="middle"
                className="font-bold"
                fontSize="42"
                fontWeight="bold"
                fill="white"
              >
                {fase.numero}
              </text>

              {/* Título debajo del hexágono */}
              <text
                x={x}
                y={currentY + hexSize * 0.866 + 25}
                textAnchor="middle"
                className="font-bold"
                fontSize="10"
                fontWeight="bold"
                fill="#374151"
              >
                {fase.titulo}
              </text>

              {/* Línea conectora blanca delgada (excepto el último) */}
              {index < FASES_DIAGRAM.length - 1 && (() => {
                const nextIndex = index + 1;
                const nextOffsetY = nextIndex % 2 === 0 ? -12 : 12;
                const nextY = y + nextOffsetY;
                const nextX = hexSize + (nextIndex * horizontalSpacing);
                
                // Punto en el borde derecho del hexágono actual (vértice derecho)
                const rightEdgeX = x + hexSize;
                const rightEdgeY = currentY;
                
                // Punto en el borde izquierdo del siguiente hexágono (vértice izquierdo)
                // Con el gap de 3mm, la línea conecta los vértices a través del espacio
                const leftEdgeX = nextX - hexSize;
                const leftEdgeY = nextY;

                return (
                  <line
                    x1={rightEdgeX}
                    y1={rightEdgeY}
                    x2={leftEdgeX}
                    y2={leftEdgeY}
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                );
              })()}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

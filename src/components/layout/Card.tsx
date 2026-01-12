import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className = "", style }) => {
  // Si hay un estilo de borde personalizado, no aplicar el borde por defecto
  const defaultBorderClass = style?.borderColor ? "" : "border border-gray-100";
  
  return (
    <motion.div
      className={`bg-white p-5 rounded-2xl shadow-sm ${defaultBorderClass} ${className}`}
      style={style}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
};

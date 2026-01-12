import React from "react";
import { motion } from "framer-motion";
import { Card } from "../layout/Card";
import type { Experience } from "../../types";

interface ExperienceCardProps extends Experience {
  primary: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  dates,
  role,
  bullets,
  primary,
}) => {
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
            {bullets.map((b, index) => (
              <li key={index}>{b}</li>
            ))}
          </ul>
        ) : null}
      </Card>
    </motion.div>
  );
};

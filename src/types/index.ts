import React from "react";
import {
  Braces,
  FileBarChart2,
  GitBranch,
  LineChart,
  FileSpreadsheet,
  Database,
  Wrench,
  Workflow,
  Share2,
  Boxes,
} from "lucide-react";

export type TabType = "cv" | "stack" | "cases" | "workflow";

export type Experience = {
  company: string;
  dates: string;
  role: string;
  bullets?: string[];
  isOlder?: boolean;
};

export type ProgramIcon = React.ComponentType<{ className?: string }>;

export type Program = {
  slug: string;
  name: string;
  desc: string;
  Icon: ProgramIcon;
};

export type ProjectIcon = React.ComponentType<{ className?: string }>;

export type ImpactBadgeIcon = "fire" | "zap" | "chart" | "target" | "users" | "clock";

export type ImpactBadge = {
  icon: ImpactBadgeIcon;
  label: string;
  color?: string;
};

export type ProjectCase = {
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
  Icon: ProjectIcon;
  impactBadges?: ImpactBadge[];
  image?: string; // URL de la imagen para el encabezado del proyecto
};

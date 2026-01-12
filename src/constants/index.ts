export const PRIMARY_COLOR = "#6B4C5F";

export const ROUTES = {
  HOME: "/",
  PROJECT: (slug: string) => `/proyectos/${slug}`,
} as const;

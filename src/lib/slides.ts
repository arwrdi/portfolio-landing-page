export const slides = [
  { id: "top", label: "Hero", short: "01" },
  { id: "about", label: "About", short: "02" },
  { id: "skills", label: "Skills", short: "03" },
  { id: "experience", label: "Experience", short: "04" },
  { id: "projects", label: "Projects", short: "05" },
  { id: "contact", label: "Contact", short: "06" },
] as const;

export type SlideId = (typeof slides)[number]["id"];

/** Shared full-viewport slide shell for PPT snap behavior */
export const slideClassName =
  "relative flex h-dvh w-full snap-start snap-always flex-col justify-center overflow-hidden px-4 pb-12 pt-20 md:px-8 md:pb-14 md:pt-24";

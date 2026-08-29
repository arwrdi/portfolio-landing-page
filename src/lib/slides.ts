export const slides = [
  { id: "top", label: "Hero", short: "01" },
  { id: "about", label: "About", short: "02" },
  { id: "skills", label: "Skills", short: "03" },
  { id: "experience", label: "Experience", short: "04" },
  { id: "projects", label: "Projects", short: "05" },
  { id: "contact", label: "Contact", short: "06" },
] as const;

export type SlideId = (typeof slides)[number]["id"];

/** Shared section shell for natural document scrolling. */
export const slideClassName =
  "relative flex min-h-[70vh] w-full flex-col justify-center overflow-hidden px-5 py-20 sm:px-8 md:min-h-[78vh] md:px-10 md:py-28";

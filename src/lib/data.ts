export const site = {
  name: "Arwin",
  fullName: "Arwin Renardi",
  email: "arwinrnrdi@gmail.com",
  linkedin: "https://linkedin.com/in/arwin-renardi",
  github: "https://github.com/arwrdi",
  location: "Jakarta, Indonesia",
};

export const techGroups = [
  {
    title: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Firebase",
      "REST APIs",
      "Biometric Auth",
      "Push Notifications",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Clean Architecture",
      "Feature-first",
      "Repository Pattern",
      "Service Pattern",
    ],
  },
  {
    title: "Web & Backend",
    items: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "CodeIgniter",
      "Supabase",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Cloud & Delivery",
    items: [
      "AWS Cognito",
      "OAuth2",
      "Cloud Functions",
      "Midtrans",
      "Google Play",
      "App Store",
      "Vercel",
      "Git",
    ],
  },
] as const;

export const projects = [
  {
    title: "Full-Stack Booking & Payment Platform",
    stack: ["Next.js", "TypeScript", "Supabase", "Midtrans"],
    status: "Live",
    statusDetail: "Production deployment",
    description:
      "End-to-end booking platform with Server Actions, API Routes, PostgreSQL RPC and RLS, concurrency-safe slot booking, and Midtrans payment webhooks.",
    image: "/images/project-booking-collage.png",
    href: "https://dyvara.vercel.app/",
    linkLabel: "Visit live site",
    collage: true,
    speed: 0.35,
  },
  {
    title: "Cooperative Financial App",
    stack: ["Flutter", "REST APIs", "Midtrans"],
    status: "Shipped",
    statusDetail: "Google Play",
    description:
      "Flutter cooperative application spanning 14 feature modules, 44 screens, and approximately 78 API paths across financial and transaction workflows.",
    image: "/images/project-kkba-collage.png",
    href: "https://play.google.com/store/apps/details?id=com.brantas_abipraya.kkba_mobile&hl=id",
    linkLabel: "View on Google Play",
    collage: true,
    speed: -0.25,
  },
  {
    title: "One Abipraya Mobile",
    stack: ["Flutter", "AWS Cognito", "REST APIs"],
    status: "Shipped",
    statusDetail: "Google Play & App Store",
    description:
      "Sole Flutter developer for an enterprise employee app with 15+ business modules, 40+ screens, ~37 REST integrations, SSO, biometrics, GPS attendance, and push notifications.",
    image: "/images/project-one-collage.png",
    href: "https://play.google.com/store/apps/details?id=com.brantas_abipraya.one&hl=id",
    linkLabel: "View on Google Play",
    collage: true,
    speed: 0.45,
  },
  {
    title: "Personal Finance Tracker",
    stack: ["Flutter", "Firebase", "Riverpod"],
    status: "Personal Project",
    statusDetail: "Flutter / Firebase",
    description:
      "Clean Architecture finance app with Riverpod, biometric lock, real-time Firestore household sync, budgets, bills, dashboards, and scheduled FCM reminders.",
    image: "/images/project-finance.png",
    href: null as string | null,
    linkLabel: null as string | null,
    collage: false,
    speed: -0.3,
  },
] as const;

export const experience = [
  {
    role: "Mobile Developer",
    company: "PT Ringkesin Teknologi Indonesia",
    type: "Freelance",
    period: "Dec 2025 - Jul 2026",
    highlights: [
      "Primary Flutter developer for a cooperative financial application spanning 14 feature modules, 44 screens, and ~78 API paths.",
      "Applied feature-first architecture and Riverpod, with Clean Architecture in the purchasing workflow.",
      "Handled testing, debugging, optimization, and mobile store releases.",
    ],
  },
  {
    role: "Web & Mobile Developer",
    company: "PT Brantas Abipraya (Persero)",
    type: "Full-time",
    period: "Jul 2023 - Jul 2026",
    highlights: [
      "Sole Flutter developer for One Abipraya, collaborating with backend/database engineering across 15+ business modules and ~37 REST endpoints.",
      "Delivered 40+ screens including AWS Cognito SSO, biometrics, GPS attendance, payslips, document workflows, and notifications.",
      "Owned mobile implementation, API integration, testing, debugging, and Google Play / App Store releases.",
    ],
  },
  {
    role: "Knowledge Management Officer",
    company: "PT Wijaya Karya (Persero) Tbk",
    type: "Full-time",
    period: "Nov 2020 - Jun 2023",
    highlights: [
      "Produced multimedia, publications, video, and digital content for corporate communication.",
      "Supported visual communication for major infrastructure project reports and engineering publications.",
    ],
  },
] as const;

export const education = {
  school: "President University",
  degree: "B.Eng., Electrical & Electronics Engineering",
  period: "2016 - 2020",
};

export const certifications = [
  {
    title: "Mastering Flutter: Fundamental",
    issuer: "Andalan Teknologi Inovasi",
    period: "Nov 2024",
  },
  {
    title: "Fullstack Web Developer",
    issuer: "Rakamin Academy",
    period: "Jun 2023",
  },
  {
    title: "Certificate Web Development",
    issuer: "Coding Studio",
    period: "Dec 2022",
  },
] as const;

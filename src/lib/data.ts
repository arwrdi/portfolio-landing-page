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
      "BLoC",
      "Riverpod",
      "Provider",
      "GetX",
      "Firebase (Auth, Firestore, FCM, Storage)",
      "CI/CD (Codemagic / GitHub Actions)",
    ],
  },
  {
    title: "Web & Backend",
    items: [
      "Next.js",
      "Laravel",
      "CodeIgniter",
      "Drupal",
      "REST API",
      "Supabase",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Payments & Tools",
    items: [
      "Midtrans",
      "Git",
      "Figma",
      "Adobe XD",
      "Sketch",
      "Agile / Scrum",
    ],
  },
  {
    title: "Deployment",
    items: [
      "Google Play Store release",
      "Apple App Store release",
      "End-to-end release management",
    ],
  },
] as const;

export const projects = [
  {
    title: "Multi-Service Booking Platform",
    stack: ["Next.js", "Supabase", "Midtrans"],
    status: "Live",
    statusDetail: "dyvara.vercel.app",
    description:
      "Full-stack booking platform for beauty studio services with OAuth, worker profiles, service catalog, schedule booking, and payment after service.",
    image: "/images/project-booking-collage.png",
    href: "https://dyvara.vercel.app/",
    linkLabel: "Visit live site",
    collage: true,
    speed: 0.35,
  },
  {
    title: "Cooperative POS & Loan App",
    stack: ["Flutter", "Midtrans"],
    status: "Shipped",
    statusDetail: "Google Play",
    description:
      "Koperasi karyawan app for loans and mutations, plus POS offline-to-online sync with Midtrans and store release management.",
    image: "/images/project-kkba-collage.png",
    href: "https://play.google.com/store/apps/details?id=com.brantas_abipraya.kkba_mobile&hl=id",
    linkLabel: "View on Google Play",
    collage: true,
    speed: -0.25,
  },
  {
    title: "Abipraya Mobile App",
    stack: ["Flutter", "AWS SSO", "Biometric"],
    status: "Shipped",
    statusDetail: "Google Play",
    description:
      "Enterprise mobile app with AWS SSO and biometric login, adopted by about 50% of company employees.",
    image: "/images/project-one-collage.png",
    href: "https://play.google.com/store/apps/details?id=com.brantas_abipraya.one&hl=id",
    linkLabel: "View on Google Play",
    collage: true,
    speed: 0.45,
  },
  {
    title: "Personal Finance Tracker",
    stack: ["Flutter", "Firebase", "Riverpod"],
    status: "Planned",
    statusDetail: "Aug 2026",
    description:
      "Biometric app-lock, real-time budget sync via Firestore, scheduled FCM bill reminders, and fl_chart data visualization.",
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
    period: "2025 - Jul 2026",
    highlights: [
      "Built a Flutter koperasi karyawan app for loans and mutations.",
      "Shipped a POS app with offline-to-online sync and Midtrans payments.",
      "Managed Google Play Store and App Store releases end to end.",
    ],
  },
  {
    role: "Web & Mobile Developer",
    company: "PT Brantas Abipraya (Persero)",
    type: "Full-time",
    period: "2023 - 2025",
    highlights: [
      "Built Abipraya Mobile App (Flutter) with AWS SSO and biometric login, used by about 50% of employees.",
      "Managed the corporate Drupal website.",
      "Developed an Innovation Dashboard with CodeIgniter.",
    ],
  },
  {
    role: "Knowledge Management Officer",
    company: "PT Wijaya Karya (Persero) Tbk",
    type: "Full-time",
    period: "Nov 2020 - Jun 2023",
    highlights: [
      "Edited video for the internal channel Wika Exo.",
      "Designed graphics for national infrastructure project reports and books, including Jakarta International Stadium and Forum Engineering.",
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

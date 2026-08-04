export type PlaceholderTone = "warm" | "sand" | "sage" | "dark";

export interface PlaceholderImage {
  alt: string;
  caption: string;
  tone: PlaceholderTone;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Advantage {
  icon: "heart" | "shield" | "book" | "sun";
  title: string;
  description: string;
}

export interface Program {
  tag: string;
  title: string;
  description: string;
}

export interface DayItem {
  time: string;
  title: string;
  description: string;
  image: PlaceholderImage;
}

export interface Teacher {
  name: string;
  role: string;
  bio: string;
  image: PlaceholderImage;
}

export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: PlaceholderImage;
    stats: { value: string; label: string }[];
  };
  advantages: {
    heading: string;
    subheading: string;
    items: Advantage[];
  };
  about: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    highlights: string[];
    image: PlaceholderImage;
  };
  programs: {
    heading: string;
    subheading: string;
    items: Program[];
  };
  dayInLife: {
    heading: string;
    subheading: string;
    items: DayItem[];
  };
  gallery: {
    heading: string;
    subheading: string;
    images: PlaceholderImage[];
  };
  teachers: {
    heading: string;
    subheading: string;
    items: Teacher[];
  };
  testimonials: {
    heading: string;
    subheading: string;
    items: Testimonial[];
  };
  faq: {
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  booking: {
    heading: string;
    subheading: string;
    note: string;
    ageOptions: string[];
    successTitle: string;
    successText: string;
  };
  contacts: {
    heading: string;
    subheading: string;
    address: string;
    phone: string;
    workingHours: string;
    whatsappUrl: string;
    telegramUrl: string;
    mapImage: PlaceholderImage;
  };
  footer: {
    description: string;
    copyright: string;
  };
  whatsapp: {
    url: string;
    label: string;
  };
}

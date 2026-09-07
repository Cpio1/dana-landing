export type IconName =
  | "clock"
  | "users"
  | "language"
  | "grid"
  | "camera"
  | "utensils"
  | "music"
  | "dance"
  | "puzzle"
  | "cap"
  | "palette"
  | "truck"
  | "file"
  | "external-link"
  | "phone"
  | "mail"
  | "map-pin"
  | "whatsapp"
  | "instagram"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "arrow-right"
  | "check";

export interface ImageAsset {
  /** Path under /public, e.g. "/images/hero.jpg". Leave empty for a neutral placeholder. */
  src?: string;
  alt: string;
  caption?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface InfoItem {
  icon: IconName;
  label: string;
  value: string;
}

export interface ActivityItem {
  icon: IconName;
  title: string;
}

export interface DocumentItem {
  title: string;
  href: string;
}

export interface OfficialInfoItem {
  label: string;
  value: string;
}

export interface SiteContent {
  brand: {
    name: string;
  };
  nav: NavLink[];
  header: {
    ctaLabel: string;
    ctaHref: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    image: ImageAsset;
  };
  about: {
    heading: string;
    goalTitle: string;
    goalText: string;
    principleTitle: string;
    principleText: string;
  };
  keyInfo: {
    heading: string;
    items: InfoItem[];
  };
  nutrition: {
    heading: string;
    title: string;
    meals: string[];
    image: ImageAsset;
  };
  transport: {
    enabled: boolean;
    heading: string;
    text: string;
  };
  activities: {
    heading: string;
    items: ActivityItem[];
  };
  gallery: {
    heading: string;
    subheading: string;
    images: ImageAsset[];
  };
  officialInfo: {
    heading: string;
    items: OfficialInfoItem[];
  };
  documents: {
    heading: string;
    items: DocumentItem[];
  };
  contacts: {
    heading: string;
    phone: string;
    email: string;
    address: string;
    workingHours: string;
    whatsappUrl: string;
    instagramUrl: string;
    mapImage: ImageAsset;
  };
  footer: {
    description: string;
    copyright: string;
  };
}

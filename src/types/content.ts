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
  | "chevron-down"
  | "arrow-right"
  | "check"
  | "folder"
  | "pdf"
  | "doc";

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
    images: ImageAsset[];
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
    /** Opens in a new tab — the folder link is external (Google Drive), not an on-site document. */
    attestationTitle: string;
    attestationHref: string;
  };
  contacts: {
    heading: string;
    /** Leave unset until a real phone number is available — do not fill with placeholder data. */
    phone?: string;
    /** Leave unset until a real email is available — do not fill with placeholder data. */
    email?: string;
    address: string;
    workingHours: string;
    /** Leave unset until a real WhatsApp number is available. */
    whatsappUrl?: string;
    instagramUrl: string;
    instagramHandle: string;
    mapImage: ImageAsset;
  };
  footer: {
    description: string;
    copyright: string;
  };
}

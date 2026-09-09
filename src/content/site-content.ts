import type { SiteContent } from "@/types/content";
import { galleryPhotos } from "@/content/gallery-photos";

// Барлық мәтін мен деректер осы файлда. Нақты фотосуреттерді қосу үшін
// тиісті ImageAsset объектісіне "src" өрісін қосыңыз (мысалы, "/images/hero.jpg"),
// суретті "public" қалтасына салыңыз. "src" болмаса, орнына бейтарап placeholder көрсетіледі.
export const siteContent: SiteContent = {
  brand: {
    name: "Дана",
  },
  nav: [
    { label: "О балабақша", href: "#about" },
    { label: "Тамақтану", href: "#nutrition" },
    { label: "Қосымша сабақтар", href: "#activities" },
    { label: "Құжаттар", href: "#documents" },
    { label: "Фотосуреттер", href: "#gallery" },
    { label: "Байланыс", href: "#contacts" },
  ],
  header: {
    ctaLabel: "Байланысу",
    ctaHref: "#contacts",
  },
  hero: {
    title: "«Дана» балабақшасы",
    subtitle:
      "Балаңызға жылы, қауіпсіз және дамытушы орта. Күн тәртібі, тамақтану және сабақтар туралы толық ақпаратты осы жерден табасыз.",
    ctaLabel: "Бізбен байланысу",
    ctaHref: "#contacts",
    image: {
      src: "/photo/main-image.jpeg",
      alt: "«Дана» балабақшасының ғимараты немесе балалардың ойын сәті",
      caption: "Балабақша фотосы",
    },
  },
  about: {
    heading: "Балабақша туралы",
    goalTitle: "Мекеменің мақсаты",
    goalText:
      "«Дана» балабақшасының басты мақсаты — әр баланың жас ерекшелігін, мінезін, қызығушылығын және жеке қажеттіліктерін ескере отырып, оның жан-жақты дамуына жағдай жасау. Біз балаларға қауіпсіз, жайлы және мейірімді орта қалыптастырып, білім мен тәрбиені ойын, қарым-қатынас және шығармашылық арқылы береміз.",
    principleTitle: "Балабақша ұстанымы",
    principleText:
      "Біз әр баланың қайталанбас тұлға екенін түсінеміз, сондықтан барлық балаға бірдей тәсіл қолданбаймыз. Тәрбиешілер әр баланың қабілеті мен даму қарқынына қарай жеке көзқарас қалыптастырады, оның өзіне деген сенімін арттырып, еркін ойлауына, қарым-қатынас жасауына және жаңа нәрселерді қызығушылықпен үйренуіне көмектеседі.",
  },
  keyInfo: {
    heading: "Негізгі ақпарат",
    items: [
      { icon: "users", label: "Балалардың жасы", value: "2 – 6 жас" },
      { icon: "clock", label: "Жұмыс уақыты", value: "Дс–Жм, 7:30–19:00" },
      { icon: "language", label: "Оқыту тілі", value: "Қазақ, орыс тілдері" },
      { icon: "grid", label: "Топтар саны", value: "6 топ" },
      { icon: "camera", label: "Бейнебақылау", value: "Тәулік бойы, барлық топтарда" },
      { icon: "utensils", label: "Тамақтану", value: "Күніне 4 рет, өз асханасы" },
    ],
  },
  nutrition: {
    heading: "Тамақтану",
    title: "4 реттік тамақтану",
    meals: ["Таңғы ас", "Түскі ас", "Бесін ас", "Кешкі ас"],
    images: [
      { src: "/photo/eat-image1.jpeg", alt: "Балабақша асханасындағы тағам" },
      { src: "/photo/eat-image2.jpeg", alt: "Балабақша асханасындағы тағам" },
      { src: "/photo/eat-image3.jpeg", alt: "Балабақша асханасындағы тағам" },
      { src: "/photo/eat-image4.jpeg", alt: "Балабақша асханасындағы тағам" },
    ],
  },
  transport: {
    enabled: true,
    heading: "Балабақшаға жеткізу",
    text: "Балаларды таңертең балабақшаға жеткізу және кешке үйге апару қызметі.",
  },
  activities: {
    heading: "Қосымша сабақтар",
    items: [
      { icon: "music", title: "Музыка" },
      { icon: "dance", title: "Би" },
      { icon: "language", title: "Ағылшын тілі" },
      { icon: "puzzle", title: "Логика" },
      { icon: "cap", title: "Мектепке дайындық" },
      { icon: "palette", title: "Шығармашылық" },
    ],
  },
  gallery: {
    heading: "Фотосуреттер",
    subheading: "Балабақшаның күнделікті сәттері",
    images: galleryPhotos,
  },
  officialInfo: {
    heading: "Мекеме туралы ресми ақпарат",
    items: [
      { label: "Мекеменің типі", value: "Жеке меншік балабақша" },
      {
        label: "Мекеменің мемлекеттік тілдегі толық атауы",
        value: "«Дана» жеке балабақшасы» жауапкершілігі шектеулі серіктестігі",
      },
      { label: "Мекеменің заңды формасы", value: "Жауапкершілігі шектеулі серіктестік" },
      { label: "БСН", value: "000000000000" },
      { label: "Заңды мекенжай", value: "Алматы қ., Мысал көшесі, 12" },
    ],
  },
  documents: {
    heading: "Құжаттар",
    attestationTitle: "Аттестаттау құжаттары",
    attestationHref:
      "https://drive.google.com/drive/folders/1nAAowEiyBXjwDgTEpnLtews80EHAselS",
  },
  contacts: {
    heading: "Бізбен қалай байланысуға болады",
    phone: "+7 (700) 123-45-67",
    email: "info@dana-balabakshasy.kz",
    address: "Алматы қ., Мысал көшесі, 12",
    workingHours: "Дс–Жм: 7:30–19:00",
    whatsappUrl: "https://wa.me/77001234567",
    instagramUrl: "https://instagram.com/dana_balabakshasy",
    mapImage: {
      alt: "«Дана» балабақшасының орналасқан жері",
      caption: "Карта",
    },
  },
  footer: {
    description: "«Дана» балабақшасы — балаларға жылу, қамқорлық және даму.",
    copyright: "«Дана» балабақшасы. Барлық құқықтар қорғалған.",
  },
};

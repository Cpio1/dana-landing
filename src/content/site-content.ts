import type { SiteContent } from "@/types/content";
import { galleryPhotos } from "@/content/gallery-photos";

// Барлық мәтін мен деректер осы файлда. Нақты фотосуреттерді қосу үшін
// тиісті ImageAsset объектісіне "src" өрісін қосыңыз (мысалы, "/images/hero.jpg"),
// суретті "public" қалтасына салыңыз. "src" болмаса, орнына бейтарап placeholder көрсетіледі.
export const siteContent: SiteContent = {
  brand: {
    name: "«Дана 2009» бөбекжай-балабақшасы",
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
    title: "«Дана 2009» бөбекжай-балабақшасы",
    subtitle:
      "Балаңызға жылы, қауіпсіз және дамытушы орта. Күн тәртібі, тамақтану және сабақтар туралы толық ақпаратты осы жерден табасыз.",
    ctaLabel: "Бізбен байланысу",
    ctaHref: "#contacts",
    image: {
      src: "/photo/main-image.jpeg",
      alt: "«Дана 2009» бөбекжай-балабақшасының ғимараты немесе балалардың ойын сәті",
      caption: "Балабақша фотосы",
    },
  },
  about: {
    heading: "Балабақша туралы",
    goalTitle: "Мекеменің мақсаты",
    goalText:
      "«Дана 2009» бөбекжай-балабақшасының басты мақсаты — әр баланың жас ерекшелігін, мінезін, қызығушылығын және жеке қажеттіліктерін ескере отырып, оның жан-жақты дамуына жағдай жасау. Біз балаларға қауіпсіз, жайлы және мейірімді орта қалыптастырып, білім мен тәрбиені ойын, қарым-қатынас және шығармашылық арқылы береміз.",
    principleTitle: "Балабақша ұстанымы",
    principleText:
      "Біз әр баланың қайталанбас тұлға екенін түсінеміз, сондықтан барлық балаға бірдей тәсіл қолданбаймыз. Тәрбиешілер әр баланың қабілеті мен даму қарқынына қарай жеке көзқарас қалыптастырады, оның өзіне деген сенімін арттырып, еркін ойлауына, қарым-қатынас жасауына және жаңа нәрселерді қызығушылықпен үйренуіне көмектеседі.",
  },
  keyInfo: {
    heading: "Негізгі ақпарат",
    items: [
      { icon: "users", label: "Балалардың жасы", value: "2 – 5 жас" },
      { icon: "clock", label: "Жұмыс уақыты", value: "08:00–18:00" },
      { icon: "language", label: "Оқыту тілі", value: "Қазақ, орыс тілдері" },
      { icon: "grid", label: "Топтар саны", value: "3 топ" },
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
    address: "Алматы облысы, Іле ауданы, ҚазЦИК кенті, Достық көшесі, 1",
    workingHours: "08:00–18:00",
    instagramUrl: "https://www.instagram.com/dana.balabaksha2023/",
    instagramHandle: "@dana.balabaksha2023",
    mapImage: {
      alt: "«Дана 2009» бөбекжай-балабақшасының орналасқан жері",
      caption: "Карта",
    },
  },
  footer: {
    description: "«Дана 2009» бөбекжай-балабақшасы — балаларға жылу, қамқорлық және даму.",
    copyright: "«Дана 2009» бөбекжай-балабақшасы. Барлық құқықтар қорғалған.",
  },
};

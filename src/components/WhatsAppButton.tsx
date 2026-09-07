import { siteContent } from "@/content/site-content";
import { Icon } from "@/components/ui/Icon";

export function WhatsAppButton() {
  const { contacts } = siteContent;

  return (
    <a
      href={contacts.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-қа жазу"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 lg:hidden"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
    </a>
  );
}

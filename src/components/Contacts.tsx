import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";
import { WaveDivider } from "@/components/ui/WaveDivider";
import type { IconName } from "@/types/content";

export function Contacts() {
  const { contacts } = siteContent;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contacts.address)}&output=embed`;

  const rows: { icon: IconName; label: string; value: string; href: string }[] = [
    {
      icon: "phone",
      label: "Телефон",
      value: contacts.phone,
      href: `tel:${contacts.phone.replace(/[^\d+]/g, "")}`,
    },
    { icon: "mail", label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: "map-pin", label: "Мекенжай", value: contacts.address, href: mapSrc },
    { icon: "whatsapp", label: "WhatsApp", value: "Хабарласу", href: contacts.whatsappUrl },
    { icon: "instagram", label: "Instagram", value: "@dana_balabakshasy", href: contacts.instagramUrl },
  ];

  return (
    <section id="contacts" className="scroll-mt-20 relative overflow-hidden bg-pastel-blue py-16 sm:py-20">
      <Decor name="cloud" className="absolute right-8 top-8 h-8 w-8 text-blue/30 sm:right-16" />
      <Decor name="heart" className="absolute left-6 bottom-10 h-3.5 w-3.5 text-primary/35" />

      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <h2 className="font-heading text-2xl leading-tight text-ink sm:text-3xl">
              {contacts.heading}
            </h2>
            <p className="mt-2 text-ink-soft">{contacts.workingHours}</p>

            <ul className="mt-8 flex flex-col gap-4">
              {rows.map((row) => (
                <li key={row.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg text-primary shadow-sm shadow-ink/5">
                    <Icon name={row.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {row.label}
                    </p>
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-ink transition-colors duration-200 hover:text-primary"
                    >
                      {row.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm shadow-ink/5 lg:aspect-auto lg:h-full">
            <iframe
              src={mapSrc}
              title="Карта: балабақшаның орналасқан жері"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full min-h-[280px] border-0"
            />
          </div>
        </Reveal>
      </Container>

      <WaveDivider color="var(--color-bg)" />
    </section>
  );
}

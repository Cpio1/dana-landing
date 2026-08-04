import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";

export function ContactsMap() {
  const { contacts } = siteContent;

  return (
    <section id="contacts" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="-rotate-2 inline-block w-fit font-hand text-2xl font-bold text-coral">
              Контакты
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              {contacts.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-ink-soft">{contacts.subheading}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-3 rounded-2xl border-2 border-ink bg-paper px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-yellow text-base">
                  📍
                </span>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                    Адрес
                  </dt>
                  <dd className="text-base font-bold text-ink">{contacts.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border-2 border-ink bg-paper px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-blue text-base">
                  ☎
                </span>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                    Телефон
                  </dt>
                  <dd>
                    <a
                      href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}
                      className="text-base font-bold text-ink transition-colors duration-200 hover:text-coral"
                    >
                      {contacts.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border-2 border-ink bg-paper px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-green text-base">
                  🕒
                </span>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                    Часы работы
                  </dt>
                  <dd className="text-base font-bold text-ink">{contacts.workingHours}</dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-green px-6 py-3 text-sm font-bold text-paper shadow-[3px_3px_0_0_var(--color-ink)] transition-transform duration-150 hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
              <a
                href={contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-blue px-6 py-3 text-sm font-bold text-paper shadow-[3px_3px_0_0_var(--color-ink)] transition-transform duration-150 hover:-translate-y-0.5"
              >
                Telegram
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full">
            <PlaceholderPhoto
              image={contacts.mapImage}
              className="h-full w-full"
              rounded="blob-4"
            />
            <span
              aria-hidden="true"
              className="animate-float absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full border-2 border-ink bg-coral text-xl text-paper shadow-[3px_3px_0_0_var(--color-ink)]"
            >
              📍
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

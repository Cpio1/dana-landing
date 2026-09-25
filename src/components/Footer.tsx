import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";

export function Footer() {
  const { brand, footer, contacts } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg">
      <Decor name="star" className="absolute right-10 top-6 h-3 w-3 text-yellow/50" />
      <Decor name="flower" className="absolute right-4 bottom-4 h-6 w-6 text-coral opacity-45 sm:right-10" />
      <Decor name="balloon" className="absolute hidden xl:block left-8 top-8 h-8 w-8 text-blue opacity-45" />
      <Decor name="dot" className="absolute hidden xl:block right-24 bottom-10 h-2 w-2 text-green/45" />
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="flex max-w-xs items-start gap-2 font-heading text-base font-semibold leading-snug text-ink">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            {brand.name}
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            {footer.description}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-ink-soft">
          <span>{contacts.address}</span>
          <span>{contacts.workingHours}</span>
        </div>

        <div className="flex items-center gap-3">
          {contacts.whatsappUrl && (
            <a
              href={contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft transition-colors duration-200 hover:text-primary"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
            </a>
          )}
          <a
            href={contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-primary"
          >
            <Icon name="instagram" className="h-4 w-4" />
            {contacts.instagramHandle}
          </a>
        </div>
      </Container>

      <Container className="border-t border-border py-5">
        <p className="text-xs text-ink-soft/80">
          © {year} {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}

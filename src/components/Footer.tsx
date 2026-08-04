import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function Footer() {
  const { brand, nav, footer, contacts } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <WaveDivider color="var(--color-ink)" />

      <Container className="flex flex-col gap-8 pb-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 font-heading text-xl font-bold text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream/40 bg-yellow text-base">
              🌻
            </span>
            {brand.name}
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            {footer.description}
          </p>
        </div>

        <nav
          aria-label="Навигация в футере"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-cream/75"
        >
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-yellow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-sm text-cream/75">
          <a
            href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}
            className="font-bold transition-colors duration-200 hover:text-yellow"
          >
            {contacts.phone}
          </a>
          <span>{contacts.address}</span>
        </div>
      </Container>

      <Container className="border-t-2 border-cream/15 py-6">
        <p className="text-xs text-cream/45">
          © {year} {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}

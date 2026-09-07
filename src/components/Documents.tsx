import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Documents() {
  const { documents } = siteContent;

  return (
    <section id="documents" className="scroll-mt-20 bg-bg py-16 sm:py-20">
      <Container>
        <SectionHeading heading={documents.heading} />

        <Reveal delay={0.05}>
          <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border">
            {documents.items.map((doc) => (
              <li
                key={doc.title}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <span className="flex items-center gap-3 text-sm font-medium text-ink">
                  <Icon name="file" className="h-4 w-4 shrink-0 text-ink-soft" />
                  {doc.title}
                </span>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-bg-alt"
                >
                  Ашу
                  <Icon name="external-link" className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

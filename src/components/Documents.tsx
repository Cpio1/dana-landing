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
          <a
            href={documents.attestationHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-border px-5 py-4 transition-colors duration-200 hover:bg-bg-alt"
          >
            <span className="flex items-center gap-3 text-sm font-medium text-ink">
              <Icon name="folder" className="h-4 w-4 shrink-0 text-primary" />
              {documents.attestationTitle}
            </span>
            <Icon name="external-link" className="h-3.5 w-3.5 shrink-0 text-ink-soft" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

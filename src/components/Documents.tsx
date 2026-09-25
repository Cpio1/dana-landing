import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Decor } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Documents() {
  const { documents } = siteContent;

  return (
    <section id="documents" className="scroll-mt-20 relative overflow-hidden bg-bg py-16 sm:py-20">
      <Decor name="pencil" className="absolute right-6 top-6 h-7 w-7 text-yellow opacity-70 sm:right-12 sm:top-8" />
      <Decor name="block" className="absolute hidden xl:block left-8 bottom-12 h-8 w-8 text-coral opacity-45" />
      <Decor name="ring" className="absolute hidden xl:block right-10 bottom-10 h-6 w-6 text-orange/45" />
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

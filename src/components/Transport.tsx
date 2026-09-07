import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

/** Renders nothing if the service is not offered — toggle via site-content.ts (transport.enabled). */
export function Transport() {
  const { transport } = siteContent;
  if (!transport.enabled) return null;

  return (
    <section id="transport" className="scroll-mt-20 bg-pastel-mint py-10 sm:py-12">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-bg p-6 shadow-sm shadow-ink/5 sm:flex-row sm:items-center sm:gap-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green/12 text-green">
              <Icon name="truck" className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-heading text-lg text-ink">{transport.heading}</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {transport.text}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

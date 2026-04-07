import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { identitySectionConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const IdentitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.identity-reveal');
    const triggers: ScrollTrigger[] = [];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 36 });
      const trigger = ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: Math.min(index * 0.05, 0.2),
            ease: 'power3.out',
          });
        },
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  if (!identitySectionConfig.title) return null;

  return (
    <section
      ref={sectionRef}
      id="identity"
      className="bg-kaleo-sand px-4 pb-24 sm:px-6 md:pb-28 lg:px-8 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="identity-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-7 md:p-8">
            <p className="mt-5 font-display text-[2rem] leading-tight text-kaleo-earth md:text-[2.4rem]">
              {identitySectionConfig.motto}
            </p>
          </article>

          <article className="identity-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-7 md:p-8">
            <p className="mt-5 font-body text-base leading-8 text-kaleo-earth/72 md:text-lg">
              {identitySectionConfig.credo}
            </p>
          </article>
        </div>

        <div className="identity-reveal mt-8 rounded-[32px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-7 md:p-10">
          <div className="mb-8 flex flex-col gap-3 border-b border-kaleo-earth/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                Музыкальная часть
              </p>
              <h3 className="mt-3 font-display text-[2.3rem] text-kaleo-earth md:text-[3rem]">
                {identitySectionConfig.anthemTitle}
              </h3>
            </div>
            <p className="max-w-xl font-body text-sm leading-7 text-kaleo-earth/55">
              На слова песни Юлии Савичевой «Если в сердце живет любовь»
            </p>
          </div>

          <div className="max-h-[44rem] overflow-y-auto rounded-[26px] border border-kaleo-earth/10 bg-kaleo-sand/70 p-5 md:p-6">
            <div className="space-y-8">
              {identitySectionConfig.anthemSections.map((section) => (
                <section key={`${section.label}-${section.lines[0]}`}>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                    {section.label}
                  </p>
                  <div className="mt-4 space-y-1.5">
                    {section.lines.map((line, index) => (
                      <p
                        key={`${section.label}-${index}`}
                        className="font-body text-sm leading-7 text-kaleo-earth/72 md:text-base"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, FileText, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const methodGuideUrl = `${import.meta.env.BASE_URL}Методичка онлайн-недели.pdf`;

const InstagramGuide = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.instagram-guide-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="instagram-guide"
      className="border-t border-kaleo-earth/10 bg-kaleo-sand px-4 py-24 sm:px-6 md:py-32 lg:px-8 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <p className="instagram-guide-reveal font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
            Instagram-активности
          </p>
          <h2 className="instagram-guide-reveal mt-4 font-display text-headline text-kaleo-earth">
            Instagram-методичка
          </h2>
        </div>

        <div className="instagram-guide-reveal overflow-hidden rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-kaleo-cream md:px-8 md:py-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand text-kaleo-terracotta">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-earth/42">Ресурс</p>
                <h3 className="font-display text-3xl text-kaleo-earth">Методичка онлайн-недели</h3>
              </div>
            </div>

            <ChevronDown
              className={`h-5 w-5 flex-none text-kaleo-earth/45 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} border-t border-kaleo-earth/10 px-5 py-5 md:px-8 md:py-8`}>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-kaleo-earth/10 bg-kaleo-sand px-3 py-1 font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                  <FileText className="h-3.5 w-3.5" />
                  PDF
                </div>
              </div>

              <a
                href={methodGuideUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-kaleo-earth/15 bg-kaleo-sand px-5 py-3 font-body text-sm text-kaleo-earth transition hover:border-kaleo-terracotta hover:text-kaleo-terracotta"
              >
                Открыть в новой вкладке
              </a>
            </div>

            <div
              data-lenis-prevent
              className="overflow-hidden rounded-[24px] border border-kaleo-earth/10 bg-white"
            >
              <iframe
                src={methodGuideUrl}
                title="Методичка онлайн-недели"
                className="h-[72vh] min-h-[560px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGuide;

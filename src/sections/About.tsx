import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!aboutConfig.headline) return null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealItems = section.querySelectorAll('.about-reveal');
    revealItems.forEach((el, i) => {
      gsap.set(el, { opacity: 0, y: 50 });
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: Math.min(i * 0.04, 0.24),
            ease: 'power3.out',
          });
        },
      });
      triggersRef.current.push(trigger);
    });

    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full border-t border-kaleo-earth/10 bg-kaleo-sand px-4 py-24 sm:px-6 md:py-28 lg:px-8 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 border-b border-kaleo-earth/10 pb-10 md:mb-16 md:pb-12">
          <p className="about-reveal font-body mb-5 text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
            {aboutConfig.label}
          </p>
          <h2 className="about-reveal font-display mb-8 text-4xl text-kaleo-earth md:text-5xl lg:text-6xl">
            {aboutConfig.headline}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            {aboutConfig.intro.map((paragraph) => (
              <p key={paragraph} className="about-reveal font-body max-w-2xl text-base leading-8 text-kaleo-earth/70 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-14 grid gap-6 rounded-[28px] border border-kaleo-earth/10 bg-kaleo-cream/65 p-6 md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="about-reveal">
            <p className="font-body mb-4 text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">{aboutConfig.historyTitle}</p>
            <h3 className="font-display text-2xl text-kaleo-earth md:text-3xl">Как всё начиналось</h3>
          </div>
          <div className="space-y-4">
            {aboutConfig.history.map((paragraph) => (
              <p key={paragraph} className="about-reveal font-body text-base leading-8 text-kaleo-earth/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <div className="about-reveal mb-8 flex items-center justify-between gap-4 border-b border-kaleo-earth/10 pb-4">
            <h3 className="font-display text-2xl text-kaleo-earth md:text-3xl">Традиции ГНОУ</h3>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-earth/40">{aboutConfig.traditions.length} направлений традиций</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aboutConfig.traditions.map((tradition, index) => (
              <article
                key={tradition.title}
                className="about-reveal rounded-[28px] border border-kaleo-earth/10 bg-kaleo-cream/65 p-6"
              >
                <p className="font-body mb-4 text-xs uppercase tracking-[0.2em] text-kaleo-earth/35">{String(index + 1).padStart(2, '0')}</p>
                <h4 className="mb-4 font-display text-2xl text-kaleo-earth">{tradition.title}</h4>
                <p className="font-body text-sm leading-7 text-kaleo-earth/65">{tradition.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-reveal grid border-t border-kaleo-earth/10 pt-8 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-body text-base leading-8 text-kaleo-earth/56 md:text-lg">
              {aboutConfig.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

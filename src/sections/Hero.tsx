import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (!section || !image || !text) return;

    gsap.fromTo(image, { scale: 1.08, opacity: 0.4 }, { scale: 1, opacity: 1, duration: 1.8, ease: 'power3.out' });
    gsap.fromTo(text.children, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out' });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.set(image, { y: self.progress * 120 });
        gsap.set(text, { y: self.progress * -40 });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  if (!heroConfig.title) return null;

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-kaleo-charcoal">
      <div ref={imageRef} className="absolute inset-0">
        <img
          src={heroConfig.backgroundImage}
          alt={heroConfig.backgroundAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0.28),rgba(28,28,28,0.72)_55%,rgba(234,228,217,0.14))]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <div ref={textRef} className="max-w-4xl text-kaleo-cream">
          <p className="font-body text-xs uppercase tracking-[0.28em] text-kaleo-cream/70">
            {heroConfig.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display">{heroConfig.title}</h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-7 text-kaleo-cream/78 md:text-lg">
            {heroConfig.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroConfig.detailChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-kaleo-cream/20 bg-kaleo-cream/10 px-4 py-2 font-body text-xs uppercase tracking-[0.18em] text-kaleo-cream/78"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

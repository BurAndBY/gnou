import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: 'Сайт виртуальной экотропы', href: 'https://burandby.github.io/ecoroute' },
  { label: 'Telegram-бот', href: 'https://t.me/ecoroutbg_bot' },
];

const highlights = [
  'С 2016 года на территории ГУО «Боровлянской гимназия» эксплуатируется экологическая тропа. С момента ее создания на данной учебно-практической площадке систематически проводятся экскурсии, трудовые десанты, экологические акции и уроки под открытым небом.',
  'В связи с тем, что в 2026 году нашей экологической тропе исполняется 10 лет, мы решили создать новый продукт — виртуальную тропу, а также виртуального помощника к ней (чат-бота).',
  'Актуальность разработки виртуальной экотропы и чат-бота-помощника обусловлена необходимостью адаптации экологического образования к современным условиям. В условиях цифровизации и широкого распространения информационных технологий важно обеспечить доступность и привлекательность образовательных ресурсов для учащихся.',
  'Представляем вам два методических продукта: виртуальную экологическую тропу и чат-бота. Давайте подробнее рассмотрим каждый из них.',
  'Виртуальная экологическая тропа представляет собой инновационный подход, сочетающий технологии дополненной реальности и интерактивное обучение для повышения экологической осведомленности и развития функциональной грамотности.',
  'Её основные принципы включают доступность, интерактивность и погружение в природную среду, обеспечивая тем самым глубокое понимание экологических процессов и устойчивого образа жизни.',
];

const examples = [
  'Интерактивное обучение: виртуальная экологическая тропа позволяет учащимся исследовать природу в безопасной среде, повышая интерес к экологии.',
  'Интеграция знаний: использование мультимедийных материалов на тропе способствует глубокому усвоению теоретических знаний через практические задания и задачи.',
  'Разноуровневый подход: тропа адаптируется под разные возрастные категории и уровни подготовки учащихся, обеспечивая индивидуализацию обучения.',
];

const anniversaryImage = `${import.meta.env.BASE_URL}images/photo_2026-04-07_10-17-42.jpg`;

const EcoRoutePanel = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.eco-reveal');
    const triggers: ScrollTrigger[] = [];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 34 });
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

  return (
    <section
      ref={sectionRef}
      id="eco-route"
      className="border-t border-kaleo-earth/10 bg-kaleo-sand px-4 py-24 sm:px-6 md:py-28 lg:px-8 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-4xl">
          <p className="eco-reveal font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
            Экологическое направление
          </p>
          <h2 className="eco-reveal mt-4 font-display text-headline text-kaleo-earth">
            Перспективная территория: экологическая тропа от реальности к виртуальности
          </h2>
        </div>

        <div className="eco-reveal rounded-[32px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-7 md:p-10">
          <div className="mb-8 grid gap-6 rounded-[28px] border border-kaleo-earth/10 bg-kaleo-sand/65 p-5 md:grid-cols-[1.15fr_0.85fr] md:p-6">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                Новость
              </p>
              <p className="mt-4 font-body text-base leading-8 text-kaleo-earth/72 md:text-lg">
                27 марта 2016 года разработана концепция экологической тропы, которая открылась 1 сентября.
                Сегодня, спустя 10 лет, мы отмечаем этот юбилей вместе с ребятами! Огромное спасибо всем за поддержку!
                Пусть наша тропа вдохновляет на новые свершения.
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-kaleo-earth/10 bg-kaleo-cream">
              <img
                src={anniversaryImage}
                alt="Юбилей экологической тропы"
                className="h-full min-h-[260px] w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl font-body text-base leading-8 text-kaleo-earth/72">
              Особое внимание ГНОУ уделяет экологическому направлению.
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-kaleo-earth/15 bg-kaleo-sand px-5 py-3 font-body text-sm text-kaleo-earth transition hover:border-kaleo-terracotta hover:text-kaleo-terracotta"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <p
                key={item}
                className="rounded-[24px] border border-kaleo-earth/10 bg-kaleo-sand/65 px-5 py-4 font-body text-sm leading-7 text-kaleo-earth/72 md:text-base"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-[26px] border border-kaleo-earth/10 bg-kaleo-sand/65 p-5 md:p-6">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
              Практические примеры использования
            </p>
            <div className="mt-4 space-y-3">
              {examples.map((example) => (
                <div
                  key={example}
                  className="flex items-start gap-3 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream px-4 py-4"
                >
                  <div className="mt-2 h-2 w-2 flex-none rounded-full bg-kaleo-terracotta" />
                  <p className="font-body text-sm leading-7 text-kaleo-earth/72 md:text-base">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoRoutePanel;

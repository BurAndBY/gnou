import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const universities = [
  {
    title: 'Белорусский государственный педагогический университет (БГПУ)',
    description:
      'В рамках сотрудничества с БГПУ наши ученики участвуют в различных образовательных инициативах. Между гимназией и университетом заключено 5 актов внедрения по работе, что свидетельствует о глубоком и продуктивном взаимодействии.',
  },
  {
    title: 'Белорусский государственный медицинский университет (БГМУ)',
    description:
      'Сотрудничество с БГМУ включает создание специализированных медицинских классов, что даёт учащимся возможность погрузиться в мир медицины, изучать актуальные темы, развивать навыки для будущей профессии в сфере здравоохранения и знакомиться с современными медицинскими технологиями.',
  },
  {
    title: 'Белорусский государственный университет (БГУ)',
    description:
      'Мы сотрудничаем с кафедрой международных отношений и факультетом таможенного дела БГУ, что открывает перед учащимися новые горизонты в области международной торговли и дипломатии. Ребята участвуют в семинарах, лекциях и практических занятиях, что способствует их профессиональному росту.',
  },
  {
    title: 'Белорусский национальный технический университет (БНТУ)',
    description:
      'Взаимодействие с БНТУ предоставляет учащимся доступ к современным знаниям в области инженерии и технологий. Ученики посещают технопарк, знакомятся с разработками и инновациями, участвуют в практических занятиях и мастер-классах, что заметно расширяет их образовательный опыт.',
  },
];

const Universities = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.universities-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="universities"
      className="border-t border-kaleo-earth/10 bg-kaleo-sand px-4 py-24 sm:px-6 md:py-28 lg:px-8 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <p className="universities-reveal font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
            Партнёрства
          </p>
          <h2 className="universities-reveal mt-4 font-display text-headline text-kaleo-earth">
            Сотрудничество с высшими учебными заведениями
          </h2>
          <p className="universities-reveal mt-5 font-body text-base leading-8 text-kaleo-earth/70 md:text-lg">
            В рамках деятельности гимназического научного общества «Новая наука» мы активно сотрудничаем с ведущими высшими учебными заведениями, что даёт нашим учащимся дополнительные возможности для обучения, профессиональных проб и развития исследовательских интересов.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {universities.map((item, index) => (
            <article
              key={item.title}
              className="universities-reveal rounded-[28px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand text-kaleo-terracotta">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-earth/40">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-kaleo-earth">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 font-body text-sm leading-7 text-kaleo-earth/68 md:text-base md:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;

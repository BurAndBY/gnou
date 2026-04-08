import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, FileText, Instagram, Link as LinkIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const methodGuideUrl = `${import.meta.env.BASE_URL}Методичка онлайн-недели.pdf`;

const introParagraphs = [
  'Instagram входит в число наиболее перспективных социальных платформ. Чем же занимаются наши учащиеся, когда пользуются данной платформой? Ответ лежит на поверхности: точно не с обучающей целью ребята заходят в «мир Instagram». Значит, эту популярную платформу важно рассмотреть с такой стороны, чтобы она стала полезной.',
  'Цель предметных онлайн-недель состоит в развитии познавательной и творческой активности учащихся, выявлении школьников с выраженными способностями и интересом к углублённому изучению предметов, а также в профориентационной поддержке.',
  'Материал демонстрирует методику организации предметных недель в онлайн-формате и включает готовые продукты: чек-лист, сценарные элементы и примеры недель. Предлагаемый методический продукт может использоваться учителями-предметниками при организации внеклассной работы.',
];

const checklistItems = [
  'Организовать творческую группу учащихся.',
  'Провести организационное собрание, определить программу онлайн-недели и распределить роли каждого учащегося: генератор идей, модератор, координатор, дизайнер, аналитик и т.д.',
  'Разработать конкурсные и информационные мероприятия.',
  'Снять необходимые ролики и смонтировать их.',
  'Организовать собрание творческой группы перед стартом онлайн-недели.',
  'Запустить онлайн-неделю на платформе.',
  'Контролировать деятельность творческой группы и оказывать необходимую помощь в течение недели.',
  'Провести закрытие недели и объявить победителей.',
  'Организовать итоговое собрание творческой группы и проанализировать результаты онлайн-недели.',
  'Оформить отчет.',
];

const weekPlan = [
  {
    day: 'Понедельник',
    title: 'День химической науки',
    items: ['Онлайн-опросник «Химия вокруг нас».', 'Интересные факты из области химии.', 'Онлайн-опыт «Трехслойная жидкость».'],
  },
  {
    day: 'Вторник',
    title: 'День экологии',
    items: ['Онлайн-опросник «Раздельный сбор мусора».', 'Полезные сторис «Химические свойства чая».', 'Онлайн-опыты «Резиновое яйцо» и «Приготовление мыльных пузырей».'],
  },
  {
    day: 'Среда',
    title: 'День выпускника',
    items: ['Онлайн-мастер-класс «Мир химических профессий».', 'Прямой эфир с выпускником гимназии.', 'Онлайн-опыт «Определение содержания крахмала в продуктах питания».'],
  },
  {
    day: 'Четверг',
    title: 'День памяти',
    items: ['Онлайн-трансляция «Выдающиеся учёные в области химии».', 'Онлайн-викторина «Знаете ли Вы?».', 'Онлайн-опыт «Химический вулкан».'],
  },
  {
    day: 'Пятница',
    title: 'День красок',
    items: ['Презентация эффектных химических опытов.', 'Онлайн-газета «Новости химической науки».', 'Онлайн-опыт «Лавовая лампа».'],
  },
  {
    day: 'Следующий понедельник',
    title: 'Подведение итогов',
    items: ['Прямой эфир с итогами онлайн-недели.', 'Розыгрыш хим-био бокса при помощи программы «Lizaonair».'],
  },
];

const informationalActivities = [
  'Интересные факты из области химии и биологии.',
  'Insta Stories «Знаменитые химики и их вклад в развитие науки», «Великие учёные-биологи и их открытия».',
  'Полезные сторис «Химические свойства чая».',
  'Онлайн-мастер-класс «Мир химических профессий» с презентацией профессий, связанных с химией.',
  'Онлайн-газета «Новости химической науки» и «Новости биологической науки».',
  'Презентация эффектных химических опытов в прямой трансляции из кабинета химии.',
];

const contestActivities = [
  'Выполнение онлайн-опытов и демонстрация их на своей странице Instagram.',
  'Опросники по темам «Химия вокруг нас» и «Биология вокруг нас».',
  'Онлайн-викторина «Знаете ли Вы?».',
  'Конкурс на лучшее фото и самое креативное видео.',
];

const usefulTips = [
  'Не обязательно задействовать личную страницу для проведения онлайн-недели: достаточно школьной страницы, которая уже есть у учреждения.',
  'Очень важно создать творческую группу учащихся и распределить роли. У ребят много креативных идей, а педагог в этой модели выступает руководителем.',
  'Нужно заранее узнать, кто отвечает за страницу школы, так как в течение недели этот человек будет выполнять поручения творческой группы.',
  'Перед началом недели следует разместить напоминание и отдельный пост со всеми подробностями, а в процессе постоянно поддерживать обратную связь с учащимися.',
  'Для 2024/2025 учебного года предлагается формат межшкольного баттла, где школы повторяют эксперименты, отмечают друг друга и передают вызовы дальше.',
];

const helpfulLinks = [
  { label: 'Настройки опросов в stories', href: 'https://www.youtube.com/watch?v=NWBeqcVaAt0' },
  { label: 'Создание викторин в stories', href: 'https://instagrami.ru/vedenie/viktoriny' },
  { label: 'Занимательные опыты по химии', href: 'http://www.sev-chem.narod.ru/opyt.htm' },
];

const editingApps = ['Alive Movie Maker', 'Splice', 'GoPro Quik', 'VideoShow', 'KineMaster', 'WeVideo'];

const experienceBroadcasts = [
  {
    title: 'Статья в «Настаўніцкай газеце»',
    description: 'Тема: «Інтэрнэт тыдні у Instagram».',
    href: 'https://nastgaz.by/internet-tydzen-himii-u-instagram-unikalnym-vopytam-padzyalilasya-nastaunitsa-aryna-gaurylenka/',
  },
  {
    title: 'Мастер-класс для молодых специалистов Минского района',
    description: 'Тема: «Организация предметных онлайн-недель химии и биологии на платформе Instagram».',
  },
  {
    title: 'Мастер-класс для учителей Минской области',
    description: 'Конкурс профессионального мастерства «Учитель года Минской области 2023».',
    href: 'https://drive.google.com/drive/folders/1kJXtkS015J0RLXOsqAqKvFN_u2m3ts49?hl=ru',
  },
  {
    title: 'Аналогичные недели для педагогов России на платформе VK',
    description: 'Международный профессионально-методический конкурс «Преподаватель года 2023», диплом I степени.',
    href: 'https://drive.google.com/drive/folders/1dlkfHXIaiQEQG83ga5vURsYOpFCkGgTj?hl=ru',
  },
  {
    title: 'Мастер-класс для педагогов Республики Беларусь',
    description: 'ХIII республиканский рождественский фестиваль педагогического мастерства Академии последипломного образования.',
  },
];

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
        stagger: 0.08,
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
        <div className="mb-12 max-w-5xl">
          <p className="instagram-guide-reveal font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
            Instagram-активности
          </p>
          <h2 className="instagram-guide-reveal mt-4 font-display text-headline text-kaleo-earth">
            Направление, которое работает уже 7-й год
          </h2>
          <p className="instagram-guide-reveal mt-5 max-w-4xl font-display text-xl leading-8 text-kaleo-earth/82 md:text-2xl">
            Проведение предметных онлайн-недель на платформе Instagram как средство развития познавательного интереса учащихся
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">О направлении</p>
              <div className="mt-5 space-y-4">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="font-body text-sm leading-7 text-kaleo-earth/72 md:text-base md:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand text-kaleo-terracotta">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Команда</p>
                  <h3 className="mt-2 font-display text-3xl text-kaleo-earth">Творческая группа учащихся ГНОУ</h3>
                  <p className="mt-3 font-body text-sm leading-7 text-kaleo-earth/72 md:text-base">
                    Для работы с онлайн-неделями создаётся отдельная группа учащихся ГНОУ. Это микс представителей разных секций, которые отвечают за идеи, контент, координацию и аналитику.
                  </p>
                </div>
              </div>
            </article>

            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Чек-лист</p>
              <h3 className="mt-3 font-display text-3xl text-kaleo-earth">Организация предметных онлайн-недель</h3>
              <div className="mt-6 grid gap-3">
                {checklistItems.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand/70 px-4 py-4 font-body text-sm leading-7 text-kaleo-earth/72"
                  >
                    <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-kaleo-earth/10 bg-kaleo-cream text-xs text-kaleo-terracotta">
                      {index + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Примерный план</p>
              <h3 className="mt-3 font-display text-3xl text-kaleo-earth">Неделя мероприятий по химии</h3>
              <div className="mt-6 grid gap-4">
                {weekPlan.map((entry) => (
                  <article
                    key={`${entry.day}-${entry.title}`}
                    className="rounded-[24px] border border-kaleo-earth/10 bg-kaleo-sand/70 p-5"
                  >
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">{entry.day}</p>
                    <h4 className="mt-2 font-display text-2xl text-kaleo-earth">{entry.title}</h4>
                    <ul className="mt-4 space-y-2">
                      {entry.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm leading-6 text-kaleo-earth/72">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kaleo-terracotta" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Активности</p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[24px] border border-kaleo-earth/10 bg-kaleo-sand/70 p-5">
                  <h3 className="font-display text-2xl text-kaleo-earth">Информационные мероприятия</h3>
                  <ul className="mt-4 space-y-2">
                    {informationalActivities.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-sm leading-6 text-kaleo-earth/72">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kaleo-terracotta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] border border-kaleo-earth/10 bg-kaleo-sand/70 p-5">
                  <h3 className="font-display text-2xl text-kaleo-earth">Конкурсные мероприятия</h3>
                  <ul className="mt-4 space-y-2">
                    {contestActivities.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-sm leading-6 text-kaleo-earth/72">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kaleo-terracotta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Полезные советы</p>
              <div className="mt-5 space-y-3">
                {usefulTips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand/70 px-4 py-4 font-body text-sm leading-7 text-kaleo-earth/72"
                  >
                    {tip}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[24px] border border-kaleo-earth/10 bg-kaleo-sand/70 p-5">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Программы для монтажа</p>
                <p className="mt-3 font-body text-sm leading-7 text-kaleo-earth/72">{editingApps.join(', ')}.</p>
              </div>
            </article>

            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Полезные ссылки</p>
              <div className="mt-5 space-y-3">
                {helpfulLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand px-4 py-4 font-body text-sm text-kaleo-earth transition hover:border-kaleo-terracotta hover:text-kaleo-terracotta"
                  >
                    <span>{link.label}</span>
                    <LinkIcon className="h-4 w-4 flex-none" />
                  </a>
                ))}
              </div>
            </article>

            <article className="instagram-guide-reveal rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Развитие образования</p>
              <div className="mt-5 space-y-4 font-body text-sm leading-7 text-kaleo-earth/72 md:text-base md:leading-8">
                <p>
                  Дистанционные предметные недели помогают удовлетворять познавательный интерес учащихся, расширять знания и делать первые шаги в профессиональной сфере. Ежегодное обновление программы и экспериментов поддерживает живой интерес к формату.
                </p>
                <p>
                  Такие инициативы раскрывают потенциал учащихся, которые не всегда могут полностью проявить себя в рамках обычного учебного процесса. Они расширяют образовательную среду и интегрируют современные платформы в учебную деятельность.
                </p>
                <p>
                  Информационные технологии становятся важным инструментом обучения, исследовательской работы и разработки инновационных проектов. Именно поэтому подобные недели работают как практическая подготовка к вызовам современного мира.
                </p>
              </div>
            </article>
          </div>
        </div>

        <article className="instagram-guide-reveal mt-6 rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-6 md:p-8">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">Трансляция опыта</p>
          <h3 className="mt-3 font-display text-3xl text-kaleo-earth">Публикации и мастер-классы по теме</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {experienceBroadcasts.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-kaleo-earth/10 bg-kaleo-sand/70 p-5"
              >
                <h4 className="font-display text-2xl text-kaleo-earth">{item.title}</h4>
                <p className="mt-3 font-body text-sm leading-7 text-kaleo-earth/72">{item.description}</p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-body text-sm text-kaleo-terracotta transition hover:text-kaleo-earth"
                  >
                    Открыть материал
                    <LinkIcon className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </article>

        <div className="instagram-guide-reveal mt-6 overflow-hidden rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-kaleo-cream md:px-8 md:py-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand text-kaleo-terracotta">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-earth/42">PDF</p>
                <h3 className="font-display text-3xl text-kaleo-earth">Методичка</h3>
              </div>
            </div>

            <ChevronDown
              className={`h-5 w-5 flex-none text-kaleo-earth/45 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} border-t border-kaleo-earth/10 px-5 py-5 md:px-8 md:py-8`}>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-kaleo-earth/10 bg-kaleo-sand px-3 py-1 font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                <FileText className="h-3.5 w-3.5" />
                Документ
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
                title="Методичка"
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

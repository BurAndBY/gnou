import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Baby, Beaker, BookOpen, Calculator, Languages, User, Users, X } from 'lucide-react';
import BrowserTabs from '../components/BrowserTabs';

gsap.registerPlugin(ScrollTrigger);

interface Direction {
  id: string;
  label: string;
  icon: React.ReactNode;
  subjects: string;
  leaders: string[];
  description: string;
  activities: string[];
  highlights?: string[];
  images?: { src: string; alt: string; imageClassName?: string; imageStyle?: React.CSSProperties }[];
  achievements?: { src: string; alt: string; imageClassName?: string; imageStyle?: React.CSSProperties }[];
  resources?: { label: string; href: string }[];
}

const directions: Direction[] = [
  {
    id: 'philology',
    label: 'Общественно-гуманитарная секция',
    icon: <BookOpen className="h-4 w-4" />,
    subjects: 'Русский язык и литература, белорусский язык и литература, история и обществоведение',
    leaders: ['Скавинская Елена Владимировна (учитель русского языка и литературы)'],
    description: 'Изучение языка, литературы и культуры через исследовательские проекты и творческие работы.',
    activities: [
      'Лингвистические исследования',
      'Литературная критика',
      'Поэтические мастер-классы',
      'Историко-культурные экспедиции',
    ],
  },
  {
    id: 'stem',
    label: 'Физико-математическая секция',
    icon: <Calculator className="h-4 w-4" />,
    subjects: 'Математика, информатика, физика, астрономия, трудовое обучение',
    leaders: ['Невер Елена Петровна (учитель математики)'],
    description: 'Математика, информатика, физика, астрономия и исследовательская работа, построенная вокруг турниров юных математиков, конференций и проектных задач.',
    activities: [
      'Турниры юных математиков',
      'Исследовательские работы по турнирным задачам',
      'Подготовка к конференциям и конкурсам',
      'Публичная защита и математические бои',
      'Разбор сложных задач и методов',
      'Мастер-классы по исследовательской работе',
    ],
    highlights: [
      'По правилам Республиканского турнира юных математиков STEM-секция работает не только на решение задач, но и на умение проводить коллективные исследования, представлять результаты и аргументированно отстаивать свою точку зрения в публичной дискуссии.',
      'Памятка к турниру показывает тот же акцент: исследовательское задание рассматривается как открытая задача, где важны собственные содержательные результаты, методы, алгоритмы, примеры, контрпримеры и грамотное оформление материалов.',
      'Материалы мастер-класса 2023 года прямо связывают работу секции с развитием исследовательских компетенций учащихся и с организацией участия в турнирах юных математиков как устойчивой образовательной практики.',
      'В папке с работами STEM есть реальные исследовательские темы, выросшие из турнирных задач: «О средних степенных», «Последовательности числовых наборов», «О сумме k-тых степеней делителей», «Авиапутешествия с ограничениями», «Чевианы в нечетноугольниках», «Суммы подмножеств», а также командные математические исследования по геометрии и признакам делимости в нестандартных системах счисления.',
    ],
    resources: [
      { label: 'Правила РТЮМ', href: `${import.meta.env.BASE_URL}images/stem/Правила РТЮМ.pdf` },
      { label: 'Памятка жюри РТЮМ', href: `${import.meta.env.BASE_URL}images/stem/Памятка жюри РТЮМ.pdf` },
      { label: 'Мастер-класс 2023', href: `${import.meta.env.BASE_URL}images/stem/мастер класс 2023.pdf` },
      { label: 'Алгоритм написания исследовательской работы', href: `${import.meta.env.BASE_URL}images/stem/АЛГОРИТМ_НАПИСАНИЯ_ИССЛЕДОВАТЕЛЬСКОЙ_РАБОТЫ.doc` },
      { label: 'Рекомендуемая литература и источники', href: `${import.meta.env.BASE_URL}images/stem/Рекомендуемая_литература_и_источники.doc` },
      { label: 'Исследование «О средних степенных»', href: `${import.meta.env.BASE_URL}images/stem/Соловьёва_Юлия_Исследовательская_работа_О_средних_степенных.pdf` },
      { label: 'Исследование «Авиапутешествия с ограничениями»', href: `${import.meta.env.BASE_URL}images/stem/Авиапутешествия_с_ограничениями.pdf` },
      { label: 'Турнирная задача 2024', href: `${import.meta.env.BASE_URL}images/stem/borovlyan-gym-2024-problem1-okonch.pdf` },
      { label: 'Турнирная задача 2025', href: `${import.meta.env.BASE_URL}images/stem/borovlyan-gym-2025-problem5.pdf` },
    ],
    images: [
      { src: `${import.meta.env.BASE_URL}images/stem/photo_6_2026-04-07_09-27-15.jpg`, alt: 'Рабочая атмосфера STEM-секции' },
      { src: `${import.meta.env.BASE_URL}images/stem/extracted/image1.png`, alt: 'Фото STEM-секции из документов 1' },
      { src: `${import.meta.env.BASE_URL}images/stem/extracted/image2.png`, alt: 'Фото STEM-секции из документов 2' },
    ],
    achievements: [
      { src: `${import.meta.env.BASE_URL}images/stem/photo_1_2026-04-07_09-27-15.jpg`, alt: 'STEM-секция на очном мероприятии' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_2_2026-04-07_09-27-15.jpg`, alt: 'Участники STEM-секции за работой' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_3_2026-04-07_09-27-15.jpg`, alt: 'Командная работа в STEM-секции' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_4_2026-04-07_09-27-15.jpg`, alt: 'Подготовка STEM-команды' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_5_2026-04-07_09-27-15.jpg`, alt: 'Проектная деятельность STEM' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_7_2026-04-07_09-27-15.jpg`, alt: 'Достижения STEM-секции 1' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_8_2026-04-07_09-27-15.jpg`, alt: 'Достижения STEM-секции 2' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_9_2026-04-07_09-27-15.jpg`, alt: 'Достижения STEM-секции 3' },
      { src: `${import.meta.env.BASE_URL}images/stem/photo_10_2026-04-07_09-27-15.jpg`, alt: 'Достижения STEM-секции 4' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/1_p1_1.jpg`, alt: 'Диплом STEM 1' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/2_p1_1.jpg`, alt: 'Диплом STEM 2', imageClassName: 'object-contain', imageStyle: { transform: 'rotate(90deg) scale(0.78)' } },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/2_p2_1.jpg`, alt: 'Диплом STEM 3' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/3_p1_1.jpg`, alt: 'Диплом STEM 4', imageClassName: 'object-contain', imageStyle: { transform: 'rotate(90deg) scale(0.78)' } },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/3_p2_1.jpg`, alt: 'Диплом STEM 5', imageClassName: 'object-contain', imageStyle: { transform: 'scaleY(-1)' } },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/3_p3_1.jpg`, alt: 'Диплом STEM 6' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/4_p1_1.jpg`, alt: 'Диплом STEM 7' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/5_p1_1.jpg`, alt: 'Диплом STEM 8' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/5_p2_1.jpg`, alt: 'Диплом STEM 9' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/5_p3_1.jpg`, alt: 'Диплом STEM 10' },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/5_p4_1.jpg`, alt: 'Диплом STEM 11', imageClassName: 'object-contain', imageStyle: { transform: 'scaleY(-1)' } },
      { src: `${import.meta.env.BASE_URL}images/stem/pdf-extracted/5_p5_1.jpg`, alt: 'Диплом STEM 12', imageClassName: 'object-contain', imageStyle: { transform: 'scaleY(-1)' } },
    ],
  },
  {
    id: 'young-chemists',
    label: 'Юные исследователи',
    icon: <Baby className="h-4 w-4" />,
    subjects: 'Начальная школа',
    leaders: ['Пивоварчик Юлия Алексеевна (учитель начальных классов)'],
    description:
      'Направление для младших школьников, где первые исследовательские навыки формируются через наблюдение, простые проекты, творчество и знакомство с наукой.',
    activities: [
      'Первые исследовательские проекты',
      'Наблюдения и мини-эксперименты',
      'Творческие задания и презентации',
      'Знакомство с научными темами в доступной форме',
    ],
    highlights: [
      'Секция помогает младшим школьникам сделать первые шаги в исследовательской деятельности и научиться наблюдать, сравнивать и делать выводы.',
      'Работа строится в формате доступных возрасту мини-проектов, творческих заданий и практических занятий.',
    ],
    images: [],
    achievements: [],
  },
  {
    id: 'languages',
    label: 'Секция иностранных языков',
    icon: <Languages className="h-4 w-4" />,
    subjects: 'Английский язык, китайский язык и немецкий язык',
    leaders: ['Кузякова Ольга Викторовна (учитель английского языка)'],
    description: 'Английский язык, китайский язык и немецкий язык.',
    activities: [
      'Английские детективные квесты',
      'Итальянское театральное представление',
      'Китайская каллиграфия',
      'Интерактивные перемены и ушу',
      'Арт-мастерские о Беларуси',
      'Флешмобы и языковые события',
    ],
    highlights: [
      'Первый день фестиваля был посвящён английским детективам. Ученики перевоплотились в настоящих сыщиков: разгадывали загадки, искали улики, проходили квесты. Атмосфера была по-настоящему таинственной, как в лучших историях Шерлока Холмса.',
      '09.02.2026 в стенах нашей гимназии состоялось маленькое театральное представление на итальянском языке «Карлсон, который живёт на крыше». Ребята блеснули своими знаниями итальянского и подарили заряд позитивного настроения.',
      'Мастер-класс «След иероглифа», где гимназисты пробовали себя в роли каллиграфов, выводя тушью первые иероглифы.',
      'На интерактивных переменах «Кун-фу челлендж» нужно было повторить базовые движения ушу.',
      'На арт-переменах «Сделай сердце для Беларуси» учащиеся создавали своими руками сердца, украшенные словами о любимой стране. После творческого мастер-класса «Национальные символы Беларуси» каждый учащийся унёс не только знания о символах Беларуси, но и собственноручно сделанный сувенир-символ-василёк. Апофеозом дня стал зажигательный флешмоб под народную песню «Касіў Ясь канюшыну»!',
    ],
    images: [
      { src: `${import.meta.env.BASE_URL}images/languages/Picture5.png`, alt: 'Представление на итальянском языке' },
      { src: `${import.meta.env.BASE_URL}images/languages/Picture1.png`, alt: 'Мастер-класс След иероглифа' },
      { src: `${import.meta.env.BASE_URL}images/languages/Picture2.png`, alt: 'Каллиграфия и иероглифы' },
      { src: `${import.meta.env.BASE_URL}images/languages/Picture3.png`, alt: 'Кун-фу челлендж' },
      { src: `${import.meta.env.BASE_URL}images/languages/Picture4.png`, alt: 'Национальные символы Беларуси' },
    ],
    achievements: [
      { src: `${import.meta.env.BASE_URL}images/languages/Picture6.png`, alt: 'Достижения секции иностранных языков 1' },
      { src: `${import.meta.env.BASE_URL}images/languages/Picture7.png`, alt: 'Достижения секции иностранных языков 2' },
      { src: `${import.meta.env.BASE_URL}images/languages/Picture8.png`, alt: 'Достижения секции иностранных языков 3' },
    ],
  },
  {
    id: 'chem',
    label: 'Секция естественных наук',
    icon: <Beaker className="h-4 w-4" />,
    subjects: 'Химия, биология, география, экология',
    leaders: ['Макарова Жанна Петровна (учитель биологии)'],
    description: 'Секция объединяет естественнонаучные дисциплины и выстраивает работу вокруг наблюдений, полевых практик, экологических инициатив и исследовательских проектов.',
    activities: [
      'Исследовательские проекты по биологии, экологии и географии',
      'Наблюдение за природными объектами и сезонными изменениями',
      'Подготовка к конкурсам и конференциям естественнонаучного профиля',
      'Экологические акции и работа на экотропе',
      'Практические занятия и мини-экспедиции',
      'Оформление наблюдений, выводов и презентация результатов',
    ],
    highlights: [
      'Секция естественных наук формирует целостный взгляд на окружающий мир через биологию, химию, географию и экологию, соединяя кабинетную работу с наблюдением за реальной средой.',
      'Участники секции работают с исследовательскими темами, учатся ставить вопросы, фиксировать результаты наблюдений, сопоставлять факты и делать аргументированные выводы.',
      'Особое место занимает экологическая практика: работа на школьной экотропе, природоохранные инициативы, изучение местных экосистем и применение знаний в реальных условиях.',
      'Секция служит базой для подготовки учебных проектов, выступлений на конференциях и участия в мероприятиях естественнонаучного профиля.',
    ],
    images: [],
    achievements: [],
    resources: [],
  },
];

function DirectionContent({ direction }: { direction: Direction }) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="space-y-6">
      <div className="border-b border-kaleo-earth/10 pb-4">
        <h3 className="mb-2 font-display text-2xl text-kaleo-earth">{direction.subjects}</h3>
        <p className="font-body text-sm leading-7 text-kaleo-earth/62">{direction.description}</p>
      </div>

      {direction.leaders.length > 0 && (
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-body text-xs uppercase tracking-wider text-kaleo-earth/45">
            <User className="h-4 w-4" />
            Руководители направления
          </h4>
          <div className="flex flex-wrap gap-2">
            {direction.leaders.map((leader) => (
              <span
                key={leader}
                className="rounded-xl border border-kaleo-earth/10 bg-kaleo-cream px-3 py-2 font-body text-sm text-kaleo-earth/72"
              >
                {leader}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <h4 className="mb-3 flex items-center gap-2 font-body text-xs uppercase tracking-wider text-kaleo-earth/45">
          <Users className="h-4 w-4" />
          Направления деятельности
        </h4>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {direction.activities.map((activity) => (
            <div
              key={activity}
              className="flex items-center gap-2 rounded-xl border border-kaleo-earth/10 bg-kaleo-cream px-3 py-2 font-body text-sm text-kaleo-earth/68"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-kaleo-terracotta" />
              {activity}
            </div>
          ))}
        </div>
      </div>

      {direction.highlights && (
        <div>
          <h4 className="mb-3 font-body text-xs uppercase tracking-wider text-kaleo-earth/45">
            События и активности
          </h4>
          <div className="space-y-3">
            {direction.highlights.map((highlight) => (
              <p
                key={highlight}
                className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream px-4 py-4 font-body text-sm leading-7 text-kaleo-earth/68"
              >
                {highlight}
              </p>
            ))}
          </div>
        </div>
      )}

      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-kaleo-charcoal"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <button
              type="button"
              aria-label="Закрыть изображение"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-[10000] flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition hover:bg-black/85"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative z-[9999] h-screen w-screen" onClick={(event) => event.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

const Directions = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.directions-label', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.directions-headline', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.browser-tabs-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tabs = directions.map((direction) => ({
    id: direction.id,
    label: direction.label,
    icon: direction.icon,
    content: <DirectionContent direction={direction} />,
  }));

  return (
    <section
      ref={sectionRef}
      id="directions"
      className="border-t border-kaleo-earth/10 bg-kaleo-sand px-4 py-28 sm:px-6 md:py-36 lg:px-8 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 md:mb-16">
          <span className="directions-label mb-4 block font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
            Направления
          </span>
          <h2 className="directions-headline font-display text-4xl text-kaleo-earth md:text-5xl lg:text-6xl">
            Секции ГНОУ
          </h2>
        </div>

        <div className="browser-tabs-container">
          <BrowserTabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

export default Directions;

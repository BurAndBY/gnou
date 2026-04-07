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
    label: 'Литературные горизонты',
    icon: <BookOpen className="h-4 w-4" />,
    subjects: 'Литературные и исторические горизонты',
    leaders: ['Скавинская Елена Владимировна', 'Пацель Анна Мечиславовна'],
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
    label: 'Научно-техническая секция',
    icon: <Calculator className="h-4 w-4" />,
    subjects: 'STEM-СЕКЦИЯ',
    leaders: ['Невер Елена Петровна'],
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
    label: 'Юные химики и экологи',
    icon: <Baby className="h-4 w-4" />,
    subjects: 'ОБЪЕДИНЕНИЕ ПО ИНТЕРЕСАМ «ЮНЫЕ ХИМИКИ И ЭКОЛОГИ»',
    leaders: ['Макарова Жанна Петровна'],
    description:
      'Секция естественных наук объединяет химию, биологию, географию и экологию. Работа строится через практические мастер-классы, исследовательские задания, биолого-экологические конкурсы, онлайн-недели и живой эксперимент.',
    activities: [
      'Выращивание кристаллов различного цвета',
      'Мыловарение и мастер-класс «Мыло своими руками»',
      'Изготовление моделей молекул',
      'Создание собственного аромата духов',
      'Проведение эффектных химических опытов',
      'Подготовка к научным биолого-экологическим конкурсам',
      'Онлайн-недели химии и биологии на платформе Instagram',
    ],
    highlights: [
      'В структуре ГНОУ это секция естественных наук, которая объединяет химию, биологию, географию и экологию и работает как пространство практики, а не только теории.',
      'В рабочих планах ГНОУ на 2025/2026 учебный год для этого направления отдельно зафиксированы подготовка к конкурсу научных биолого-экологических работ, участие в фестивале наук, мастер-классы и предметные недели.',
      'Портфолио показывает конкретные форматы работы секции: выращивание кристаллов, мыловарение, изготовление моделей молекул, создание собственного аромата духов и проведение эффектных химических опытов.',
      'Для химико-биологической онлайн-недели используются опросники «Химия вокруг нас» и «Биология вокруг нас», опыты «Трехслойная жидкость», «Резиновое яйцо», «Лавовая лампа», прямые эфиры и онлайн-газета «Новости химической науки».',
      'Такой формат позволяет соединять исследование, эксперимент, экологическое мышление и публичную презентацию результатов.',
    ],
    resources: [
      { label: 'Материалы секции: Instagram-недели', href: `${import.meta.env.BASE_URL}images/young-chemists/image30.jpeg` },
    ],
    images: [
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image61.jpeg`, alt: 'Практическая работа по выращиванию кристаллов' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image69.jpg`, alt: 'Работы учащихся на мастер-классе по мыловарению' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image79.jpeg`, alt: 'Мастер-класс «Мыло своими руками»' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image87.jpeg`, alt: 'Изготовление моделей молекул на занятии' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image95.jpeg`, alt: 'Командная работа с моделями молекул' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image97.jpg`, alt: 'Создание собственного аромата духов' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image100.jpg`, alt: 'Эффектный химический опыт' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image102.jpg`, alt: 'Демонстрация химического эксперимента' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_1_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 1' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_2_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 2' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_3_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 3' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_4_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 4' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_5_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 5' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_6_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 6' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_7_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 7' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_8_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 8' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_9_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 9' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_10_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 10' },
      { src: `${import.meta.env.BASE_URL}images/youth/photo_11_2026-04-07_21-57-44.jpg`, alt: 'Юные экологи: фото 11' },
    ],
    achievements: [
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image30.jpeg`, alt: 'Организация предметных онлайн-недель химии и биологии' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image36.jpeg`, alt: 'Пример сторис для онлайн-недели химии и биологии' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image85.jpeg`, alt: 'Выступление на семинаре с мастер-классом' },
      { src: `${import.meta.env.BASE_URL}images/young-chemists/image108.jpeg`, alt: 'Практический результат химического эксперимента' },
    ],
  },
  {
    id: 'languages',
    label: 'Иностранные языки',
    icon: <Languages className="h-4 w-4" />,
    subjects: 'СЕКЦИЯ ИНОСТРАННЫХ ЯЗЫКОВ',
    leaders: ['Кузякова Ольга Викторовна'],
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
    subjects: 'СЕКЦИЯ ЕСТЕСТВЕННЫХ НАУК',
    leaders: ['Макарова Жанна Петровна'],
    description: 'Химия, биология, география, экология.',
    activities: [],
    highlights: [],
    images: [],
    achievements: [],
  }
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

      {direction.resources && (
        <div>
          <h4 className="mb-3 font-body text-xs uppercase tracking-wider text-kaleo-earth/45">
            Материалы и документы
          </h4>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {direction.resources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-kaleo-earth/10 bg-kaleo-cream px-4 py-3 font-body text-sm text-kaleo-earth/72 transition hover:border-kaleo-terracotta hover:text-kaleo-earth"
              >
                {resource.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {direction.images && (
        <div>
          <h4 className="mb-3 font-body text-xs uppercase tracking-wider text-kaleo-earth/45">
            Галерея
          </h4>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {direction.images.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="overflow-hidden rounded-[22px] border border-kaleo-earth/10 bg-kaleo-cream text-left transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(42,42,42,0.08)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-64 w-full object-cover transition-transform ${image.imageClassName ?? ''}`}
                  style={image.imageStyle}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {direction.achievements && (
        <div>
          <h4 className="mb-3 font-body text-xs uppercase tracking-wider text-kaleo-earth/45">
            Достижения
          </h4>
          <div className="max-h-[60rem] overflow-y-auto rounded-[24px] border border-kaleo-earth/10 bg-kaleo-cream/55 p-3 md:p-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {direction.achievements.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="overflow-hidden rounded-[22px] border border-kaleo-earth/10 bg-kaleo-cream text-left transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(42,42,42,0.08)]"
                >
                  <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
                </button>
              ))}
            </div>
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

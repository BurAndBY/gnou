const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export interface SiteConfig {
  language: string;
  siteName: string;
  siteDescription: string;
  pageTitle: string;
}

export interface HeroConfig {
  backgroundImage: string;
  backgroundAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface NarrativeTextConfig {
  line1: string;
  line2: string;
  line3: string;
}

export interface AboutTradition {
  title: string;
  description: string;
}

export interface AboutConfig {
  label: string;
  headline: string;
  intro: string[];
  historyTitle: string;
  history: string[];
  traditions: AboutTradition[];
  conclusion: string;
}

export interface IdentitySectionConfig {
  label: string;
  title: string;
  motto: string;
  credo: string;
  anthemTitle: string;
  anthemSections: {
    label: string;
    lines: string[];
  }[];
}

export interface WindowTabFeature {
  title: string;
  description: string;
}

export interface WindowTab {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  details?: string[];
  features?: WindowTabFeature[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface SectionWindowConfig {
  sectionLabel: string;
  sectionTitle: string;
  intro: string;
  tabs: WindowTab[];
}

export interface ZigZagGridItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export interface ZigZagGridConfig {
  sectionLabel: string;
  sectionTitle: string;
  items: ZigZagGridItem[];
}

export interface CardStackItem {
  id: number;
  image: string;
  title: string;
  description: string;
  rotation: number;
}

export interface CardStackConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: CardStackItem[];
}

export interface BreathSectionConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FooterContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface FooterSocialItem {
  platform: string;
  href: string;
}

export interface FooterConfig {
  marqueeText: string;
  heading: string;
  description: string;
  contactLabel: string;
  contact: FooterContactItem[];
  locationLabel: string;
  address: string[];
  socialLabel: string;
  socials: FooterSocialItem[];
  logoText: string;
  copyright: string;
  links: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  language: 'ru',
  siteName: 'Новая Наука',
  siteDescription:
    'Гимназическое научное общество учащихся для исследований, проектной работы и научных инициатив.',
  pageTitle: 'Новая Наука',
};

export const heroConfig: HeroConfig = {
  backgroundImage: asset('f551ccdd548cdb3e29e600303c90041f (1).jpg'),
  backgroundAlt: 'Участники научного общества',
  eyebrow: 'Гимназическое научное общество учащихся',
  title: 'Новая Наука',
  subtitle:
    'Пространство исследований, проектов, секций и научных инициатив гимназического научного общества учащихся.',
};

export const narrativeTextConfig: NarrativeTextConfig = {
  line1: 'Пространство, где любопытство становится исследованием.',
  line2: 'От филологии и STEM до экологии, языков и школьных инициатив.',
  line3:
    'ГНОУ объединяет учеников, педагогов и проекты в одну живую исследовательскую среду.',
};

export const aboutConfig: AboutConfig = {
  label: 'Об обществе',
  headline: 'Гимназическое Научное Общество «Новая наука»',
  intro: [
    'Добро пожаловать в гимназическое научное общество учащихся «Новая наука» — пространство, где любопытство и стремление к знаниям становятся основой для научного роста и творчества. Участники этого общества объединены общей целью — исследовать мир вокруг нас, открывать новые горизонты и развивать критическое мышление.',
    '«Новая наука» — это не просто название. Это отражение нашего подхода к обучению и познанию, где каждый из нас может внести свой вклад в общее дело. Мы верим, что наука — это не только набор фактов и теорий, но и увлекательный процесс открытия, который требует смелости, настойчивости и креативности.',
    'В нашем обществе мы стремимся создать атмосферу поддержки и сотрудничества, где каждый участник может делиться своими идеями, проводить исследования и участвовать в различных проектах. Мы организуем мастер-классы, семинары, научные конференции и экскурсии, которые помогают нам углубить знания и расширить горизонты.',
    'Мы уверены, что наука играет ключевую роль в формировании будущего. Наша миссия — вдохновить молодое поколение на изучение различных областей науки, от физики и химии до биологии и экологии. Мы стремимся не только к личному развитию, но и к тому, чтобы внести вклад в общество, решая актуальные проблемы и создавая инновационные решения.',
  ],
  historyTitle: 'История ГНОУ',
  history: [
    'Гимназическое Научное Общество «Новая наука» (ГНОУ) было основано в 2014 году с целью стимулирования интереса учащихся к научным исследованиям и развитию их творческого потенциала.',
    'За годы своего существования общество стало важной частью образовательного процесса в гимназии, объединяя учеников, учителей и родителей вокруг идеи науки и инноваций.',
  ],
  traditions: [
    {
      title: 'Посвящение в члены общества',
      description:
        'В начале учебного года ГНОУ проводит торжественную церемонию посвящения новых членов общества. Это событие символизирует вступление учеников в научное сообщество, где они получают возможность развивать свои идеи и участвовать в интересных проектах.',
    },
    {
      title: 'Традиционный фестиваль наук',
      description:
        'Каждый февраль ГНОУ проводит традиционный фестиваль наук, в рамках которого учащиеся представляют проекты, проводят мастер-классы и интерактивные выставки.',
    },
    {
      title: 'Экологическое направление',
      description:
        'Наша экологическая тропа существует уже 10 лет и используется как площадка для практических занятий по экологии, ботанике и биологии.',
    },
    {
      title: 'Онлайн-недели на платформе Instagram',
      description:
        'С 2020 года мы проводим онлайн-недели в Instagram, расширяя аудиторию и делясь достижениями с родителями и школьным сообществом.',
    },
    {
      title: 'Научные экспедиции и выездные семинары',
      description:
        'Учащиеся посещают заповедники, научные центры и университеты, погружаясь в практическое изучение науки.',
    },
    {
      title: 'Научные дебаты',
      description:
        'Новая традиция дебатов помогает обсуждать актуальные научные вопросы, развивать критическое мышление и навыки аргументации.',
    },
    {
      title: 'Научный вечер',
      description:
        'Ежегодный формат с экспериментами, научными шоу и лекциями приглашённых спикеров создаёт неформальную атмосферу вовлечения в науку.',
    },
    {
      title: 'Тайные заседания',
      description:
        'Закрытые встречи дают возможность обсуждать смелые идеи и проекты в атмосфере доверия и открытости.',
    },
    {
      title: 'Летний научный лагерь «Новая наука»',
      description:
        'В июне 2026 года планируется первый летний научный лагерь, где учащиеся будут работать над проектами в команде и общаться с экспертами.',
    },
  ],
  conclusion:
    'ГНОУ продолжает развиваться как открытое исследовательское сообщество, где ученики могут пробовать идеи, работать в команде и превращать интерес к науке в реальные проекты.',
};

export const identitySectionConfig: IdentitySectionConfig = {
  label: 'Ценности',
  title: 'Девиз, кредо и гимн',
  motto: 'Знание — сила, наука — путь к будущему!',
  credo:
    'Мы стремимся к познанию, исследуем мир вокруг, открываем новые горизонты и верим в силу науки. Каждый день — это шанс узнать что-то новое и сделать шаг к светлому будущему!',
  anthemTitle: 'Гимн',
  anthemSections: [
    {
      label: 'Куплет 1',
      lines: [
        'Проходят дни, пролетают года,',
        'И рождаются идеи…',
        'А ты идёшь — в твоей душе и глазах',
        'Свет открытий и стремлений',
        'Но не смотри, не смотри ты по сторонам,',
        'Оставайся таким как есть,',
        'Не сдавайся ты никогда.',
        'Целый мир озаряет науки свет,',
        'Если в сердце живёт мечта!',
      ],
    },
    {
      label: 'Припев',
      lines: [
        'Не смотри, не смотри ты по сторонам,',
        'Оставайся таким, как есть,',
        'Не сдавайся ты никогда.',
        'Целый мир озаряет науки свет,',
        'Если в сердце живёт мечта.',
      ],
    },
    {
      label: 'Куплет 2',
      lines: [
        'Через тернии к звездам мы идем и не боимся поражений,',
        'Не спеши — каждый опыт и расчет нас приближает вновь к победам!',
        'Не смотри, не смотри ты по сторонам,',
        'Оставайся таким, как есть,',
        'Не сдавайся ты никогда.',
        'Целый мир озаряет науки свет,',
        'Если в сердце живёт мечта.',
      ],
    },
    {
      label: 'Припев',
      lines: [
        'Не смотри, не смотри ты по сторонам,',
        'Оставайся таким, как есть,',
        'Не сдавайся ты никогда.',
        'Целый мир озаряет науки свет,',
        'Если в сердце живёт мечта.',
      ],
    },
    {
      label: 'Припев (финал)',
      lines: [
        'Не смотри, не смотри ты по сторонам,',
        'Оставайся таким, как есть,',
        'Не сдавайся ты никогда.',
        'Целый мир озаряет науки свет,',
        'Если в сердце живёт мечта.',
        'Не смотри, не смотри ты по сторонам,',
        'Оставайся таким, как есть,',
        'Не сдавайся ты никогда.',
        'Целый мир озаряет науки свет,',
        'Если в сердце живёт мечта.',
      ],
    },
  ],
};

export const sectionWindowConfig: SectionWindowConfig = {
  sectionLabel: 'Разделы',
  sectionTitle: 'Окно разделов ГНОУ',
  intro:
    'Здесь собраны ключевые направления, люди и материалы научного общества в формате интерактивных вкладок.',
  tabs: [
    {
      id: 'about',
      label: 'О нас',
      eyebrow: 'Общество',
      title: 'Гимназическое Научное Общество «Новая наука»',
      description:
        'Мы создаём среду, где исследовательские идеи, творчество и командная работа становятся частью школьной культуры.',
      details: [
        'ГНОУ основано в 2014 году.',
        'Общество объединяет учеников, учителей и родителей вокруг науки и инноваций.',
        'В программе: мастер-классы, конференции, экскурсии и проектная работа.',
      ],
      features: [
        {
          title: 'Миссия',
          description: 'Вдохновить учеников изучать разные области науки и создавать собственные решения.',
        },
        {
          title: 'Подход',
          description: 'Поддержка, сотрудничество и пространство для смелых идей без формального давления.',
        },
      ],
    },
    {
      id: 'directions',
      label: 'Секции',
      eyebrow: 'Направления',
      title: 'Секции ГНОУ',
      description:
        'Гуманитарные, физико-математические, естественнонаучные, языковые и младшие исследовательские направления работают как самостоятельные траектории ГНОУ.',
      features: [
        {
          title: 'Общественно-гуманитарная секция',
          description: 'Русский и белорусский язык, литература, история и обществоведение в формате исследовательских и творческих проектов.',
        },
        {
          title: 'Физико-математическая секция',
          description: 'Математика, информатика, физика, астрономия и трудовое обучение.',
        },
        {
          title: 'Юные химики и экологи',
          description: 'Практические химико-биологические занятия, мастер-классы, эксперименты и предметные онлайн-недели.',
        },
        {
          title: 'Секция естественных наук',
          description: 'Химия, биология, география и экология через исследования, экологические наблюдения и проектную деятельность.',
        },
        {
          title: 'Секция иностранных языков',
          description: 'Английский, китайский и немецкий язык, языковые клубы и культурные события.',
        },
        {
          title: 'Юные исследователи',
          description: 'Начальная школа, первые проекты, наблюдения и знакомство с исследовательской деятельностью.',
        },
      ],
    },
    {
      id: 'leadership',
      label: 'Руководство',
      eyebrow: 'Координация',
      title: 'Кто ведёт общество',
      description:
        'Работу ГНОУ поддерживают педагог, ученическое руководство и сайт, отвечающие за организацию секций, событий и информационного сопровождения.',
      details: [
        'Руководитель: Гавриленко Арина Викторовна, учитель химии.',
        'Председатель: Гончарко Андрей Алексеевич, учащийся 10 «А» класса.',
        'Разработчик сайта: Бурак Андрей, учащийся 11 «Б» класса.',
      ],
      features: [
        {
          title: 'Организация',
          description: 'Координация секций, событий, проектных циклов и исследовательской повестки.',
        },
        {
          title: 'Представительство',
          description: 'Связь между участниками, инициативами и школьным сообществом.',
        },
      ],
    },
    {
      id: 'guide',
      label: 'Методичка',
      eyebrow: 'Instagram-активности',
      title: 'Методичка',
      description:
        'Материалы онлайн-недели доступны прямо во вкладке как отдельный рабочий ресурс секции.',
      details: [
        'PDF открывается прямо на сайте.',
        'Материал помогает быстро перейти к сценарию проведения и публикации материалов.',
      ],
      cta: {
        label: 'Открыть PDF',
        href: asset('Методичка онлайн-недели.pdf'),
      },
    },
  ],
};

export const zigZagGridConfig: ZigZagGridConfig = {
  sectionLabel: 'Традиции',
  sectionTitle: 'Что формирует ГНОУ',
  items: [
    {
      id: 'festival',
      title: 'Традиционный фестиваль наук',
      subtitle: 'Ежегодная практика',
      description:
        'Каждый февраль ученики представляют проекты, проводят мастер-классы и собирают вокруг науки школьное сообщество.',
      image: asset('images/project-1.jpg'),
      imageAlt: 'Научный проект',
      reverse: false,
    },
    {
      id: 'ecopath',
      title: 'Экологическая тропа',
      subtitle: '10 лет развития',
      description:
        'Отдельная группа учащихся ведёт исследования природы, поддерживает тропу и использует её как практическую лабораторию.',
      image: asset('images/collection-3.jpg'),
      imageAlt: 'Экологическое направление',
      reverse: true,
    },
    {
      id: 'debates',
      title: 'Научные дебаты и тайные заседания',
      subtitle: 'Новые форматы',
      description:
        'Дискуссии, квартальные встречи и закрытые обсуждения помогают ученикам формулировать идеи, спорить по существу и развивать аргументацию.',
      image: asset('images/gallery-3.jpg'),
      imageAlt: 'Ученики в обсуждении',
      reverse: false,
    },
  ],
};

export const cardStackConfig: CardStackConfig = {
  sectionTitle: 'Проекты и достижения',
  sectionSubtitle: 'События, которые уже работают на историю общества',
  cards: [
    {
      id: 1,
      image: asset('images/project-1.jpg'),
      title: 'Ежегодная научная конференция',
      description: 'Проектные защиты, исследовательские выступления и обмен результатами.',
      rotation: -3,
    },
    {
      id: 2,
      image: asset('images/project-2.jpg'),
      title: 'Олимпиада по математике',
      description: 'Соревновательная STEM-практика и развитие аналитического мышления.',
      rotation: 2,
    },
    {
      id: 3,
      image: asset('images/project-3.jpg'),
      title: 'Лингвистический турнир',
      description: 'Филологические задачи, языковая культура и исследовательский подход.',
      rotation: -2,
    },
    {
      id: 4,
      image: asset('images/project-4.jpg'),
      title: 'Экологический проект',
      description: 'Полевые наблюдения, мониторинг среды и практические инициативы.',
      rotation: 3,
    },
  ],
};

export const breathSectionConfig: BreathSectionConfig = {
  backgroundImage: '',
  backgroundAlt: '',
  title: '',
  subtitle: '',
  description: '',
};

export const footerConfig: FooterConfig = {
  marqueeText: 'НОВАЯ НАУКА • ИССЛЕДУЙ • СОЗДАВАЙ • ОТКРЫВАЙ • ГНОУ • ',
  heading: 'Наука начинается с вопроса, продолжается исследованием и приводит к открытию.',
  description:
    'ГНОУ «Новая Наука» объединяет учеников, идеи, проекты и исследовательские инициативы в живое научное сообщество гимназии.',
  contactLabel: 'Контакты',
  contact: [
    {
      label: 'Instagram',
      value: '@bor_gim',
      href: 'https://www.instagram.com/bor_gim/',
    },
    {
      label: 'Telegram',
      value: '@borgymnasium',
      href: 'https://t.me/borgymnasium',
    },
    {
      label: 'Руководитель',
      value: 'Гавриленко А.В.',
    },
    {
      label: 'Положение о ГНОУ',
      value: 'Скачать DOCX',
      href: asset('ПОЛОЖЕНИЕ О ГНОУ.docx'),
    },
  ],
  locationLabel: 'Локация',
  address: ['Гимназия', 'Кабинет химии'],
  socialLabel: 'Соцсети',
  socials: [
    {
      platform: 'instagram',
      href: 'https://www.instagram.com/bor_gim/',
    },
    {
      platform: 'telegram',
      href: 'https://t.me/borgymnasium',
    },
  ],
  logoText: 'Новая Наука',
  copyright: '© 2020-2026 ГНОУ «Новая Наука»',
  links: [
    { label: 'Окно разделов', href: '#sections-window' },
    { label: 'Девиз и гимн', href: '#identity' },
    { label: 'Координация', href: '#leadership' },
    { label: 'Instagram', href: '#instagram-guide' },
  ],
};

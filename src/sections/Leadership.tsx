import { Award, GraduationCap, Star, UserCog } from 'lucide-react';

interface LeaderBlock {
  title: string;
  items: string[];
  collapsible?: boolean;
  compact?: boolean;
}

interface LeaderLink {
  label: string;
  href: string;
}

interface Leader {
  role: string;
  name: string;
  image: string;
  imageClassName?: string;
  title: string;
  intro: string;
  icon: typeof UserCog;
  blocks: LeaderBlock[];
  links: LeaderLink[];
  contacts: string[];
}

const leaders: Leader[] = [
  {
    role: 'Руководитель ГНОУ «Новая Наука»',
    name: 'Гавриленко Арина Викторовна',
    image: `${import.meta.env.BASE_URL}Picture1.jpg`,
    imageClassName: 'object-top',
    title: 'учитель химии высшей квалификационной категории',
    intro:
      'Член областного клуба педагогических работников «Флагман», участник творческих групп учителей химии и биологии областного и республиканского уровней.',
    icon: UserCog,
    blocks: [
      {
        title: 'Научная работа',
        collapsible: true,
        items: [
          'Тема магистерской диссертации: «Экологическая тропа как интегративная форма экологического образования студентов педагогического вуза».',
          'Тема кандидатской диссертации: «Оценка чистоты воздуха на основе состояния эпифитных лихеносинузий антропогенных и природных экосистем».',
        ],
      },
      {
        title: 'Достижения и проекты',
        compact: true,
        collapsible: true,
        items: [
          'Автор более 50 статей в различных сборниках и журналах.',
          'Автор 5 актов внедрения.',
          'Создатель предметных онлайн-недель на платформе Instagram.',
          'Методическая разработка «Проведение предметных онлайн-недель на платформе Instagram как средство развития познавательного интереса учащихся» прошла экспертную оценку и рекомендована к распространению.',
          'Автор-разработчик экологической тропы «Войди в природу другом» ГУО Боровлянская гимназия.',
          'Победитель Республиканского конкурса Telegram-каналов «Время Telegram», диплом I степени, канал «Преподавание с ЛЮБОВЬЮ».',
        ],
      },
      {
        title: 'Публичные материалы',
        collapsible: true,
        items: [
          'Интервью для программы «Женская среда» («Радио-Минск») от 1 октября 2025 года.',
        ],
      },
    ],
    links: [
      { label: 'Telegram-канал', href: 'https://t.me/chimiaAV' },
      { label: 'Подкаст «Радио-Минск»', href: 'https://minsknews.by/podkasty-radio-minsk/?ysclid=mfv0nckq2g397298532' },
    ],
    contacts: ['+375447652726', 'Inst: @arina_gavrilenko, @arina_chemistry'],
  },
  {
    role: 'Председатель ГНОУ «Новая Наука»',
    name: 'Гончарко Андрей Алексеевич',
    image: `${import.meta.env.BASE_URL}Picture2.png`,
    imageClassName: 'object-top',
    title: 'учащийся 10 «А» класса с углубленным изучением физики и математики',
    intro:
      'Увлекается олимпиадной и исследовательской деятельностью по математике. Специализируется на геометрии, в частности преобразованиях плоскости, и комбинаторике.',
    icon: GraduationCap,
    blocks: [
      {
        title: 'Исследовательский профиль',
        items: [
          'Продолжительное время специализировался на экстремальной теории графов в рамках Республиканского турнира юных математиков: решал предложенные пункты, обобщал полученные результаты, анализировал отечественные и зарубежные статьи по теме.',
          'Идеи и вдохновение берет из музыки.',
        ],
      },
      {
        title: 'Достижения',
        items: [
          'Победитель III этапа республиканской олимпиады по математике, диплом III степени.',
          'Победитель Республиканского турнира юных математиков, диплом II степени.',
          'Абсолютный победитель областной конференции в разделе «математика» и дважды участник республиканских конференций работ учащихся исследовательского характера.',
          'Участник заключительного этапа Всероссийской олимпиады «Высшая проба» на базе университета «ВШЭ» по математике.',
        ],
      },
    ],
    links: [],
    contacts: [],
  },
  {
    role: 'Разработчик сайта',
    name: 'Бурак Андрей',
    image: `${import.meta.env.BASE_URL}images/photo_2026-04-08_13-10-13.jpg`,
    imageClassName: 'object-top',
    title: 'учащийся 11 «Б» класса',
    intro:
      'Полностью отвечает за информационную сторону гимназического общества, развивает сайт ГНОУ и помогает учащимся увереннее работать с цифровыми инструментами.',
    icon: GraduationCap,
    blocks: [
      {
        title: 'Достижения',
        items: [
          'Олимпиадник по информатике: успешно участвует в олимпиадах, демонстрируя высокий уровень знаний и навыков.',
          'Командная работа: в его команде пять учащихся, которые обучаются у Андрея и перенимают его опыт для дальнейшего ведения сайта.',
        ],
      },
      {
        title: 'Поддержка учащихся',
        items: [
          'Активно помогает другим гимназистам в создании презентаций для защиты учебных проектов.',
          'Периодически проводит мастер-классы на темы «Создание эффективных презентаций» и «Использование информационных технологий в учебном процессе».',
          'Не только разрабатывает сайт, но и вдохновляет учащихся на изучение информатики и развитие навыков работы с информационными технологиями.',
        ],
      },
    ],
    links: [],
    contacts: [],
  },
];

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="border-t border-kaleo-earth/10 bg-kaleo-sand px-4 py-24 sm:px-6 md:py-32 lg:px-8 xl:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
            <Star className="h-4 w-4" />
            Координация
          </p>
          <h2 className="mt-4 font-display text-headline text-kaleo-earth">
            Координация ГНОУ
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-5xl justify-items-center gap-6">
          {leaders.map((leader) => {
            return (
              <article
                key={leader.role}
                className="group w-full max-w-5xl rounded-[30px] border border-kaleo-earth/10 bg-kaleo-cream/70 p-7 md:p-8"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
                  <div className="mx-auto w-[132px] flex-none self-center md:mx-0 md:w-[148px] lg:w-[160px]">
                    <div className="overflow-hidden rounded-[24px] border border-kaleo-earth/10 bg-kaleo-sand">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className={`h-[176px] w-full object-cover md:h-[208px] lg:h-[224px] ${leader.imageClassName ?? ''}`}
                      />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
                      <div className="min-w-0">
                        <h3 className="font-display text-[1.6rem] leading-tight text-kaleo-earth md:text-[2rem]">
                          {leader.name}
                        </h3>
                        <p className="mt-3 flex items-center gap-2 font-body text-sm text-kaleo-earth/55">
                          <Award className="h-4 w-4 text-kaleo-terracotta" />
                          {leader.title}
                        </p>
                      </div>
                      <span className="inline-flex min-h-[2rem] max-w-full self-start rounded-full border border-kaleo-earth/10 bg-kaleo-sand px-3 py-1 text-left font-body text-[11px] uppercase tracking-[0.18em] text-kaleo-terracotta md:text-right">
                        {leader.role}
                      </span>
                    </div>

                    <p className="mt-5 font-body text-sm leading-7 text-kaleo-earth/68 md:text-base md:leading-8">
                      {leader.intro}
                    </p>

                    <div className="mt-8 space-y-6">
                  {leader.blocks.map((block) => (
                    <section key={block.title}>
                      {block.collapsible ? (
                        <details className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand/70 px-4 py-4">
                          <summary className="cursor-pointer list-none font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                            {block.title}
                          </summary>
                          {block.compact ? (
                            <ul className="mt-4 space-y-2">
                              {block.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 font-body text-sm leading-6 text-kaleo-earth/72"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-kaleo-terracotta" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="mt-4 space-y-3">
                              {block.items.map((item) => (
                                <div
                                  key={item}
                                  className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream/70 px-4 py-4 font-body text-sm leading-7 text-kaleo-earth/72"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          )}
                        </details>
                      ) : (
                        <>
                          <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                            {block.title}
                          </p>
                          <div className="mt-3 space-y-3">
                            {block.items.map((item) => (
                              <div
                                key={item}
                                className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand/70 px-4 py-4 font-body text-sm leading-7 text-kaleo-earth/72"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </section>
                  ))}
                    </div>

                    {leader.links.length > 0 && (
                      <div className="mt-8">
                        <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                          Ссылки
                        </p>
                        <div className="mt-3 flex flex-col gap-3">
                          {leader.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-kaleo-earth/10 bg-kaleo-sand px-4 py-3 font-body text-sm text-kaleo-earth transition hover:border-kaleo-terracotta hover:text-kaleo-terracotta"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {leader.contacts.length > 0 && (
                      <div className="mt-8">
                        <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                          Контакты
                        </p>
                        <div className="mt-3 space-y-3">
                          {leader.contacts.map((contact) => (
                            <div
                              key={contact}
                              className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand px-4 py-3 font-body text-sm text-kaleo-earth/72"
                            >
                              {contact}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

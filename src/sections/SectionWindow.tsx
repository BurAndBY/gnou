import { useMemo, useState } from 'react';
import { ArrowUpRight, FileText, Layers3, Shield, Users, X, Plus, Minus } from 'lucide-react';
import { sectionWindowConfig, type WindowTab } from '../config';

const iconMap = {
  about: Shield,
  directions: Layers3,
  leadership: Users,
  guide: FileText,
};

function TabPanel({ tab }: { tab: WindowTab }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="font-body text-xs uppercase tracking-[0.25em] text-kaleo-terracotta">
          {tab.eyebrow}
        </p>
        <h3 className="mt-4 font-display text-[2.2rem] leading-tight text-kaleo-cream md:text-[3rem]">
          {tab.title}
        </h3>
        <p className="mt-4 max-w-2xl font-body text-sm leading-7 text-kaleo-cream/72 md:text-base">
          {tab.description}
        </p>

        {tab.details && (
          <div className="mt-8 space-y-3">
            {tab.details.map((detail) => (
              <div
                key={detail}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-kaleo-cream/76"
              >
                {detail}
              </div>
            ))}
          </div>
        )}

        {tab.cta && (
          <a
            href={tab.cta.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-kaleo-terracotta/40 px-5 py-3 font-body text-sm text-kaleo-cream transition hover:border-kaleo-terracotta hover:bg-kaleo-terracotta/10"
          >
            {tab.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="grid gap-4 self-start">
        {tab.features?.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[26px] border border-white/10 bg-[#171717] p-5 md:p-6"
          >
            <p className="font-display text-2xl text-kaleo-cream">{feature.title}</p>
            <p className="mt-3 font-body text-sm leading-6 text-kaleo-cream/64">
              {feature.description}
            </p>
          </article>
        ))}

        {tab.id === 'guide' && (
          <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#171717]">
            <div className="border-b border-white/10 px-5 py-4 font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
              Предпросмотр ресурса
            </div>
            <div className="h-[420px] bg-white">
              <iframe
                src={tab.cta?.href}
                title="Методичка онлайн-недели"
                className="h-full w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const SectionWindow = () => {
  const tabs = sectionWindowConfig.tabs;
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '');

  const active = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) ?? tabs[0],
    [activeTab, tabs]
  );

  if (!sectionWindowConfig.sectionTitle || tabs.length === 0 || !active) return null;

  return (
    <section
      id="sections-window"
      className="relative bg-kaleo-sand px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-kaleo-terracotta">
            {sectionWindowConfig.sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-headline text-kaleo-earth">
            {sectionWindowConfig.sectionTitle}
          </h2>
          <p className="mt-4 font-body text-sm leading-7 text-kaleo-earth/70 md:text-base">
            {sectionWindowConfig.intro}
          </p>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-[#3a352f] bg-kaleo-charcoal shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
          <div className="flex items-center gap-4 border-b border-white/10 bg-[#26221d] px-4 py-3 md:px-5">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="flex-1">
              <div className="max-w-xl rounded-full bg-[#171411] px-4 py-2 font-body text-sm text-kaleo-cream/45">
                новая-наука.гимназия.рф / kaleo-style
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button className="rounded-md p-2 text-kaleo-cream/40 transition hover:bg-white/5 hover:text-kaleo-cream/70">
                <Plus className="h-4 w-4" />
              </button>
              <button className="rounded-md p-2 text-kaleo-cream/40 transition hover:bg-white/5 hover:text-kaleo-cream/70">
                <Minus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-end gap-2 overflow-x-auto bg-kaleo-charcoal px-3 pt-3">
            {tabs.map((tab) => {
              const Icon = iconMap[tab.id as keyof typeof iconMap] ?? Layers3;
              const isActive = tab.id === active.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex min-w-[170px] items-center gap-2 rounded-t-[18px] px-4 py-3 font-body text-sm transition ${
                    isActive
                      ? 'bg-[#12100e] text-kaleo-cream'
                      : 'bg-[#2b2621] text-kaleo-cream/52 hover:bg-[#342f29] hover:text-kaleo-cream/75'
                  }`}
                >
                  <Icon className="h-4 w-4 flex-none" />
                  <span className="flex-1 truncate text-left">{tab.label}</span>
                  <span className="rounded-full p-0.5 transition group-hover:bg-white/10">
                    <X className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#12100e] p-5 md:p-8">
            <TabPanel tab={active} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWindow;

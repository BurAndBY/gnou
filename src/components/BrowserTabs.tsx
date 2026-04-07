import { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface BrowserTabsProps {
  tabs: Tab[];
}

export function BrowserTabs({ tabs }: BrowserTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <div className="w-full overflow-visible rounded-[28px] border border-kaleo-earth/10 bg-kaleo-cream/80 shadow-[0_30px_80px_rgba(42,42,42,0.12)] backdrop-blur-sm">
      <div className="flex items-center gap-3 border-b border-kaleo-earth/10 bg-kaleo-cream px-3 py-3 md:gap-4 md:px-5 md:py-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="max-w-xl flex-1">
          <div className="flex items-center gap-2 rounded-full border border-kaleo-earth/10 bg-kaleo-sand px-3 py-2 md:gap-3 md:px-4">
            <svg className="h-4 w-4 text-kaleo-earth/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="truncate font-body text-xs text-kaleo-earth/50 md:text-sm">новая-наука.гимназия.рф</span>
          </div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button className="rounded-md p-1.5 transition-colors hover:bg-kaleo-sand">
            <Plus className="h-4 w-4 text-kaleo-earth/45" />
          </button>
          <button className="rounded-md p-1.5 transition-colors hover:bg-kaleo-sand">
            <Minus className="h-4 w-4 text-kaleo-earth/45" />
          </button>
        </div>
      </div>

      <div className="kaleo-scrollbar flex items-end gap-1 overflow-x-auto bg-kaleo-cream/90 px-2 pb-2 pt-2 md:px-3 md:pt-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              group flex min-w-[156px] max-w-[220px] items-center gap-2 rounded-t-[18px] px-4 py-3 font-body text-sm font-medium
              transition-all duration-200 md:min-w-[180px] md:px-5 md:py-3.5 md:text-[15px]
              ${activeTab === tab.id
                ? 'border border-b-0 border-kaleo-earth/10 bg-kaleo-sand text-kaleo-earth'
                : 'bg-[#e2dbce] text-kaleo-earth/55 hover:bg-[#ddd4c6] hover:text-kaleo-earth/80'
              }
            `}
          >
            <span className="flex-shrink-0">{tab.icon}</span>
            <span className="flex-1 truncate text-left">{tab.label}</span>
            <span
              className={`
                flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full
                transition-colors
                ${activeTab === tab.id ? 'hover:bg-kaleo-earth/10' : 'hover:bg-kaleo-earth/10'}
              `}
            >
              <X className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </button>
        ))}
        <button className="mb-1 rounded-lg p-2 transition-colors hover:bg-kaleo-sand">
          <Plus className="h-4 w-4 text-kaleo-earth/40" />
        </button>
      </div>

      <div className="min-h-[420px] border-t border-kaleo-earth/10 bg-kaleo-sand p-4 md:min-h-[560px] md:p-8">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowserTabs;

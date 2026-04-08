import { ArrowUpRight, Globe, Instagram, Send } from 'lucide-react';
import { footerConfig } from '../config';

const socialIconMap = {
  instagram: Instagram,
  telegram: Send,
};

const Footer = () => {
  if (!footerConfig.logoText) return null;

  return (
    <footer id="contact" className="relative overflow-hidden bg-kaleo-charcoal text-kaleo-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,123,107,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(243,240,235,0.07),transparent_26%)]" />

      {footerConfig.marqueeText && (
        <div className="relative overflow-hidden border-t border-b border-white/10 py-10 md:py-14">
          <div className="animate-footer-marquee flex w-max whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                key={index}
                className="mx-6 font-display text-[15vw] leading-none tracking-tight text-transparent md:mx-8 md:text-[10vw]"
                style={{ WebkitTextStroke: '1px rgba(243,240,235,0.12)' }}
              >
                {footerConfig.marqueeText}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-18">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.7fr_0.8fr]">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.24em] text-kaleo-terracotta">
              Финальный блок
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] leading-[0.95] text-kaleo-cream md:text-[3.5rem]">
              {footerConfig.logoText}
            </h2>
            <p className="mt-5 max-w-xl font-body text-sm leading-7 text-kaleo-cream/65 md:text-base">
              {footerConfig.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {footerConfig.socials.map((social) => {
                const Icon = socialIconMap[social.platform as keyof typeof socialIconMap] ?? Globe;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.platform}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-kaleo-cream/72 transition hover:border-kaleo-terracotta hover:text-kaleo-cream"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
              Навигация
            </p>
            <div className="mt-5 space-y-3">
              {footerConfig.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 font-body text-sm text-kaleo-cream/72 transition hover:text-kaleo-cream"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                {footerConfig.contactLabel}
              </p>
              <div className="mt-5 space-y-3">
                {footerConfig.contact.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-kaleo-cream/72 transition hover:bg-white/[0.05]"
                    >
                      <span>{item.label}</span>
                      <span className="flex items-center gap-2 text-kaleo-cream">
                        {item.value}
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-kaleo-cream/72"
                    >
                      <span className="text-kaleo-cream">{item.label}:</span> {item.value}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-xs text-kaleo-cream/40">{footerConfig.copyright}</p>
          <div className="flex flex-wrap gap-5">
            {footerConfig.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-cream/40 transition hover:text-kaleo-cream/70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

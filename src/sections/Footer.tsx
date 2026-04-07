import { ArrowUpRight, Globe, Instagram, Send } from 'lucide-react';
import { footerConfig } from '../config';

const socialIconMap = {
  instagram: Instagram,
  telegram: Send,
};

const Footer = () => {
  if (!footerConfig.heading) return null;

  return (
    <footer className="relative overflow-hidden bg-kaleo-charcoal text-kaleo-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,123,107,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(243,240,235,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.24em] text-kaleo-terracotta">
              Финальный блок
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-headline text-kaleo-cream">
              {footerConfig.heading}
            </h2>
            <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-kaleo-cream/65 md:text-base">
              {footerConfig.description}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                {footerConfig.contactLabel}
              </p>
              <div className="mt-4 space-y-3">
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

            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                {footerConfig.locationLabel}
              </p>
              <div className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                {footerConfig.address.map((line) => (
                  <p key={line} className="font-body text-sm leading-6 text-kaleo-cream/72">
                    {line}
                  </p>
                ))}
              </div>

              <p className="mt-6 font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
                {footerConfig.socialLabel}
              </p>
              <div className="mt-4 flex gap-3">
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
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none text-kaleo-cream/14">
            {footerConfig.logoText}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
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
      </div>
    </footer>
  );
};

export default Footer;

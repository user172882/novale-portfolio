import { Star } from 'lucide-react';
import SectionLabel from './SectionLabel';

const TESTIMONIALS = [
  {
    quote:
      'Shivam rebuilt our marketing site from scratch and we hit a 99 Lighthouse score with a 3× improvement in conversion. He treats performance like a design decision — because it is.',
    name: 'Priya Anand',
    role: 'Co-founder, Lumen Health',
    initials: 'PA',
  },
  {
    quote:
      'We\'ve worked with three agencies before Novale. None came close. Our SaaS dashboard shipped two weeks early and paid for itself in the first quarter after launch.',
    name: 'Marcus Reid',
    role: 'CEO, Beacon HR',
    initials: 'MR',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-[#fafaf7] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <SectionLabel kicker="05 — Words from clients">Testimonials</SectionLabel>
            <h2 className="mt-5 font-display text-[38px] sm:text-[48px] md:text-[58px] leading-[1.02] tracking-[-0.02em] text-[#0a0a0a] max-w-3xl">
              Trusted by founders &
              <br />
              <em className="italic font-normal">ambitious brands.</em>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="card-hover rounded-3xl border border-[#e5e7eb] bg-white p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 text-[#0a0a0a]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-[22px] md:text-[26px] leading-[1.35] tracking-[-0.01em] text-[#0a0a0a]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-[#e5e7eb]">
                <div className="w-11 h-11 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-display text-[15px]">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-[14.5px] text-[#0a0a0a]">{t.name}</div>
                  <div className="text-[12.5px] text-[#6b7280]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

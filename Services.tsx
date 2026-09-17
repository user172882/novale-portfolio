import { Code2, LayoutDashboard, Rocket, Sparkles, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

const SERVICES = [
  {
    icon: Code2,
    n: '01',
    title: 'Custom Web Development',
    desc: 'From e-commerce to editorial sites — every project is hand-coded in Next.js, React and TypeScript. No page builders, no bloat.',
    tags: ['Next.js', 'React', 'Node'],
  },
  {
    icon: LayoutDashboard,
    n: '02',
    title: 'SaaS & Dashboard UI/UX',
    desc: 'Complex data made effortless. I design and build product interfaces founders and their users actually love returning to.',
    tags: ['Design Systems', 'Auth', 'Charts'],
  },
  {
    icon: Rocket,
    n: '03',
    title: 'High-Converting Landing Pages',
    desc: 'Story-driven, story-tested pages engineered for speed and clarity. Perfect for launches, ad campaigns and product drops.',
    tags: ['CRO', 'A/B', '98+ Perf.'],
  },
  {
    icon: Sparkles,
    n: '04',
    title: 'Advanced UI Components & Assets',
    desc: 'Micro-animations, 3D scenes, custom cursors — the polish that makes a premium brand feel premium.',
    tags: ['Framer Motion', 'Three.js', 'GSAP'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <SectionLabel kicker="02 — Services">Services</SectionLabel>
            <h2 className="mt-5 font-display text-[38px] sm:text-[48px] md:text-[58px] leading-[1.02] tracking-[-0.02em] text-[#0a0a0a] max-w-3xl">
              Specialized services for <em className="italic font-normal">ambitious brands.</em>
            </h2>
          </div>
          <p className="text-[15.5px] leading-[1.65] text-[#4b5563] max-w-sm">
            A tight, deliberate offering. Everything I take on, I do exceptionally — nothing else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.n}
                className="card-hover group relative rounded-3xl border border-[#e5e7eb] bg-white p-8 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex w-12 h-12 items-center justify-center rounded-2xl border border-[#e5e7eb] bg-[#fafaf7] group-hover:bg-[#0a0a0a] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[12px] text-[#9ca3af]">{s.n}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#0a0a0a] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>

                <h3 className="mt-8 font-display text-[26px] md:text-[30px] leading-tight tracking-tight text-[#0a0a0a]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#4b5563] max-w-md">
                  {s.desc}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-wider rounded-full border border-[#e5e7eb] px-3 py-1.5 text-[#374151]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

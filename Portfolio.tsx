import { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

type Category = 'All' | 'SaaS & Dashboards' | 'E-commerce' | 'Landing Pages' | 'Custom UI & 3D';

const FILTERS: Category[] = ['All', 'SaaS & Dashboards', 'E-commerce', 'Landing Pages', 'Custom UI & 3D'];

const PROJECTS: {
  title: string;
  category: Exclude<Category, 'All'>;
  desc: string;
  tags: string[];
  visual: 'dashboard' | 'shop' | 'landing' | '3d' | 'saas' | 'editorial';
}[] = [
  {
    title: 'Northwind Analytics',
    category: 'SaaS & Dashboards',
    desc: 'A real-time revenue OS for D2C founders. Replaced a 5-tool stack with one focused dashboard.',
    tags: ['Next.js', 'Postgres', '99/100 Perf.'],
    visual: 'dashboard',
  },
  {
    title: 'Kōra — Japanese Goods',
    category: 'E-commerce',
    desc: 'Headless Shopify storefront with a hand-crafted checkout. 2.4× conversion vs. previous theme.',
    tags: ['Shopify Hydrogen', 'Stripe', '98/100 Perf.'],
    visual: 'shop',
  },
  {
    title: 'Halo AI — Product Launch',
    category: 'Landing Pages',
    desc: 'A story-driven launch page with 3D hero. Waitlist filled to 12k in the first 48 hours.',
    tags: ['Next.js', 'Three.js', '97/100 Perf.'],
    visual: 'landing',
  },
  {
    title: 'Orbit — Motion Toolkit',
    category: 'Custom UI & 3D',
    desc: 'A cursor-reactive component library for design agencies. Ships as a private npm package.',
    tags: ['React', 'Framer Motion', 'GSAP'],
    visual: '3d',
  },
  {
    title: 'Beacon HR',
    category: 'SaaS & Dashboards',
    desc: 'People-ops platform for remote-first teams. Rebuilt on-boarding down to a 4-minute flow.',
    tags: ['TypeScript', 'tRPC', '96/100 Perf.'],
    visual: 'saas',
  },
  {
    title: 'Field Notes Journal',
    category: 'Landing Pages',
    desc: 'A quiet editorial site for a Japanese stationery brand. Print-inspired typography, zero JS bloat.',
    tags: ['Astro', 'MDX', '100/100 Perf.'],
    visual: 'editorial',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');

  const projects = useMemo(
    () => (active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="py-24 md:py-36 bg-[#fafaf7] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <SectionLabel kicker="03 — Selected Work">Work</SectionLabel>
            <h2 className="mt-5 font-display text-[38px] sm:text-[48px] md:text-[58px] leading-[1.02] tracking-[-0.02em] text-[#0a0a0a] max-w-3xl">
              Proof of <em className="italic font-normal">performance.</em>
            </h2>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`btn-press rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                active === f
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'bg-white text-[#111827] border-[#e5e7eb] hover:border-[#0a0a0a]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover group rounded-3xl border border-[#e5e7eb] bg-white overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#fafaf7] border-b border-[#e5e7eb]">
                <ProjectVisual kind={p.visual} />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider rounded-full bg-white/90 backdrop-blur border border-[#e5e7eb] px-2.5 py-1 text-[#374151]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-[22px] md:text-[26px] tracking-tight text-[#0a0a0a]">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#6b7280] whitespace-nowrap">
                    {p.category}
                  </span>
                </div>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#4b5563]">
                  {p.desc}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0a0a0a] group-hover:gap-2.5 transition-all"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  const common = 'absolute inset-0 w-full h-full';
  if (kind === 'dashboard') {
    return (
      <svg viewBox="0 0 400 250" className={common}>
        <rect width="400" height="250" fill="#fafaf7" />
        <rect x="20" y="20" width="110" height="70" rx="8" fill="white" stroke="#e5e7eb" />
        <rect x="30" y="32" width="50" height="6" rx="3" fill="#e5e7eb" />
        <text x="30" y="70" fontFamily="Fraunces" fontSize="26" fill="#0a0a0a">$48k</text>
        <rect x="140" y="20" width="110" height="70" rx="8" fill="white" stroke="#e5e7eb" />
        <rect x="150" y="32" width="50" height="6" rx="3" fill="#e5e7eb" />
        <text x="150" y="70" fontFamily="Fraunces" fontSize="26" fill="#0a0a0a">12.4%</text>
        <rect x="260" y="20" width="120" height="70" rx="8" fill="#0a0a0a" />
        <text x="270" y="46" fontFamily="JetBrains Mono" fontSize="9" fill="#9ca3af">MRR</text>
        <text x="270" y="72" fontFamily="Fraunces" fontSize="26" fill="white">$9.2k</text>
        <rect x="20" y="105" width="360" height="125" rx="8" fill="white" stroke="#e5e7eb" />
        <polyline
          points="30,200 70,180 110,190 150,160 190,170 230,140 270,150 310,120 350,135 370,110"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="2"
        />
        <polyline
          points="30,210 70,200 110,205 150,190 190,195 230,180 270,185 310,170 350,175 370,165"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
      </svg>
    );
  }
  if (kind === 'shop') {
    return (
      <svg viewBox="0 0 400 250" className={common}>
        <rect width="400" height="250" fill="#eeece5" />
        <circle cx="120" cy="125" r="70" fill="#0a0a0a" />
        <circle cx="120" cy="110" r="45" fill="#fafaf7" />
        <rect x="220" y="70" width="140" height="12" rx="3" fill="#0a0a0a" />
        <rect x="220" y="92" width="100" height="6" rx="3" fill="#0a0a0a" opacity="0.4" />
        <rect x="220" y="104" width="120" height="6" rx="3" fill="#0a0a0a" opacity="0.4" />
        <rect x="220" y="140" width="90" height="32" rx="16" fill="#0a0a0a" />
        <text x="245" y="161" fontFamily="Inter Tight" fontSize="11" fill="white" fontWeight="600">
          Add to cart
        </text>
      </svg>
    );
  }
  if (kind === 'landing') {
    return (
      <svg viewBox="0 0 400 250" className={common}>
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fafaf7" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill="url(#lg)" />
        <text x="200" y="110" textAnchor="middle" fontFamily="Fraunces" fontSize="46" fontStyle="italic" fill="#0a0a0a">
          Halo AI
        </text>
        <rect x="140" y="135" width="120" height="10" rx="3" fill="#0a0a0a" opacity="0.3" />
        <rect x="155" y="170" width="90" height="32" rx="16" fill="#0a0a0a" />
        <text x="200" y="191" textAnchor="middle" fontFamily="Inter Tight" fontSize="11" fontWeight="600" fill="white">
          Join waitlist
        </text>
      </svg>
    );
  }
  if (kind === '3d') {
    return (
      <svg viewBox="0 0 400 250" className={common}>
        <rect width="400" height="250" fill="#0a0a0a" />
        <g stroke="#fafaf7" strokeWidth="1" fill="none" opacity="0.9">
          <polygon points="200,60 290,110 290,190 200,240 110,190 110,110" />
          <polygon points="200,60 290,190 110,190" />
          <polygon points="200,240 290,110 110,110" />
          <line x1="200" y1="60" x2="200" y2="240" />
          <line x1="110" y1="110" x2="290" y2="190" />
          <line x1="290" y1="110" x2="110" y2="190" />
        </g>
        <text x="20" y="240" fontFamily="JetBrains Mono" fontSize="10" fill="#9ca3af">
          ORBIT · v1.4.0
        </text>
      </svg>
    );
  }
  if (kind === 'saas') {
    return (
      <svg viewBox="0 0 400 250" className={common}>
        <rect width="400" height="250" fill="white" />
        <rect x="0" y="0" width="110" height="250" fill="#fafaf7" stroke="#e5e7eb" />
        <circle cx="30" cy="32" r="10" fill="#0a0a0a" />
        <rect x="20" y="60" width="70" height="6" rx="3" fill="#e5e7eb" />
        <rect x="20" y="78" width="70" height="6" rx="3" fill="#e5e7eb" />
        <rect x="20" y="96" width="70" height="6" rx="3" fill="#0a0a0a" />
        <rect x="20" y="114" width="70" height="6" rx="3" fill="#e5e7eb" />
        <rect x="130" y="25" width="240" height="40" rx="8" fill="#fafaf7" stroke="#e5e7eb" />
        <rect x="130" y="80" width="115" height="140" rx="8" fill="#0a0a0a" />
        <text x="145" y="115" fontFamily="JetBrains Mono" fontSize="10" fill="#9ca3af">TEAM</text>
        <text x="145" y="155" fontFamily="Fraunces" fontSize="38" fill="white">128</text>
        <rect x="255" y="80" width="115" height="66" rx="8" fill="#fafaf7" stroke="#e5e7eb" />
        <rect x="255" y="154" width="115" height="66" rx="8" fill="#fafaf7" stroke="#e5e7eb" />
      </svg>
    );
  }
  // editorial
  return (
    <svg viewBox="0 0 400 250" className={common}>
      <rect width="400" height="250" fill="#fafaf7" />
      <text x="200" y="90" textAnchor="middle" fontFamily="Fraunces" fontStyle="italic" fontSize="42" fill="#0a0a0a">
        Field Notes
      </text>
      <line x1="80" y1="110" x2="320" y2="110" stroke="#0a0a0a" strokeWidth="1" />
      <text x="80" y="140" fontFamily="Inter Tight" fontSize="10" fill="#4b5563">Issue 07 · Autumn 2026</text>
      <rect x="80" y="160" width="240" height="6" rx="3" fill="#0a0a0a" opacity="0.15" />
      <rect x="80" y="176" width="200" height="6" rx="3" fill="#0a0a0a" opacity="0.15" />
      <rect x="80" y="192" width="220" height="6" rx="3" fill="#0a0a0a" opacity="0.15" />
    </svg>
  );
}

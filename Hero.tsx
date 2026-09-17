import { ArrowUpRight, ArrowRight, Circle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-14 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      {/* faint background grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Availability pill */}
        <div className="fade-up flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-4 py-1.5 text-[12.5px] font-medium text-[#111827]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for 2 new projects · Q4 2026
          </div>
        </div>

        {/* Headline */}
        <h1 className="fade-up delay-1 mx-auto max-w-5xl text-center font-display text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-[76px] lg:text-[88px] text-[#0a0a0a]">
          Crafting <em className="italic font-normal text-[#111827]">high-performance</em>
          <br className="hidden sm:block" />
          {' '}websites & web apps
          <br className="hidden sm:block" />
          {' '}for ambitious brands.
        </h1>

        {/* Sub-headline (English) */}
        <p className="fade-up delay-2 mx-auto mt-8 max-w-3xl text-center text-[15.5px] md:text-[17px] leading-[1.65] text-[#4b5563]">
          Hi, I am Shivam Kumar. I don't rely on slow templates or page builders. From E-commerce stores to complex SaaS dashboards, I hand-code every website completely from scratch. The result? Super-fast, secure, and conversion-focused digital experiences your clients will love.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="btn-press inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] text-white text-[14.5px] font-medium px-7 py-4 hover:bg-[#1f2937] w-full sm:w-auto justify-center"
          >
            Start Your Project
            <ArrowUpRight className="w-4.5 h-4.5" />
          </a>
          <a
            href="#work"
            className="btn-press inline-flex items-center gap-2 rounded-full text-[14.5px] font-medium px-7 py-4 text-[#0a0a0a] hover:bg-[#f3f4f6] w-full sm:w-auto justify-center"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Meta strip */}
        <div className="fade-up delay-4 mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 max-w-4xl mx-auto">
          <Stat kpi="5+" label="Years hand-coding" />
          <Stat kpi="40+" label="Products shipped" />
          <Stat kpi="98" label="Avg. Lighthouse score" />
          <Stat kpi="100%" label="Client retention (2025)" />
        </div>
      </div>

      {/* Small corner marks like a technical drawing */}
      <CornerMarks />
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="flex flex-col items-center md:items-start border-t border-[#e5e7eb] pt-4">
      <div className="font-display text-[34px] md:text-[42px] leading-none tracking-tight text-[#0a0a0a]">
        {kpi}
      </div>
      <div className="mt-2 text-[12.5px] uppercase tracking-[0.14em] text-[#6b7280] text-center md:text-left">
        {label}
      </div>
    </div>
  );
}

function CornerMarks() {
  return (
    <>
      <Circle className="hidden md:block absolute top-24 left-6 w-2 h-2 text-[#0a0a0a] fill-[#0a0a0a]" />
      <Circle className="hidden md:block absolute top-24 right-6 w-2 h-2 text-[#0a0a0a] fill-[#0a0a0a]" />
    </>
  );
}

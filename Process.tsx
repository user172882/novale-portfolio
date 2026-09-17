import SectionLabel from './SectionLabel';

const STEPS = [
  { n: '01', title: 'Discovery & Strategy', desc: 'We map your business goals, users and success metrics before a single line is written.' },
  { n: '02', title: 'Wireframing & UI/UX Design', desc: 'Low-fi → hi-fi in Figma. Every interaction, empty state and edge case planned upfront.' },
  { n: '03', title: 'Architecture & Setup', desc: 'Type-safe foundation: Next.js, TypeScript, Postgres, CI/CD — built to scale from day one.' },
  { n: '04', title: 'Hand-Coding & Development', desc: 'Semantic, accessible components. No page builders, no template debt. Just clean code.' },
  { n: '05', title: 'Testing & Performance Optimization', desc: 'Real-device testing, 95+ Lighthouse, sub-second LCP. If it isn\'t fast, it\'s not done.' },
  { n: '06', title: 'Launch & Seamless Handover', desc: 'Zero-downtime deploy, documented codebase, and a Loom walkthrough so your team owns it.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <SectionLabel kicker="04 — Process">Process</SectionLabel>
            <h2 className="mt-5 font-display text-[38px] sm:text-[48px] md:text-[58px] leading-[1.02] tracking-[-0.02em] text-[#0a0a0a] max-w-3xl">
              How I turn raw ideas into
              <br />
              <em className="italic font-normal">digital reality.</em>
            </h2>
          </div>
          <p className="text-[15.5px] leading-[1.65] text-[#4b5563] max-w-sm">
            A six-step system built to keep things predictable, transparent and on-time — every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-14">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative border-t border-[#0a0a0a] pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[64px] md:text-[80px] leading-none tracking-[-0.03em] text-[#0a0a0a]">
                  {step.n}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#6b7280]">
                  Step {i + 1}/6
                </span>
              </div>
              <h3 className="mt-6 font-display text-[22px] md:text-[26px] leading-tight tracking-tight text-[#0a0a0a]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-[#4b5563] max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

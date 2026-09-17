import { Check } from 'lucide-react';
import SectionLabel from './SectionLabel';

const HIGHLIGHTS = [
  '100% Hand-Coded & Custom',
  'Lightning Fast (95+ Lighthouse Score)',
  'Pixel-Perfect UI/UX',
  'Clean, Scalable Architecture',
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Abstract SVG portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] border border-[#e5e7eb] bg-[#fafaf7] overflow-hidden aspect-[4/5] max-w-md">
              <AbstractPortrait />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur border border-[#e5e7eb] px-4 py-3">
                <div>
                  <div className="font-display text-[17px] leading-none text-[#0a0a0a]">Shivam Kumar</div>
                  <div className="text-[12px] text-[#6b7280] mt-1">Full-Stack Engineer · India</div>
                </div>
                <div className="font-mono text-[11px] text-[#0a0a0a] border border-[#e5e7eb] rounded-full px-2 py-1">
                  IST · 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7">
            <SectionLabel kicker="01 — About Me">About</SectionLabel>

            <h2 className="mt-5 font-display text-[38px] sm:text-[48px] md:text-[58px] leading-[1.02] tracking-[-0.02em] text-[#0a0a0a]">
              More than just code.
              <br />
              <em className="italic font-normal">Building digital solutions.</em>
            </h2>

            <p className="mt-6 text-[17px] md:text-[18px] leading-[1.6] text-[#374151]">
              I don't just build websites; I engineer scalable digital experiences that solve
              real business problems.
            </p>

            <p className="mt-4 text-[15.5px] md:text-[16px] leading-[1.7] text-[#4b5563] max-w-2xl">
              Hi, I am Shivam — the developer behind Novale. With a deep passion for clean
              architecture and pixel-perfect design, I specialize in crafting custom websites
              and web applications from the ground up. Every line of code is written with
              intention: for speed, for security, and for the humans who use it.
            </p>

            <ul className="mt-10 grid sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-[#e5e7eb] px-4 py-3.5"
                >
                  <span className="mt-0.5 flex-none inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0a0a0a] text-white">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] font-medium text-[#111827]">{h}</span>
                </li>
              ))}
            </ul>

            <a
              href="#work"
              className="mt-10 inline-flex items-center gap-2 text-[14.5px] font-medium text-[#0a0a0a] border-b border-[#0a0a0a] pb-1 hover:opacity-70"
            >
              See how I work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AbstractPortrait() {
  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fafaf7" />
          <stop offset="100%" stopColor="#eeece5" />
        </linearGradient>
        <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#0a0a0a" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#g1)" />
      <rect width="400" height="500" fill="url(#dots)" />

      {/* Big S monogram */}
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontStyle="italic"
        fontWeight="300"
        fontSize="340"
        fill="#0a0a0a"
      >
        S
      </text>

      {/* Coordinate marks */}
      <g stroke="#0a0a0a" strokeWidth="1" opacity="0.4">
        <line x1="20" y1="20" x2="40" y2="20" />
        <line x1="20" y1="20" x2="20" y2="40" />
        <line x1="380" y1="20" x2="360" y2="20" />
        <line x1="380" y1="20" x2="380" y2="40" />
        <line x1="20" y1="480" x2="40" y2="480" />
        <line x1="20" y1="480" x2="20" y2="460" />
        <line x1="380" y1="480" x2="360" y2="480" />
        <line x1="380" y1="480" x2="380" y2="460" />
      </g>

      {/* Small labels */}
      <text x="20" y="460" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6b7280">
        01 / DEV
      </text>
      <text x="320" y="460" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6b7280">
        NOVALE
      </text>
    </svg>
  );
}

import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10">
        {/* Huge wordmark */}
        <div className="pb-14 border-b border-white/10">
          <a href="#home" className="block">
            <div className="font-display italic text-[20vw] md:text-[16vw] lg:text-[220px] leading-[0.85] tracking-[-0.04em]">
              Novale.
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-10 pt-14">
          <div className="md:col-span-5">
            <p className="font-display text-[24px] leading-snug tracking-tight max-w-md">
              Hand-coded digital products built for speed and conversion.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[#0a0a0a] text-[13.5px] font-medium px-5 py-2.5 hover:bg-[#e5e7eb]"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/50 mb-5">
              Navigate
            </div>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[15px] text-white/85 hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11.5px] font-mono uppercase tracking-[0.18em] text-white/50 mb-5">
              Elsewhere
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-white/85 hover:text-white"
                >
                  Upwork · Top Rated Plus <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-white/85 hover:text-white"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-white/85 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12.5px] text-white/60">
          <div>© 2026 Novale. Crafted from scratch with clean code.</div>
          <div className="font-mono">v1.0 · Made in India · IST</div>
        </div>
      </div>
    </footer>
  );
}

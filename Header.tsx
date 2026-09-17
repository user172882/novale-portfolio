import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[#e5e7eb]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-display text-2xl md:text-[26px] tracking-tight text-[#0a0a0a]">
              Novale
            </span>
            <span className="font-mono text-[11px] text-[#6b7280] mt-1 hidden sm:inline">
              &lt;Shivam/&gt;
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-[14px] font-medium text-[#111827] hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex btn-press items-center gap-2 rounded-full bg-[#0a0a0a] text-white text-[13.5px] font-medium px-5 py-2.5 hover:bg-[#1f2937]"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#e5e7eb]"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6 pt-2 border-t border-[#e5e7eb] -mx-5 px-5">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[15px] font-medium text-[#111827] border-b border-[#f3f4f6]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0a] text-white text-[14px] font-medium px-5 py-3"
              >
                Let's Talk <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

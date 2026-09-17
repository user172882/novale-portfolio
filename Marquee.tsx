const ITEMS = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Postgres', 'Stripe', 'Framer Motion',
  'Three.js', 'Supabase', 'Prisma', 'Vercel', 'Figma', 'GSAP',
];

export default function Marquee() {
  return (
    <section className="border-y border-[#e5e7eb] bg-[#fafaf7] overflow-hidden">
      <div className="relative py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-10 px-10">
              <span className="font-display italic text-[22px] md:text-[26px] text-[#0a0a0a]">
                {item}
              </span>
              <span className="text-[#9ca3af]">✦</span>
            </div>
          ))}
        </div>
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fafaf7] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fafaf7] to-transparent" />
      </div>
    </section>
  );
}

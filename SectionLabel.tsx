export default function SectionLabel({ children, kicker }: { children: React.ReactNode; kicker: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" />
      <span className="text-[11.5px] font-mono uppercase tracking-[0.18em] text-[#6b7280]">
        {kicker}
      </span>
      <span className="sr-only">{children}</span>
    </div>
  );
}

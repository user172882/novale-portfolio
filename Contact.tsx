import { useState } from 'react';
import { Mail, Clock, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import SectionLabel from './SectionLabel';

const PROJECT_TYPES = [
  'Select project type',
  'Custom Web Development',
  'SaaS Dashboard / Product',
  'Landing Page',
  'UI Components / 3D',
  'Something else',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: PROJECT_TYPES[0], brief: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brief || form.type === PROJECT_TYPES[0]) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <SectionLabel kicker="06 — Contact">Contact</SectionLabel>
            <h2 className="mt-5 font-display text-[40px] sm:text-[52px] md:text-[64px] leading-[1.02] tracking-[-0.02em] text-[#0a0a0a]">
              Have a project in mind?
              <br />
              <em className="italic font-normal">Let's talk.</em>
            </h2>

            <p className="mt-6 text-[15.5px] leading-[1.65] text-[#4b5563] max-w-md">
              Whether you have a fully-scoped brief or a napkin sketch, I'd love to hear about it.
              Let's build something worth talking about.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@novale.dev"
                className="group flex items-center gap-4 rounded-2xl border border-[#e5e7eb] px-5 py-4 hover:border-[#0a0a0a] transition-colors"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-[#0a0a0a] text-white">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="flex-1">
                  <div className="text-[11.5px] font-mono uppercase tracking-[0.16em] text-[#6b7280]">
                    Email direct
                  </div>
                  <div className="text-[15px] font-medium text-[#0a0a0a]">hello@novale.dev</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#0a0a0a]" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-[#e5e7eb] px-5 py-4 bg-[#fafaf7]">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[11.5px] font-mono uppercase tracking-[0.16em] text-[#6b7280]">
                    Response time
                  </div>
                  <div className="text-[15px] font-medium text-[#0a0a0a]">Replies within 24 hours</div>
                </div>
              </div>

              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#e5e7eb] px-5 py-4 hover:border-[#0a0a0a] transition-colors"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-emerald-600 text-white font-display text-[15px]">
                  Up
                </span>
                <div className="flex-1">
                  <div className="text-[11.5px] font-mono uppercase tracking-[0.16em] text-[#6b7280]">
                    Also on
                  </div>
                  <div className="text-[15px] font-medium text-[#0a0a0a]">Upwork Profile · Top Rated Plus</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#0a0a0a]" />
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#e5e7eb] bg-[#fafaf7] p-6 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-[#0a0a0a] text-white inline-flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="mt-6 font-display text-[30px] tracking-tight text-[#0a0a0a]">
                    Message received.
                  </h3>
                  <p className="mt-3 text-[15px] text-[#4b5563] max-w-sm">
                    Thanks {form.name.split(' ')[0]} — I've got your brief. Expect a reply from
                    hello@novale.dev within the next 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Your name">
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Shivam Kumar"
                        className="input"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="input"
                      />
                    </Field>
                  </div>

                  <Field label="Project type">
                    <select
                      required
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="input appearance-none pr-10 bg-white"
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Project brief">
                    <textarea
                      required
                      value={form.brief}
                      onChange={(e) => setForm({ ...form, brief: e.target.value })}
                      rows={6}
                      placeholder="Tell me about your product, goals, timeline and (ideally) a rough budget range."
                      className="input resize-none"
                    />
                  </Field>

                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-[12.5px] text-[#6b7280]">
                      By sending, you agree that I may reply from hello@novale.dev.
                    </p>
                    <button
                      type="submit"
                      className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0a] text-white text-[14.5px] font-medium px-7 py-4 hover:bg-[#1f2937]"
                    >
                      Send Project Inquiry <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 14.5px;
          color: #0a0a0a;
          outline: none;
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }
        .input::placeholder { color: #9ca3af; }
        .input:focus {
          border-color: #0a0a0a;
          box-shadow: 0 0 0 3px rgba(10,10,10,0.06);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11.5px] font-mono uppercase tracking-[0.16em] text-[#6b7280] mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

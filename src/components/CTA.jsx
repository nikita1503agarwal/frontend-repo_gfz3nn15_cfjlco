export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 p-8 sm:p-12 text-center">
          <h3 className="text-3xl font-semibold text-white">Build your next site today</h3>
          <p className="mt-3 text-slate-300">Generate a page, pick a template, and publish. Its that simple.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-200 transition">Start today</a>
            <a href="#features" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">See features</a>
          </div>
        </div>
      </div>
    </section>
  );
}

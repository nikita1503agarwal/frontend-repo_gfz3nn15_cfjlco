import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-36 sm:pb-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live AI builder • Generate Next.js components in seconds
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_10px_60px_rgba(147,51,234,0.35)]">
              Ship Next.js sites faster with NovaKit
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Beautiful, production-grade templates and a smart AI that assembles pages, hooks, and components on demand.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow hover:bg-slate-200 transition">See pricing</a>
              <a href="#features" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Explore features</a>
            </div>
            <p className="mt-4 text-xs text-slate-300/80">No credit card required • Try the AI builder free</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(600px_300px_at_50%_20%,rgba(168,85,247,0.25),transparent),radial-gradient(500px_300px_at_80%_70%,rgba(59,130,246,0.25),transparent)]" />
    </section>
  );
}

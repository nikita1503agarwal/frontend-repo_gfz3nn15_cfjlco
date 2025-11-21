import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_30px_rgba(168,85,247,0.35)]" />
          <span className="text-white font-semibold tracking-tight">NovaKit</span>
          <span className="text-xs text-slate-400 ml-2 hidden sm:block">Next.js templates + AI builder</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition">Sign in</a>
          <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-200 transition">Get started</a>
          <button className="md:hidden p-2 text-white/80" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

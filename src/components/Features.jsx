import { Sparkles, Layout, Cpu, Box } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Layout className="h-5 w-5" />, 
      title: 'Templates, sections, components',
      desc: 'Curated Next.js UI kits with Tailwind. Swap sections and ship faster.'
    },
    {
      icon: <Cpu className="h-5 w-5" />, 
      title: 'AI builder',
      desc: 'Describe a page and our AI stitches components and hooks into a working screen.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />, 
      title: 'Copy-paste or export',
      desc: 'Grab snippets or export full pages and routes with one click.'
    },
    {
      icon: <Box className="h-5 w-5" />, 
      title: 'Production-ready',
      desc: 'Accessibility, dark mode, and shadcn patterns included out of the box.'
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need to launch</h2>
          <p className="mt-3 text-slate-300">A complete system for building beautiful, modern Next.js sites.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 hover:bg-white/10 transition">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-slate-900">
                {f.icon}
              </div>
              <h3 className="font-medium text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';

export default function UnicornEmbed() {
  useEffect(() => {
    if (!window.UnicornStudio) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js';
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    } else if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <section className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-white">Interactive gallery</h3>
            <p className="mt-3 text-slate-300">Explore our components project embedded below. Click Start today to begin.</p>
            <a href="#pricing" className="mt-6 inline-flex px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-200 transition">Start today</a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div data-us-project="fnQs4bISJGie4VB3KpjV" style={{width:'100%', height:'400px'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

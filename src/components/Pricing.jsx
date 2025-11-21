export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start for free. Upgrade when you need more power.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white text-lg font-medium">Starter</h3>
            <p className="mt-1 text-slate-300 text-sm">For trying the AI builder</p>
            <div className="mt-6 text-white text-4xl font-semibold">$0<span className="text-base text-slate-300 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li>• 10 AI builds/month</li>
              <li>• 25 components</li>
              <li>• Community support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-xl bg-white text-slate-900 py-3 font-medium hover:bg-slate-200 transition">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-fuchsia-400/30 bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-inset ring-white/10">
            <div className="inline-flex items-center rounded-full bg-fuchsia-500/20 text-fuchsia-200 text-xs px-2 py-1">Most popular</div>
            <h3 className="text-white text-lg font-medium mt-2">Pro</h3>
            <p className="mt-1 text-slate-300 text-sm">For indie builders and teams</p>
            <div className="mt-6 text-white text-4xl font-semibold">$29<span className="text-base text-slate-300 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li>• Unlimited AI builds</li>
              <li>• 400+ components & sections</li>
              <li>• Export pages & routes</li>
              <li>• Priority support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-xl bg-fuchsia-500 text-white py-3 font-medium hover:bg-fuchsia-400 transition">Start Pro</a>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white text-lg font-medium">Team</h3>
            <p className="mt-1 text-slate-300 text-sm">For growing teams</p>
            <div className="mt-6 text-white text-4xl font-semibold">$79<span className="text-base text-slate-300 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li>• Unlimited seats</li>
              <li>• Private collections</li>
              <li>• Role-based access</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-xl border border-white/20 text-white py-3 font-medium hover:bg-white/10 transition">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

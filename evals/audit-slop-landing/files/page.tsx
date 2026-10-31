import { ArrowRight, Zap, Shield, BarChart3, Sparkles, Check, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="pointer-events-none absolute top-[40%] right-0 h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
          <span className="text-lg font-bold">FleetIQ</span>
        </div>
        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:scale-105">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur">
          <Sparkles className="h-4 w-4 text-purple-400" /> Now in public beta
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Fleet management,{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            reimagined
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          FleetIQ empowers logistics teams to seamlessly track, optimize and scale their vehicle operations — all in one powerful platform.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold shadow-lg shadow-purple-500/25 transition-all hover:scale-105">
            Start free trial <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition-all hover:bg-white/10">
            Learn more
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">No credit card required · Cancel anytime</p>
        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-purple-500/20 backdrop-blur">
          <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-gray-900 to-gray-800" />
        </div>
      </section>

      {/* Logos */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500">Trusted by 500+ logistics teams worldwide</p>
        <div className="mt-8 flex flex-wrap justify-center gap-12 opacity-40">
          {["Acme", "Globex", "Initech", "Umbrella", "Stark"].map((l) => (
            <span key={l} className="text-xl font-bold">{l}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">Features</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Everything you need to scale</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">Powerful tools designed to streamline your workflow and supercharge your fleet.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { icon: Zap, title: "Lightning fast", desc: "Real-time tracking with blazing performance across your entire fleet." },
            { icon: Shield, title: "Enterprise security", desc: "Bank-grade encryption keeps your data safe and compliant." },
            { icon: BarChart3, title: "Smart analytics", desc: "AI-powered insights to optimize routes and reduce costs." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-purple-500/50">
              <div className="mb-4 inline-flex rounded-lg bg-purple-500/20 p-3 text-purple-400">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 text-center md:grid-cols-4">
        {[["10k+", "Vehicles tracked"], ["99.9%", "Uptime"], ["50+", "Countries"], ["24/7", "Support"]].map(([n, l]) => (
          <div key={l}>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">{n}</div>
            <div className="mt-1 text-sm text-gray-400">{l}</div>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold tracking-tight">Loved by teams everywhere</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="flex gap-1 text-yellow-400">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-gray-300">"FleetIQ transformed how we manage our fleet. It's a game-changer for our team!"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Operations Lead, Acme Logistics</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { name: "Starter", price: "$29", popular: false },
            { name: "Pro", price: "$99", popular: true },
            { name: "Enterprise", price: "Custom", popular: false },
          ].map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-8 ${p.popular ? "scale-105 border-purple-500 bg-purple-500/10" : "border-white/10 bg-white/5"}`}>
              {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold">Most popular</span>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 text-4xl font-bold">{p.price}<span className="text-base text-gray-400">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {["Unlimited vehicles", "Real-time tracking", "Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" />{f}</li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-white/10 py-3 font-semibold transition-all hover:bg-white/20">Get started</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-16 text-center">
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="mt-4 text-lg text-white/80">Join thousands of teams already using FleetIQ.</p>
          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-purple-600 transition-all hover:scale-105">Start free trial →</button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4">
          {["Product", "Company", "Resources", "Legal"].map((c) => (
            <div key={c}>
              <h4 className="font-semibold">{c}</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400"><li>Link</li><li>Link</li><li>Link</li></ul>
            </div>
          ))}
        </div>
        <p className="pb-8 text-center text-sm text-gray-500">© 2026 FleetIQ. All rights reserved.</p>
      </footer>
    </main>
  );
}

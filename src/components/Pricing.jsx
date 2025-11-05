import { motion } from 'framer-motion';

export default function Pricing({ onOrder }) {
  return (
    <section className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Simple, transparent pricing
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              name: 'Starter',
              price: '$19',
              desc: 'PDF + ePub, instant download',
              popular: false,
              features: ['PDF & ePub formats', 'Lifetime access', 'Email support'],
            },
            {
              name: 'Pro',
              price: '$39',
              desc: 'Everything in Starter + bonus resources',
              popular: true,
              features: [
                'All Starter features',
                'Bonus templates & checklists',
                'Future updates included',
              ],
            },
            {
              name: 'Team',
              price: '$99',
              desc: 'Up to 5 seats for teams',
              popular: false,
              features: ['5 licenses', 'Team usage rights', 'Priority support'],
            },
          ].map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 backdrop-blur ${
                tier.popular
                  ? 'border-emerald-400/30 bg-emerald-500/10 shadow-xl shadow-emerald-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most Popular
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="text-3xl font-bold">{tier.price}</div>
              </div>
              <p className="mt-1 text-sm text-slate-300">{tier.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOrder}
                className={`mt-6 w-full rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300 ${
                  tier.popular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                    : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15'
                }`}
              >
                Order {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

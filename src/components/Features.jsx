import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Sparkles, Download } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Actionable Content',
    description:
      'Step-by-step guides, frameworks, and templates designed to deliver real results.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    description:
      'Encrypted delivery and safe checkout powered by industry-standard providers.',
  },
  {
    icon: Sparkles,
    title: 'Modern Design',
    description:
      'Beautifully formatted pages with diagrams, examples, and dark mode ready.',
  },
  {
    icon: Download,
    title: 'Instant Download',
    description:
      'Get access immediately after purchase. Lifetime updates included.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Everything you need to learn fast
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 ring-1 ring-emerald-400/20">
                <f.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

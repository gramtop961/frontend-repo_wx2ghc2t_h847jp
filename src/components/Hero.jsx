import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOrder }) {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Instant download • Secure checkout
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Premium Digital eBooks for Creators and Entrepreneurs
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            Level up your skills with beautifully crafted, up-to-date guides. Modern design, actionable content, and lifetime updates.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOrder}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:translate-y-[-1px] hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Order Now
            </button>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              See Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

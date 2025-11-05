import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Hero onOrder={() => setShowOrder(true)} />
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing onOrder={() => setShowOrder(true)} />
      </div>
      <Footer />

      {showOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowOrder(false)}
          />
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 text-white shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Complete your order</h3>
              <button
                onClick={() => setShowOrder(false)}
                className="rounded-lg bg-white/10 px-2 py-1 text-sm hover:bg-white/15"
              >
                Close
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const payload = Object.fromEntries(data.entries());
                console.log('Order payload', payload);
                alert('Thanks! A checkout link has been sent to ' + payload.email + '.');
                setShowOrder(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-slate-400 outline-none ring-emerald-400/30 focus:ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Plan</label>
                <select
                  name="plan"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-emerald-400/30 focus:ring"
                  defaultValue="Pro"
                >
                  <option>Starter</option>
                  <option>Pro</option>
                  <option>Team</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Get Checkout Link
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-slate-400">
              Secure checkout. Instant download. 30-day refund policy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

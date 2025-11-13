import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[580px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage:
          'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center">
          <div className="px-8 md:px-16">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Crafting Digital Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-4 text-lg md:text-xl text-white/70 max-w-xl"
            >
              I’m Alex Carter — Designer & Developer blending aesthetics and code to build minimal, high-performance products.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#work" className="px-5 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-[0_0_25px_rgba(34,211,238,0.45)] transition-colors">View Work</a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white/90">Contact</a>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

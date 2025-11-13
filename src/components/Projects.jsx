import { motion } from 'framer-motion'

const items = [
  { title: 'Neon UI Kit', tag: 'Design System' },
  { title: 'Realtime Dashboard', tag: 'Web App' },
  { title: '3D Showcase', tag: 'Interactive' },
  { title: 'E-commerce Revamp', tag: 'Case Study' },
  { title: 'Brand Motion', tag: 'Animation' },
  { title: 'Portfolio CMS', tag: 'Full-stack' },
]

export default function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:
          'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />
      </div>

      <div className="px-8 md:px-16">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected Projects</h2>
          <p className="text-white/60 mt-2">A curated mix of design and engineering work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan-500/20 to-blue-600/10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.25),transparent_40%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-xl p-4">
                  <div className="text-sm text-cyan-300">{it.tag}</div>
                  <div className="text-white font-semibold mt-1">{it.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

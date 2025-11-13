import { Github, Linkedin, Dribbble, Twitter, Mail, Home, FolderKanban, User } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://dribbble.com/', label: 'Dribbble', Icon: Dribbble },
  { href: 'https://twitter.com/', label: 'Twitter', Icon: Twitter },
  { href: 'mailto:you@example.com', label: 'Email', Icon: Mail },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-24 border-r border-white/10 bg-black/60 backdrop-blur-xl flex flex-col items-center justify-between py-6 z-40">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_30px_5px_rgba(34,211,238,0.35)]" />
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-wider text-white/60">PORT</span>
        </div>
        <nav className="flex flex-col items-center gap-4 text-white/70">
          {[{label:'Home', Icon: Home, href:'#home'},{label:'Work', Icon: FolderKanban, href:'#work'},{label:'About', Icon: User, href:'#about'}].map(({label, Icon, href}) => (
            <a key={label} href={href} className="group p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Icon className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-center gap-4">
        {links.map(({ href, label, Icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 12px rgba(56,189,248,0.65))' }}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Icon className="h-5 w-5 text-cyan-400" />
          </motion.a>
        ))}
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent my-2" />
      </div>
    </aside>
  )
}

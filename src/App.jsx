import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      <Sidebar />

      <main className="ml-20 md:ml-24">
        <Hero />
        <Projects />
        <footer id="contact" className="px-8 md:px-16 py-16 border-t border-white/10 text-white/60">
          <p>© {new Date().getFullYear()} Alex Carter — Available for freelance & collaboration.</p>
        </footer>
      </main>
    </div>
  )
}

export default App

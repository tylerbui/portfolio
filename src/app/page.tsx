import { Hero } from '@/components/hero'
import { Resume } from '@/components/resume'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Resume />
      <Projects />
      <Contact />
    </main>
  )
}

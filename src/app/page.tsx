import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}

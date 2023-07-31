import { useEffect } from 'react'
import { About, Contact, Header, Navbar, ProjectContainer } from '@/components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <About />
        <ProjectContainer />
        <Contact />
      </main>
    </>
  )
}

export default Home

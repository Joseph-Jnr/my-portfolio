//import { useEffect } from 'react'
//import { Link } from 'react-router-dom'

import { About, Header, Navbar, ProjectContainer } from '@/components'

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <About />
        <ProjectContainer />
      </main>
    </>
  )
}

export default Home

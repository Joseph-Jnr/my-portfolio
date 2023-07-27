import { Stack } from '@mantine/core'
import { HeaderImg, Memoji } from '@/assets/images'
import { Link } from 'react-router-dom'
import { IconCode, IconFileText } from '@tabler/icons-react'

const About = () => {
  const scrollProjectsToView = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className='about-section relative section--padding'>
      <img className='memoji' src={Memoji} width={200} alt='' />

      <div className='text-center tr--container pb-20'>
        <h1 className='blink gradient--text mx-auto md:text-5xl'>
          Hello there!
        </h1>
        <Stack spacing='lg' className='md:px-44 mt-10'>
          <p>
            My name is Joseph Nwobodo Jnr. A meticulous and purpose-driven web
            developer that incorporates solid technical bases with creative user
            interface design with a track record in creating unique and
            responsive solutions.
          </p>
          <p>
            I have three years of experience crafting and testing user
            interfaces, combining aesthetic considerations with technical
            expertise to produce visually attractive and highly functional sites
            and apps, and ensuring customer satisfaction. Looking forward to
            making a positive impact in your company and adding value one day at
            a time.
          </p>
        </Stack>

        <div className='bright--bg md:p-20 mt-20'>
          <div className='grid md:grid-cols-2 gap-40'>
            <div className='img-area'>
              {
                <div className='profile-image relative'>
                  <img src={HeaderImg} alt='' />
                </div>
              }
            </div>
            <div className='btn-area tr--flex-row-center'>
              <Stack spacing='xl'>
                <button onClick={scrollProjectsToView}>
                  <IconCode className='mr-2' /> My Work
                </button>
                <Link to='/'>
                  <button>
                    <IconFileText className='mr-2' /> My Resume
                  </button>
                </Link>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

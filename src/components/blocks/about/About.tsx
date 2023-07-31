import { useState } from 'react'
import { Stack } from '@mantine/core'
import { Memoji, Portrait } from '@/assets/images'
import { Link } from 'react-router-dom'
import { IconCode, IconFileText } from '@tabler/icons-react'
import Typewriter from 'react-ts-typewriter'

const About = () => {
  const [typewriterEnd, setTypewriterEnd] = useState(false)

  const scrollProjectsToView = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const text =
    'My name is Joseph Nwobodo Jnr. I am a highly skilled and results-driven Frontend Developer with three years of hands-on experience creating visually stunning and user-friendly web applications. I have demonstrated a keen eye for design throughout my career, combining aesthetics with technical expertise to produce engaging and responsive interfaces. My commitment to clean code and accessibility ensures that my projects are visually appealing yet performant and scalable. I have successfully built products for individuals, institutions, and companies cutting across different sectors such as education, transportation & logistics, and real estate, ensuring customer satisfaction. I am currently the Lead Frontend Engineer at Trouvé Technologies.'

  return (
    <section className='about-section relative section--padding'>
      <img className='memoji' src={Memoji} width={200} alt='' />

      <div className='text-center tr--container pb-20'>
        <h1 className='blink gradient--text mx-auto md:text-5xl'>
          Hello there!
        </h1>
        <Stack spacing='lg' className='bio md:px-44 mt-10'>
          <p>
            <Typewriter onFinished={() => setTypewriterEnd(true)} text={text} />
          </p>
          {typewriterEnd && (
            <b className='italic' data-aos='zoom-in'>
              I seize every opportunity to learn new things.
            </b>
          )}
        </Stack>

        <div className='md:bright--bg md:p-20 mt-20'>
          <div className='grid md:grid-cols-2 gap-28'>
            <div className='img-area'>
              {
                <div className='profile-image relative'>
                  <img src={Portrait} alt='Joseph Jnr' />
                </div>
              }
            </div>
            <div className='btn-area tr--flex-row-center'>
              <Stack spacing='xl'>
                <button onClick={scrollProjectsToView}>
                  <IconCode className='mr-2' /> My Work
                </button>
                <Link
                  target='_blank'
                  to='https://drive.google.com/file/d/1H2L5CbjRuqm_wXMIEF7zpu6pYcLe-Ryl/view?usp=drive_link'
                >
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

import { Stack } from '@mantine/core'
import { Memoji } from '@/assets/images'

const About = () => {
  return (
    <section className='about-section relative section--padding'>
      <img src={Memoji} width={200} alt='' />

      <div className='section--header text-center tr--container pb-36'>
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
      </div>
    </section>
  )
}

export default About

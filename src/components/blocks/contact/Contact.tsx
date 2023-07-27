import { IconCopyright } from '@tabler/icons-react'
import { SingleContact } from '.'
import { contactList } from '@/services'

const Contact = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <section className='section--padding relative text-center'>
        <div className='header-text'>
          <h1 className='gradient--text mx-auto md:text-5xl font-semibold mb-5'>
            Let's connect
          </h1>
          <p>Feel free to reach out to me</p>
        </div>

        <div className='tr--container mt-20'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {contactList.map((contact) => (
              <SingleContact key={contact.id} {...contact} />
            ))}
          </div>
        </div>
      </section>

      <footer className='py-10 flex border-t border-t-custom-black-100'>
        <p className='mx-auto flex'>
          <IconCopyright className='mr-2' /> Joseph Nwobodo Jnr {currentYear}
        </p>
      </footer>
    </>
  )
}

export default Contact

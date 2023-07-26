import { Link } from 'react-router-dom'
import { BsInstagram, BsTwitter } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className='bg-black h-screen'>
        <nav className='flex justify-between tr--container py-7'>
          <div className='nav--brand'>JosephJnr</div>
          <div className='socials flex w-16 justify-between'>
            <Link to='/'>
              <span>
                <BsInstagram />
              </span>
            </Link>
            <Link to='/'>
              <span>
                <BsTwitter />
              </span>
            </Link>
          </div>
        </nav>
        <div className='area relative'>
          <div className='welcome--text text-center text-4xl md:text-7xl font-black tr--container'>
            <h1 className='gradient--txt'>Hi there!</h1>
            <h1 className='gradient--text'>My name is Joseph Jnr</h1>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

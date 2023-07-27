import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='tr--container py-10'>
        <div className='tr--flex-row-center'>
          <Link to='/' className='logo'>
            <h3> {'<JosephJnr />'}</h3>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { ReactNode } from 'react'
import { Avatar } from '@mantine/core'
import { Link } from 'react-router-dom'

type SingleContactProps = {
  icon: ReactNode
  name: string
  handle: string
  link: string
}

const SingleContact = ({ icon, name, handle, link }: SingleContactProps) => {
  return (
    <div className='single-contact'>
      <div className='flex gap-5'>
        <div className='icon'>
          <Avatar color='teal' radius='xl'>
            {icon}
          </Avatar>
        </div>
        <div className='text'>
          <h1>{name}</h1>
          <Link target='_blank' to={link}>
            <p>{handle}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleContact

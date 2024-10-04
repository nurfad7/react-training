import { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  return (
    <nav className='flex justify-between items-center h-14 w-full px-16 absolute z-10'>
      <Link to='/'>@Ayush Barnwal</Link>
      <div className='flex gap-8'>
        <a href='/#about'>About</a>
        <a href='/#work'>Work</a>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
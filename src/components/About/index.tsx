import { FC } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface AboutProps {
  isAtHero: boolean,
  isVisible: boolean,
  toggleVisibility: () => void;
}

const About: FC<AboutProps> = ({isVisible, toggleVisibility, isAtHero}) => {
  return (
    <div id="about" title='about' className='flex gap-16 px-16 py-20 relative'>
      <div className='w-[calc(30%-104px)] text-4xl font-medium text-left'>About</div>
      <div className='w-[74%] text-3xl text-justify text-dark-grey'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div className={`bg-black rounded-full w-10 h-10 flex justify-center z-10 text-white 
          items-center cursor-pointer top-3 right-5 fixed ${!isVisible && !isAtHero ? 'block' : 'hidden'}`}
          onClick={toggleVisibility}>
        <Icon className='text-lg' icon={faBars} />
      </div>
    </div>
  )
}

export default About;
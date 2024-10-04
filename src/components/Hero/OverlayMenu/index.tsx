import { FC } from 'react'

interface OverlayMenuProps {
  isAtHero: boolean,
  isVisible: boolean,
  toggleVisibility: () => void;
}

const OverlayMenu: FC<OverlayMenuProps> = ({isAtHero, isVisible, toggleVisibility}) => {
  return (
    <div className={`bg-black flex gap-5 justify-center items-center absolute top-1/2 right-[-18rem] 
                  h-20 w-96 text-5xl font-medium rounded-l-full hover:right-0 cursor-pointer
                  ${!isVisible && isAtHero ? 'block' : 'hidden'}`}
        onClick={toggleVisibility}>
      <span>👋</span>
      <span className='text-white'>Hi I'm Ayush</span>
    </div>
  )
}

export default OverlayMenu;
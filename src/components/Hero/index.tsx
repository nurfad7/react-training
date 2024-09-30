import { FC } from 'react';
import HeroPhoto from '../../assets/imgs/user-photo.svg'
import OverlayMenu from './OverlayMenu';
import SideMenu from './SideMenu';

interface HeroProps {
    isVisible: boolean,
    toggleVisibility: () => void;
}

const Hero: FC<HeroProps> = ({isVisible, toggleVisibility}) => {
    return (
        <div className='flex justify-center items-end h-svh w-full relative bg-dusty-violet'>
            <img src={HeroPhoto} alt='hero photo' className='max-w-3xl max-h-[87%]' />
                <span className='absolute top-1/2 text-9xl font-medium whitespace-nowrap 
                        inline-block text-white animate-move cursor-default'>
                    Webflow Developer - UI/UX Designer - Web Designer
                </span>
            <SideMenu toggleVisibility={toggleVisibility} isVisible={isVisible} />
            <OverlayMenu toggleVisibility={toggleVisibility} isVisible={isVisible} />
        </div>
    )
}

export default Hero;
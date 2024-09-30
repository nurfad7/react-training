import { FC } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface SideMenuProps {
    isVisible: boolean,
    toggleVisibility: () => void;
}

const SideMenu: FC<SideMenuProps> = ({isVisible, toggleVisibility}) => {
    const goToAbout = () => {
        toggleVisibility();
        window.location.hash = '';
        window.location.hash = '#about';
    }

    return (
        <div className={`flex absolute h-full w-full ${isVisible ? 'block' : 'hidden'}`}>
            <div className='h-full w-1/2 bg-black bg-opacity-40' onClick={toggleVisibility}></div>
            <div className='flex flex-col gap-12 h-full w-1/2 bg-black p-16 text-white'>
                <div className='flex justify-end px-5'>
                    <div onClick={goToAbout}
                        className='bg-white rounded-full w-10 h-10 flex justify-center 
                                text-black items-center cursor-pointer'>
                        <Icon className='text-lg' icon={faTimes} />
                    </div>
                </div>
                <div className='flex flex-col gap-12 text-6xl mb-16'>
                    <Link onClick={toggleVisibility} to='/'>Home</Link>
                    <a onClick={toggleVisibility} href='#about'>About</a>
                    <a onClick={toggleVisibility} href='#work'>Work</a>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='flex gap-7'>
                    <a href="linkedin.com" target='_blank'>LinkedIn</a>
                    <a href="x.com" target='_blank'>Twitter</a>
                    <a href="instagram.com" target='_blank'>Instagram</a>
                    <a href="webflow.com" target='_blank'>Webflow</a>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;
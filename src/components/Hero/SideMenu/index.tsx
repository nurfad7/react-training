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

    const goToWork = () => {
        toggleVisibility();
        window.location.hash = '';
        window.location.hash = '#about';
    }

    return (
        <div className={`flex fixed z-10 h-full w-full ${isVisible ? 'block' : 'hidden'}`}>
            <div className='h-full w-1/2 bg-black bg-opacity-40' onClick={toggleVisibility}></div>
            <div className='flex flex-col gap-12 h-full w-1/2 bg-black p-16 text-white'>
                <div className='flex justify-end px-5'>
                    <div onClick={toggleVisibility}
                        className='bg-white rounded-full w-10 h-10 flex justify-center 
                                text-black items-center cursor-pointer'>
                        <Icon className='text-lg' icon={faTimes} />
                    </div>
                </div>
                <div className='flex flex-col gap-12 text-6xl mb-16'>
                    <Link onClick={toggleVisibility} to='/'>Home</Link>
                    <a onClick={goToAbout} href='#about'>About</a>
                    <a onClick={goToWork} href='#work'>Work</a>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='flex gap-7'>
                    <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href="https://x.com" target='_blank' rel='noopener noreferrer'>Twitter</a>
                    <a href="https://instagram.com" target='_blank' rel='noopener noreferrer'>Instagram</a>
                    <a href="https://webflow.com" target='_blank' rel='noopener noreferrer'>Webflow</a>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;
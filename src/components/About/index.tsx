import { FC, useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface AboutProps {
    isVisible: boolean,
    toggleVisibility: () => void;
}

const About: FC<AboutProps> = ({toggleVisibility}) => {
    const [isAtAbout, setIsAtAbout] = useState(false);

    const goToAbove = () => {
        toggleVisibility();
        window.location.hash = '#about';
        window.location.hash = '';
    }

    const aboutRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsAtAbout(false);
                    console.log('11')
                } else {
                    setIsAtAbout(true);
                    console.log('22')
                }
            },
            { threshold: 0.6 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

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
            <div className={`bg-black rounded-full w-10 h-10 flex justify-center 
                        text-white items-center cursor-pointer absolute top-3 right-5
                        ${!isAtAbout ? 'block' : 'hidden'}`}
                 onClick={goToAbove}>
                <Icon className='text-lg' icon={faBars} />
            </div>
        </div>
    )
}

export default About;
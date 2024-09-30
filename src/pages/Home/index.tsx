import { FC, useState, useEffect } from 'react'
import Hero from '../../components/Hero';
import About from '../../components/About';
import RecentWork from '../../components/RecentWork';
import WorkGallery from '../../components/WorkGallery';
import Testimonial from '../../components/Testimonial';
import PreFooter from '../../components/PreFooter';

const Home: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isAtHero, setIsAtHero] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
            const element = document.getElementById('hero');
            if (element) {
                const rect = element.getBoundingClientRect();
                if (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                ) {
                    setIsAtHero(true);
                } else {
                    setIsAtHero(false);
                }
            }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);

    return (
        <>
            <Hero toggleVisibility={toggleMenu} isVisible={isOpen} isAtHero={isAtHero} />
            <About toggleVisibility={toggleMenu} isVisible={isOpen} isAtHero={isAtHero} />
            <RecentWork />
            <WorkGallery />
            <Testimonial />
            <PreFooter />
        </>
    )
}

export default Home;
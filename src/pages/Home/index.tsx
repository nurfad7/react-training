import { FC, useState } from 'react'
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

    return (
        <>
            <Hero toggleVisibility={toggleMenu} isVisible={isOpen} />
            <About toggleVisibility={toggleMenu} isVisible={isOpen} />
            <RecentWork />
            <WorkGallery />
            <Testimonial />
            <PreFooter />
        </>
    )
}

export default Home;
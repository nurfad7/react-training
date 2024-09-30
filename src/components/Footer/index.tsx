import { FC } from 'react'

const Footer: FC = () => {
    return (
        <div className='flex justify-between items-end h-48 w-full px-16 py-16 bg-black text-white'>
            <div>Build with 💖 by Brightscout & Ayush</div>
            <div className='flex gap-8'>
                <a href="linkedin.com" target='_blank'>LinkedIn</a>
                <a href="x.com" target='_blank'>Twitter</a>
                <a href="instagram.com" target='_blank'>Instagram</a>
                <a href="webflow.com" target='_blank'>Webflow</a>
            </div>
        </div>
    )
}

export default Footer;
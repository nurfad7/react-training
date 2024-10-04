import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className='flex justify-between items-end h-48 w-full px-16 py-16 bg-black text-white'>
      <div>Build with 💖 by Brightscout & Ayush</div>
      <div className='flex gap-8'>
        <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a href="https://x.com" target='_blank' rel='noopener noreferrer'>Twitter</a>
        <a href="https://instagram.com" target='_blank' rel='noopener noreferrer'>Instagram</a>
        <a href="https://webflow.com" target='_blank' rel='noopener noreferrer'>Webflow</a>
      </div>
    </div>
  )
}

export default Footer;
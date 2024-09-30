import { FC } from 'react'

const About: FC = () => {
    return (
        <div className='flex w-full pt-32 pb-20 px-16'>
            <div className='w-1/2 flex flex-col gap-6'>
                <img className='w-96 mb-8' src="./src/assets/imgs/user-profile.svg" alt="user photo" />
                <div className='text-lg text-dark-grey'>Contact Details</div>
                <div className='text-3xl'>ayush.barnwal@brightscout.com</div>
                <div className='text-3xl mb-6'>+91 8651447521</div>
                <div className='text-lg text-dark-grey'>Social</div>
                <a className='text-3xl' href="linkedin.com" target='_blank'>LinkedIn</a>
                <a className='text-3xl' href="instagram.com" target='_blank'>Instagram</a>
                <a className='text-3xl' href="x.com" target='_blank'>Twitter</a>
                <a className='text-3xl' href="webflow.com" target='_blank'>Webflow</a>
                <a className='text-3xl' href="figma.com" target='_blank'>Figma</a>
            </div>
            <div className='w-1/2 flex flex-col gap-12'>
                <div className='text-6xl font-medium mb-5'>Let’s build something cool together</div>
                <div className='flex flex-col'>
                    <label htmlFor='name' className='text-lg font-medium'>Name</label>
                    <input className='text-3xl border-b border-dark-grey p-5' 
                        type='text' name='name' placeholder='James Robert' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='text-lg font-medium'>Email</label>
                    <input className='text-3xl border-b border-dark-grey p-5' 
                        type='email' name='email' placeholder='ayush.barnwal@brightscout.com' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='subject' className='text-lg font-medium'>Subject</label>
                    <input className='text-3xl border-b border-dark-grey p-5' 
                        type='text' name='subject' placeholder='For web design work Enquire' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='message' className='text-lg font-medium'>Subject</label>
                    <textarea className='text-3xl border-b border-dark-grey p-5' 
                        name='message' placeholder='Type your Message' />
                </div>
                <div className='h-[4.5rem] w-48 flex justify-center items-center 
                    bg-black text-white rounded-full cursor-pointer'>
                    <span className='font-medium text-lg'>Submit</span>
                </div>
            </div>
        </div>
    )
}

export default About;
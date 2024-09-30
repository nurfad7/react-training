import { FC } from 'react'

const PreFooter: FC = () => {
    return (
        <div className='flex justify-between h-64 w-full px-16 bg-black items-center'>
            <div className='flex flex-col gap-3'>
                <div className='text-6xl text-white'>Have something in mind?</div>
                <div className='flex gap-3'>
                    <img src="./src/assets/imgs/user-thumbnail.svg" alt="user photo" className='rounded-full' />
                    <div className='text-6xl text-white'>let’s build it together.</div>
                </div>
            </div>
            <div className='h-[4.5rem] w-48 flex justify-center items-center bg-white rounded-full cursor-pointer'>
                <span className='font-medium text-lg'>Get in touch</span>
            </div>
        </div>
    )
}

export default PreFooter;
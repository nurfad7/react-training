import { FC } from 'react';

const Testimony: FC<Testimony> = ({name, photo, role, at, testimony}) => {
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className='text-3xl text-dark-grey'>{testimony}</div>
            <div className='flex gap-4'>
                <img className='w-16'
                    src={photo} alt='testifier photo' />
                <div className='flex flex-col justify-center'>
                    <div className='text-lg font-medium'>{name}</div>
                    <div className='text-sm'>{role} @ {at}</div>
                </div>
            </div>
        </div>
    )
}

export default Testimony;
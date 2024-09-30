import { FC } from 'react';
import Project from './Project';
import { RECENT_WORKS } from '../../constants/ProjectList';

const RecentWork: FC = () => {
    return (
        <div id="work" title='work' className='flex gap-16 px-16 my-20'>
            <div className='w-[calc(30%-104px)] text-4xl font-medium text-left'>Recent Work</div>
            <div className='w-[74%] flex flex-col gap-10'>
                { RECENT_WORKS.map((work, key) => (
                    <Project key={key} {...work}/>
                ))}
            </div>
        </div>
    )
}

export default RecentWork;
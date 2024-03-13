import React from 'react'

export default function CompetitionBox({ compLogo, compName }) {
    return (
        <div className='bg-black p-2 flex items-center rounded-xl '>
            <div className='ml-4'>
                <img src={compLogo} alt='' className='w-6 lg:w-full lg:h-full' />
            </div>
            <div className='ml-2-percent text-white text-sm lg:text-2xl font-semibold'>{compName}</div>
        </div>
    )
}

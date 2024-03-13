import React from 'react'

export default function CompetitionBox({ compLogo, compName }) {
    return (
        <div className='bg-black p-3 flex items-center rounded-xl md:w-2/3 xl:w-3/5 2xl:w-2/5'>
            <div className='ml-1-percent'>
                <img src={compLogo} alt='' className='w-9 lg:w-full md:w-14 sm:w-12' />
            </div>
            <div className='ml-5-percent text-white text-sm sm:text-lg lg:text-2xl md:text-xl font-semibold'>{compName}</div>
        </div>
    )
}

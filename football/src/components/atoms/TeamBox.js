import React from 'react'

export default function TeamBox(props) {
    return (
        <div className='bg-black flex items-center rounded-xl m p-2'>
            <div className='ml-1-percent'>
                <img src={props.imageUrl} alt='' className='w-3/4 h-4/5 lg:w-full md:w-14 sm:w-12' />
            </div>
            <div className='text-white font-semibold text-sm sm:text-lg lg:text-2xl md:text-xl ml-3'>{props.clubName}</div>
        </div>
    )
}
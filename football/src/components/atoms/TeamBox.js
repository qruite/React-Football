import React from 'react'

export default function TeamBox(props) {
    return (
        <div className='bg-black flex items-center rounded-xl m p-3'>
            <div className='ml-1-percent'>
                <img src={props.imageUrl} alt='' className='w-9 lg:w-full md:w-14 sm:w-12' />
            </div>
            <div className='text-white font-semibold text-sm sm:text-lg lg:text-2xl md:text-xl ml-5-percent'>{props.clubName}</div>
        </div>
    )
}
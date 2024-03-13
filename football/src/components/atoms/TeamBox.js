import React from 'react'

export default function TeamBox(props) {
    return (
        <div className='min-h-24 bg-black flex items-center rounded-xl'>
            <div className='ml-4'>
                <img src={props.imageUrl} alt='' />
            </div>
            <div className='text-white font-semibold text-lg ml-4'>{props.clubName}</div>
        </div>
    )
}

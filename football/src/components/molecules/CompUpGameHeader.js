import React from 'react'
import UpArrow from '../atoms/UpArrow'

export default function CompUpGameHeader(props) {
    let arrowUp = <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
    return (
        <div className='w-full bg-black h-10 flex justify-between rounded-2xl lg:h-14 text-white text-sm font-semibold md:text-lg xl:text-xl'>
            <div className='flex items-center ml-6'>
                <div>
                    <img src={props.imageUrl} alt='' className='w-8 h-8' />
                </div>

                <div className='ml-6'>{props.compName}</div>
            </div>

            <div className='flex items-center'>
                <div className=''>Tabelle</div>

                <div className='mr-6 ml-12'>
                    <UpArrow arrowDirection={arrowUp} />
                </div>
            </div>
        </div>
    )
}


//Tabelle text-white text-m font-bold
//compName font-bold text-white text-xl
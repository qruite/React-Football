import React, { useState } from 'react'
import UpArrow from '../atoms/UpArrow'

export default function CompUpGameHeader({ imageUrl, compName, onClick }) {
    let arrowUp = <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />;
    let arrowDown = <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>;

    const [showArrowUp, setShowArrowUp] = useState(true);



    return (
        <div className='w-full bg-black flex justify-between rounded-2xl p-3 text-white text-xs font-semibold sm:text-base md:text-lg lg:text-xl mb-3' onClick={() => {
            setShowArrowUp(!showArrowUp)
            onClick();

        }}>
            <div className='flex items-center space-x-2'>
                <div>
                    <img src={imageUrl} alt='' className='w-8 sm:w-9 lg:w-11' />
                </div>

                <div className=''>{compName}</div>
            </div>

            <div className='flex items-center justify-end space-x-3'>
                <div className=''>Tabelle</div>
                <UpArrow arrowDirection={showArrowUp ? arrowUp : arrowDown} />
            </div>
        </div>
    )
}
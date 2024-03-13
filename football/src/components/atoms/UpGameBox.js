import React from 'react'

export default function UpGameBox() {
    return (
        <div className='text-white font-bold flex justify-between bg-purple-500 sm:text-xs md:text-lg lg:text-xl xl:text-2xl p-1.5'>
            <div className='ml-4'>
                <div className=''>22 September</div>
                <div className='font-semibold text-xs lg:text-lg'>19:00 CEST</div>
            </div>

            <div></div>

            <div>
                <div>FC Barcelona</div>
                <div>Real Madrid</div>
            </div>

            <div className='mr-4'>
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    )
}

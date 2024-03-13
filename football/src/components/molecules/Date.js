import React from 'react'
import LeftArrow from '../atoms/LeftArrow'
import RighArrow from '../atoms/RightArrow'

export default function Date() {
    return (
        <div className='flex text-white text-sm lg:text-3xl  font-bold items-center'>
            <LeftArrow className="" />
            <div className='self-center'>08/11/2024</div>
            <RighArrow />
        </div>
    )
}

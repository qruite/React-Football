import React from 'react'
import '../../App.css'

export default function SectionTitel({ titelName }) {
    return (
        <div className='text-white text-lg sm:text-2xl lg:text-3xl 2xl:text-5xl uppercase font-bold' id='sectionTitle'>
            {titelName}
        </div>
    )
}

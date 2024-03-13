import React from 'react'
import SectionTitel from '../atoms/SectionTitel'
import CompUpGameHeader from '../molecules/CompUpGameHeader'
import Date from '../molecules/Date'
import UpGamesGrid from '../molecules/UpGamesGrid'

export default function UpGamesSection() {
    return (
        <div >
            <SectionTitel titelName="Upcoming Games" />
            <div className='flex items-center justify-between'>
                <div className='text-white text-xl xl:text-5xl font-bold mb-7'>Spieltag</div>
                <Date />
            </div>
            <CompUpGameHeader imageUrl='https://placehold.co/45x45' compName='UEFA Champions League' />
            <UpGamesGrid />
        </div>
    )
}

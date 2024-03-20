import React, { useState } from 'react'
import SectionTitel from '../atoms/SectionTitel'
import CompUpGameHeader from '../molecules/CompUpGameHeader'
import Date from '../molecules/Date'
import UpGamesGrid from '../molecules/UpGamesGrid'

export default function UpGamesSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleTeams, setIsVisibleTeams] = useState(false);

    return (
        <div >
            <SectionTitel titelName="Upcoming Games" />
            <div className='flex items-center justify-between mb-3'>
                <div className='text-white text-xl xl:text-5xl lg:text-4xl font-bold'>Spieltag</div>
                <Date />
            </div>
            <CompUpGameHeader imageUrl='https://placehold.co/45x45' compName='UEFA Champions League' onClick={() => setIsVisible(!isVisible)} />
            {isVisible && <UpGamesGrid />}
            <CompUpGameHeader imageUrl='https://placehold.co/45x45' compName='UEFA Champions League' onClick={() => setIsVisibleTeams(!isVisibleTeams)} />
            {isVisibleTeams && <div>TEams</div>}
        </div>
    )
}

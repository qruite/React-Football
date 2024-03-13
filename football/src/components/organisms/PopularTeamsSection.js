import React from 'react'
import SectionTitel from '../atoms/SectionTitel'
import PopularTeams from '../molecules/PopularTeams'

export default function PopularTeamsSection() {
    return (
        <div>
            <SectionTitel titelName='PopularTeams' />
            <PopularTeams />
        </div>
    )
}

import React from 'react'
import CompetitionBox from '../atoms/CompetitionBox'

export default function CompetitionTable() {
    return (
        <div className='space-y-3'>
            <CompetitionBox compLogo="https://placehold.co/70x70" compName="UEFA Champions League" />
            <CompetitionBox compLogo="https://placehold.co/70x70" compName="La Liga" />
            <CompetitionBox compLogo="https://placehold.co/70x70" compName="Premier League" />
            <CompetitionBox compLogo="https://placehold.co/70x70" compName="Bundesliga" />
        </div>
    )
}

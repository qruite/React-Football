import React from 'react'
import TeamBox from '../atoms/TeamBox'

export default function PopularTeams() {
    const placeholder = "https://placehold.co/70x75"
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <TeamBox imageUrl={placeholder} clubName='FC Barcelona' />
            <TeamBox imageUrl={placeholder} clubName='Real Madrid' />
            <TeamBox imageUrl={placeholder} clubName='Manchester City' />
            <TeamBox imageUrl={placeholder} clubName='Bayern Munich' />
        </div>
    )
}

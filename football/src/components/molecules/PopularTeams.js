import React from 'react'
import TeamBox from '../atoms/TeamBox'
import barcelonaLogo from '../images/popularTeams/barcelona.png'
import realMadridLogo from '../images/popularTeams/realMadrid.png'
import manCityLogo from '../images/popularTeams/manCity.png'
import bayernLogo from '../images/popularTeams/bayern.png'


export default function PopularTeams() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <TeamBox imageUrl={barcelonaLogo} clubName='FC Barcelona' />
            <TeamBox imageUrl={realMadridLogo} clubName='Real Madrid' />
            <TeamBox imageUrl={manCityLogo} clubName='Manchester City' />
            <TeamBox imageUrl={bayernLogo} clubName='Bayern Munich' />
        </div>
    )
}

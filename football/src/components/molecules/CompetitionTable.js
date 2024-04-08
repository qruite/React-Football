import React from 'react'
import CompetitionBox from '../atoms/CompetitionBox'
import clLogo from '../images/competitionLg/cl.png'
import bundesligaLogo from '../images/competitionLg/bundesliga.png'
import plLogo from '../images/competitionLg/premier-league.png'
import laLigaLogo from '../images/competitionLg/laliga.png'

export default function CompetitionTable() {
    return (
        <div className='space-y-3'>
            <CompetitionBox compLogo={clLogo} compName="UEFA Champions League" />
            <CompetitionBox compLogo={laLigaLogo} compName="La Liga" />
            <CompetitionBox compLogo={plLogo} compName="Premier League" />
            <CompetitionBox compLogo={bundesligaLogo} compName="Bundesliga" />
        </div>
    )
}

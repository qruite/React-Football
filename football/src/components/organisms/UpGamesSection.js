import React, { useState } from 'react'
import SectionTitel from '../atoms/SectionTitel'
import CompUpGameHeader from '../molecules/CompUpGameHeader'
import CurrentDate from '../molecules/CurrentDate'
import UpGamesGrid from '../molecules/UpGamesGrid'

import clLogo from '../images/competitionLg/cl.png'
import bundesligaLogo from '../images/competitionLg/bundesliga.png'
import plLogo from '../images/competitionLg/premier-league.png'
import laLigaLogo from '../images/competitionLg/laliga.png'


export default function UpGamesSection() {
    const [championsLeaugeIsVisible, setChampionsLeaugeIsVisible] = useState(false);
    const [laLigaIsVisible, setLaLigaIsVisible] = useState(false);
    const [premierLeagueIsVisible, setPremierLeagueIsVisible] = useState(false);
    const [bundesligaIsVisible, setBundesligaIsVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState(null);

    function getData(date) {
        setCurrentDate(date);
    }

    return (
        <div >
            <SectionTitel titelName="Upcoming Games" />

            <div className='flex items-center justify-between mb-3'>
                <div className='text-white text-xl xl:text-5xl lg:text-4xl font-bold'>Spieltag</div>
                <CurrentDate onDataUpdate={(date) => getData(date)} />
            </div>

            <div className='space-y-3'>
                <div>
                    <CompUpGameHeader imageUrl={clLogo} compName='UEFA Champions League' onClick={() => setChampionsLeaugeIsVisible(!championsLeaugeIsVisible)} />
                    {championsLeaugeIsVisible && <UpGamesGrid apiUrl="https://api.openligadb.de/getmatchdata/champion1" chosenDate={currentDate} />}
                </div>

                <div>
                    <CompUpGameHeader imageUrl={laLigaLogo} compName='La Liga' onClick={() => setLaLigaIsVisible(!laLigaIsVisible)} />
                    {laLigaIsVisible && <UpGamesGrid apiUrl="https://api.openligadb.de/getmatchdata/la/2023" chosenDate={currentDate} />}
                </div>

                <div>
                    <CompUpGameHeader imageUrl={plLogo} compName='Premier League' onClick={() => setPremierLeagueIsVisible(!premierLeagueIsVisible)} />
                    {premierLeagueIsVisible && <UpGamesGrid apiUrl="https://api.openligadb.de/getmatchdata/ukpl/2023" chosenDate={currentDate} />}
                </div>

                <div>
                    <CompUpGameHeader imageUrl={bundesligaLogo} compName='Bundesliga' onClick={() => setBundesligaIsVisible(!bundesligaIsVisible)} />
                    {bundesligaIsVisible && <UpGamesGrid apiUrl="https://api.openligadb.de/getmatchdata/bl1/2023" chosenDate={currentDate} />}
                </div>
            </div>
        </div>
    )
}

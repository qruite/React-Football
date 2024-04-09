import React, { useEffect, useState } from 'react'
import RankingTableHeader from '../atoms/RankingTableHeader'
import RankingTableBody from '../atoms/RankingTableBody'

export default function RankingTable() {
    const [topScorrer, setTopScorrer] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getgoalgetters/bl1/2023")
            .then((res) => res.json())
            .then((data) => {
                setTopScorrer(data);
            })
    });

    return (
        <div>
            <RankingTableHeader />
            {topScorrer.slice(0, 11).map((scorrer, index) => (
                <RankingTableBody position={index} name={scorrer.goalGetterName} scored={scorrer.goalCount} />
            ))}
        </div>
    )
}

import React from 'react'
import RankingTable from '../molecules/RankingTable'
import SectionTitel from '../atoms/SectionTitel'

export default function RankingSection() {
    return (
        <div>
            <SectionTitel titelName="TOP SCORER" />
            <RankingTable />
        </div>
    )
}

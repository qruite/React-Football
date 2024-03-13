import React from 'react'
import SectionTitel from '../atoms/SectionTitel'
import CompetitionTable from '../molecules/CompetitionTable'

export default function CompetitionSection() {
    return (
        <div>
            <SectionTitel titelName="competitions" />
            <CompetitionTable />
        </div>
    )
}

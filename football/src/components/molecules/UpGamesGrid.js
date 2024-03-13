import React from 'react'
import UpGameBox from '../atoms/UpGameBox'

export default function UpGamesGrid() {
    return (
        <div className='grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3'>
            <UpGameBox />
            <UpGameBox />
            <UpGameBox />
            <UpGameBox />
        </div>
    )
}
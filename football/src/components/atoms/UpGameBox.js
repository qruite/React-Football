import React from 'react'

export default function UpGameBox({ matchDate, matchTime, team1, team2, scoreTeam1, scoreTeam2 }) {


    return (
        <div className='text-white font-bold grid grid-cols-12 items-center bg-purple-500 sm:text-xs md:text-sm lg:text-base xl:text-xl p-1.5'>
            <div className='ml-4 col-span-4 '>
                <div className='text-sm'>{matchDate}</div>
                <div className='font-semibold text-xs lg:text-sm'>{matchTime}</div>
            </div>

            <div className='col-span-7'>
                <div>{team1}</div>
                <div>{team2}</div>
            </div>

            <div className='mr-4'>
                <div>{scoreTeam1}</div>
                <div>{scoreTeam2}</div>
            </div>
        </div>
    )
}

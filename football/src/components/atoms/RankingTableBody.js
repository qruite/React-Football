import React from 'react'

export default function RankingTableBody({ position, name, scored }) {
    return (
        <div className='text-white font-bold text-3xl grid grid-cols-5 content-center pt-5 pb-5 bg-purple-500/70 '>
            <div className='grid grid-cols-5 space-x-8'>
                <div className='ml-8'>{position}</div>
                <div className='col-span-4'>{name}</div>
            </div>
            <div className='grid grid-cols-6 col-span-2'>
                <div className='text-center'>11</div>
                <div className='col-span-2 pl-8'>ENG</div>
                <div className='col-span-3'>
                    <div>Team Name</div>
                    <div className='text-2xl'>Bundesliga</div>
                </div>
            </div>
            <div className='grid grid-cols-4 text-center col-span-2 '>
                <div className=''>pl</div>
                <div>{scored}</div>
                <div>11</div>
                <div>12</div>
            </div>
        </div>
    )
}

import React from 'react'

export default function RankingTableHeader() {
    return (
        <div className='text-white font-normal text-2xl grid grid-cols-5 content-center bg-black pt-6 pb-6 rounded-2xl '>
            <div className='grid grid-cols-5 space-x-8'>
                <div className='ml-8'>#</div>
                <div className='col-span-4'>Spieler</div>
            </div>
            <div className='grid grid-cols-6 col-span-2'>
                <div className='text-center'>Alter</div>
                <div className='col-span-2 pl-8'>Nat</div>
                <div className='col-span-3'>Verein / Liga</div>
            </div>
            <div className='grid grid-cols-4 text-center col-span-2'>
                <div className=''>Spiele</div>
                <div>Tore</div>
                <div>Assists</div>
                <div>Punkte</div>
            </div>
        </div>
    )
}
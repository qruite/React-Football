import React from 'react'

export default function RankingTableHeader() {
    return (
        <div className='text-white font-light text-3xl grid grid-cols-5 content-center h-14 bg-black/50 gap-5'>
            <div className='flex space-x-8'>
                <div className='ml-8'>#</div>
                <div>Spieler</div>
            </div>
            <div className='flex col-span-2 space-x-20'>
                <div>Alter</div>
                <div>Nat</div>
                <div>Verein / Liga</div>
            </div>
            <div className='grid grid-cols-4 text-center col-span-2 '>
                <div className=''>Spiele</div>
                <div>Tore</div>
                <div>Assists</div>
                <div>Punkte</div>
            </div>
        </div>
    )
}
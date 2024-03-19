import React from 'react'

export default function RankingTableBody() {
    return (
        <div className='text-white font-bold text-3xl grid grid-cols-5 content-center pt-5 pb-5 bg-purple-500/70 '>
            <div className='grid grid-cols-5 space-x-8'>
                <div className='ml-8'>1</div>
                <div className='col-span-4'>Harry Kane</div>
            </div>
            <div className='grid grid-cols-6 col-span-2'>
                <div className='text-center'>33</div>
                <div className='col-span-2 pl-8'>England</div>
                <div className='col-span-3'>
                    <div>Bayern München</div>
                    <div className='text-2xl'>Bundesliga</div>
                </div>
            </div>
            <div className='grid grid-cols-4 text-center col-span-2 '>
                <div className=''>2</div>
                <div>22</div>
                <div>22</div>
                <div>34</div>
            </div>
        </div>
    )
}

import React from 'react'

export default function RankingTableBody() {
    return (
        <div className='text-white font-light text-3xl grid grid-cols-5 content-center h-14 bg-black/50 gap-5'>
            <div className='flex space-x-8'>
                <div className='ml-8'>1</div>
                <div>Harry Kane</div>
            </div>
            <div className='flex col-span-2 space-x-20'>
                <div>33</div>
                <div>England</div>
                <div>
                    <div>Bayern München</div>
                    <div>Bundesliga</div>
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

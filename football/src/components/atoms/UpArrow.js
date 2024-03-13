import React from 'react'

export default function UpArrow(props) {
    return (
        <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="" class="w-18 h-10" className='w-6'>
                {props.arrowDirection}
            </svg>
        </div>
    )
}

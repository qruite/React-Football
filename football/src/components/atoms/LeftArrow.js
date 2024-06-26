import React from 'react'

export default function LeftArrow({ onClick }) {
    return (
        <div onClick={() => {
            onClick();
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className='w-6 lg:w-10'>
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
        </div>
    )
}

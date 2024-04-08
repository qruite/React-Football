import React, { useEffect, useState } from 'react'
import LeftArrow from '../atoms/LeftArrow'
import RighArrow from '../atoms/RightArrow'
import { format, addDays, subDays } from 'date-fns'

export default function CurrentDate({ onDataUpdate }) {
    const currentDate = new Date();
    const [chosenDate, setChosenDate] = useState(currentDate);

    useEffect(() => {
        onDataUpdate(format(chosenDate, 'dd.MM.yyyy'));
    }, [chosenDate, onDataUpdate]);

    const handleDateChange = (action) => {
        if (action === 'left') {
            const newDate = subDays(chosenDate, 1);
            setChosenDate(newDate);
        } else if (action === 'right') {
            const newDate = addDays(chosenDate, 1);
            setChosenDate(newDate);
        }
    };

    return (
        <div className='flex text-white text-sm lg:text-2xl font-bold items-center'>
            <LeftArrow onClick={() => handleDateChange('left')} />
            <div className='self-center'>{format(chosenDate, 'dd.MM.yyyy')}</div>
            <RighArrow onClick={() => handleDateChange('right')} />
        </div>
    )
}
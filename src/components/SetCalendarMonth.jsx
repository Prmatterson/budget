import React, { useState } from 'react'
import Calendar from "./Calendar"


export default function SetCalendarMonth({months, thisMonthNumber, thisMonthName}) {
    const {calendarMonth, setCalendarMonth} = useState()
    
    return (
       <button value={thisMonthName}>
           {months[thisMonthNumber]}
       </button>
    )
}
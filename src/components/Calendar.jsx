import React from 'react'
import "tailwindcss/tailwind.css"

export default function Calendar() {

  return (
    <div>


      <div className='grid grid-cols-7'>
        <div class="cell col-span-7" id='month'>November</div>
        <div id='date-header-sunday'>Sun</div>
        <div id='date-header-monday'>Mon</div>
        <div id='date-header-tuesday'>Tue</div>
        <div id='date-header-wednesday'>Wed</div>
        <div id='date-header-thursday'>Thu</div>
        <div id='date-header-friday'>Fri</div>
        <div id='date-header-saturday'>Sat</div>
      </div>
      
    </div>
  )
}
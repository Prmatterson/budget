import React from 'react'
import "tailwindcss/tailwind.css"

export default function Calendar() {

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const todaysDate = new Date();
const thisYear = todaysDate.getFullYear();
const month = months[todaysDate.getMonth()];
const selectFirstDay = todaysDate.setDate(1);
const firstDay = todaysDate.getDate();


  const day = [];
  for (let x = 1; x < 31; x++) { // x < total days in current month
    day.push(x);
  };

  return (
    <div>

      <div className='grid grid-cols-7'>
        <div class='cell col-span-7' id='year'> { thisYear } </div>
        <div class="cell col-span-7" id='month'> {month} </div>
        <div id='date-header-sunday'>Sun</div>
        <div id='date-header-monday'>Mon</div>
        <div id='date-header-tuesday'>Tue</div>
        <div id='date-header-wednesday'>Wed</div>
        <div id='date-header-thursday'>Thu</div>
        <div id='date-header-friday'>Fri</div>
        <div id='date-header-saturday'>Sat</div>
        {day.map((number) => {
          if (number === 1) { // Make this the first day of whatever month this is
            return <div className="cell col-start-2">{number}</div>;
          }
          return <div className="cell">{number}</div>;
        })}
      </div>
    </div>

  )
}
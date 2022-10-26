import React from 'react'
import "tailwindcss/tailwind.css"

// Creating references to the year and month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const todaysDate = new Date();
const thisYear = todaysDate.getFullYear();
const thisMonth = months[todaysDate.getMonth()];

// Preparation to assign which column the first day goes into (following two lines select the 1st day of the relevant month)
const selectFirstDay = todaysDate.setDate(1);
const firstDay = todaysDate.getDate();

// Function to automatically determine number of days in current month
function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

// Function to lay out number of days in each month so they can be added to the calendar
const day = [];
for (let x = 1; x < {daysInMonth(thisYear, month)}; x++) {
  day.push(x);
}

if (month === (months[0] || months[2] || months[4] || months[6] || months[7] || months[9] || months[11])) {
  for (let x = 1; x < 31; x++) {
    day.push(x);
  }
} else if (month === (months[3] || month[5] || months[8] || months[10])) {
  for (let x = 1; x < 30; x++) {
    day.push(x);
  }
} else if (month === months[2]) {
  daysInMonth(thisYear, 2, 0)
}

// Main calendar component
export default function Calendar() {

  return (
    <div>

      <div className='grid grid-cols-7'>
        <div class='cell col-span-7' id='year'> {thisYear} </div>
        <div class="cell col-span-7" id='month'> {month} </div>
        <div id='date-header-sunday'>Sun</div>
        <div id='date-header-monday'>Mon</div>
        <div id='date-header-tuesday'>Tue</div>
        <div id='date-header-wednesday'>Wed</div>
        <div id='date-header-thursday'>Thu</div>
        <div id='date-header-friday'>Fri</div>
        <div id='date-header-saturday'>Sat</div>
       
        {/* {day.map((number) => {
          if (number === 1) { // Make this the first day of whatever month this is
            return <div className="cell col-start-2">{number}</div>;
          }
          return <div className="cell">{number}</div>;
        })} */}
      </div>
    </div>

  )
}

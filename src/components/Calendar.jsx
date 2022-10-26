import React from 'react'
import "tailwindcss/tailwind.css"

// Creating references to the year and month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const todaysDate = new Date();
const thisYear = todaysDate.getFullYear();
const thisMonth = months[todaysDate.getMonth()];

// Preparation to assign which column the first day goes into (following two lines select the 1st day of the relevant month (e.g. "6" = Sat))
const selectFirstDay = todaysDate.setDate(1);
const firstDay = todaysDate.getDay(); // the first column will be this index number (e.g. Saturday (or "6") will be mapped to [6] (the 7th column))

// Function to automatically determine number of days in current month
function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

// Creating array of days in the month
const day = [];
for (let x = 1; x < daysInMonth(thisYear, thisMonth); x++) {
  day.push(x);
}

// Main calendar component
export default function Calendar() {

  return (
    <div>

      <div className='grid grid-cols-7'>
        <div class='cell col-span-7' id='year'> {thisYear} </div>
        <div class="cell col-span-7" id='month'> {thisMonth} </div>
        <div id='date-header-sunday'>Sun</div>
        <div id='date-header-monday'>Mon</div>
        <div id='date-header-tuesday'>Tue</div>
        <div id='date-header-wednesday'>Wed</div>
        <div id='date-header-thursday'>Thu</div>
        <div id='date-header-friday'>Fri</div>
        <div id='date-header-saturday'>Sat</div>
        {/* {day.map(firstDay)} */}
      </div>
    </div>
  )
}

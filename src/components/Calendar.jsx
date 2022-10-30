import React from 'react'
import "tailwindcss/tailwind.css"

// Creating references to the year and month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const todaysDate = new Date();
console.log(todaysDate)
const thisYear = todaysDate.getFullYear();
console.log(thisYear)
const thisMonthNumber = todaysDate.getMonth() + 1;
console.log(thisMonthNumber)
const thisMonthName = months[todaysDate.getMonth()]
console.log(thisMonthName)

// Preparation to assign which column the first day goes into (following two lines select the 1st day of the relevant month (e.g. "6" = Sat))
const selectFirstDay = todaysDate.setDate(1);
const firstDay = todaysDate.getDay(); // the first column will be this index number (e.g. Saturday (or "6") will be mapped to the 7th column)
console.log(firstDay);

// Function to automatically determine number of days in current month
function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}
console.log(daysInMonth(thisYear, thisMonthNumber))

// Creating array of days in the month
const day = [];
for (let x = 1; x < daysInMonth(thisYear, thisMonthNumber) + 1; x++) {
  day.push(x);
}
console.log(day)


// Main calendar component
export default function Calendar() {

  return (
    <div>

      <div className='grid grid-cols-7 grid-rows-5 flex-grow w-full h-auto pt-px mt-1 shadow-xl text-middle'>
        <div className='cell col-span-7 bg-slate-300' id='year'> {thisYear} </div>
        <div className="cell col-span-7 bg-slate-200" id='month'> {thisMonthName} </div>
        <div id="date-header-sunday" className="bg-slate-100">Sun</div>
        <div id='date-header-monday' className="bg-slate-100">Mon</div>
        <div id='date-header-tuesday' className="bg-slate-100">Tue</div>
        <div id='date-header-wednesday' className="bg-slate-100">Wed</div>
        <div id='date-header-thursday' className="bg-slate-100">Thu</div>
        <div id='date-header-friday' className="bg-slate-100">Fri</div>
        <div id='date-header-saturday' className="bg-slate-100">Sat</div>
        {day.map((number) => { // if statements determine on what named weekday the month starts
          if (number === 1) {
            if (firstDay === 0) {
              return <div className="cell col-start-1 relative flex flex-col bg-white group">{number}</div>
            } else if (firstDay === 1) {
              return <div className="cell col-start-2 relative flex flex-col bg-white group">{number}</div>
            } else if (firstDay === 2) {
              return <div className="cell col-start-3 relative flex flex-col bg-white group">{number}</div>
            } else if (firstDay === 3) {
              return <div className="cell col-start-4 relative flex flex-col bg-white group">{number}</div>
            } else if (firstDay === 4) {
              return <div className="cell col-start-5 relative flex flex-col bg-white group">{number}</div>
            } else if (firstDay === 5) {
              return <div className="cell col-start-6 relative flex flex-col bg-white group">{number}</div>
            } else {
              return <div className="cell col-start-7 ">{number}</div>
            }
          }
          return <div className="cell relative flex flex-col bg-white group mb-10">{number}</div>; // adds the rest of the days
        })}
      </div>
    </div>
  )
}


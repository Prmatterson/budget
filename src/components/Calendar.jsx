import React from 'react'
import CalendarDay from './CalendarDay'
import PrevMonth from './PrevMonth'

// Creating references to the year and month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const todaysDate = new Date();
const thisYear = todaysDate.getFullYear();
const thisMonthNumber = todaysDate.getMonth() + 1;
const thisMonthName = months[todaysDate.getMonth()]

// Preparation to assign which column the first day goes into (following two lines select the 1st day of the relevant month (e.g. "6" = Sat))
const selectFirstDay = todaysDate.setDate(1);
const firstDay = todaysDate.getDay(); // the first column will be this index number (e.g. Saturday (or "6") will be mapped to the 7th column)\

// Function to automatically determine number of days in current month
function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

// Creating array of days in the month
const day = [];
for (let x = 1; x <= daysInMonth(thisYear, thisMonthNumber); x++) {
  day.push(x);
}

const daysOfWeek = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
]

// Main calendar component
export default function Calendar({ calendarData }) {
console.log({calendarData})
  return (
    <div>
      <div className='grid grid-cols-7 grid-rows-5 flex-grow w-full h-auto pt-px mt-1 shadow-xl text-middle rounded-b-xl'>
        <div className="col-span-2 bg-slate-300 rounded-tl-xl text-sm pt-5"></div>
        <div className='cell col-span-3 bg-slate-300 text-xl pt-4' id='year'> {thisYear} </div>
        <button className="col-span-2 bg-slate-300 rounded-tr-xl text-sm"></button>
        <button className="col-span-2 bg-slate-200 text-sm"><PrevMonth /></button>
        <div className="cell col-span-3 bg-slate-200 text-lg pt-4" id='month'> {thisMonthName} </div>
        <button className="col-span-2 bg-slate-200 text-sm"></button>
        <div id="date-header-sunday" className="bg-slate-100 pt-5">Sun</div>
        <div id='date-header-monday' className="bg-slate-100 pt-5">Mon</div>
        <div id='date-header-tuesday' className="bg-slate-100 pt-5">Tue</div>
        <div id='date-header-wednesday' className="bg-slate-100 pt-5">Wed</div>
        <div id='date-header-thursday' className="bg-slate-100 pt-5" pt-5>Thu</div>
        <div id='date-header-friday' className="bg-slate-100 pt-5">Fri</div>
        <div id='date-header-saturday' className="bg-slate-100 pt-5">Sat</div>
        {day.map((number) => {
          if (number === 1) {
            return (
              <div key={number} className={`cell ${daysOfWeek[firstDay]} relative flex flex-col bg-white group hover:bg-slate-100`}>
                {number}
                <br/>
                <CalendarDay day={new Date(thisYear, thisMonthNumber - 1, number)} calendarData={ calendarData }/>
              </div>  
            );
          }
          return (
            <div key={number} className="cell relative flex flex-col bg-white group pb-10 hover:bg-slate-100">
              {number}
              <br/>
              <CalendarDay day={new Date(thisYear, thisMonthNumber - 1, number)} calendarData={ calendarData } />
            </div>
          );
        })}
      </div>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import CalendarDay from "./CalendarDay";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];


// Main calendar component
export default function Calendar({ calendarData, watch }) {
  // Creating references to the year and month

  const watchStartDate = watch("startDateCF")
  const watchEndDate = watch("endDateCF")
  useEffect(() => {
    console.log(watchStartDate, watchEndDate)
  }
  )

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const nextMonth = () => {
    setCurrentMonth((((currentMonth + 1) % 12) + 12) % 12);
  };
  const previousMonth = () => {
    setCurrentMonth((((currentMonth - 1) % 12) + 12) % 12);
  };
  // useEffect(() => {
  //   console.log(currentMonth);
  // }, [currentMonth]);

  const thisYear = 2022;
  const thisMonthName = months[currentMonth];

  // Preparation to assign which column the first day goes into (following two lines select the 1st day of the relevant month (e.g. "6" = Sat))
  const selectFirstDay = new Date(thisYear, currentMonth, 1);
  const firstDay = selectFirstDay.getDay(); // the first column will be this index number (e.g. Saturday (or "6") will be mapped to the 7th column)\

  // Function to automatically determine number of days in current month
  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  // Creating array of days in the month
  const day = [];
  for (let x = 1; x <= daysInMonth(thisYear, currentMonth + 1); x++) {
    day.push(x);
  }

  return (
    <div>
      <div className="grid grid-cols-7 grid-rows-5 flex-grow w-full h-auto pt-px mt-1 shadow-xl text-middle rounded-b-xl">
        <button className="col-span-2 bg-slate-300 rounded-tl-xl text-sm pt-5"></button>
        <button className="cell col-span-3 bg-slate-300 text-xl pt-4" id="year">
          {" "}
          {thisYear}{" "}
        </button>
        <button className="col-span-2 bg-slate-300 rounded-tr-xl text-sm"></button>
        <button
          className="col-span-2 bg-slate-200 text-sm"
          onClick={previousMonth}
        >
          Previous
        </button>
        <button
          className="cell col-span-3 bg-slate-200 text-lg pt-4"
          id="month"
        >
          {" "}
          {thisMonthName}{" "}
        </button>
        <button className="col-span-2 bg-slate-200 text-sm" onClick={nextMonth}>
          Next
        </button>
        <div id="date-header-sunday" className="bg-slate-100 pt-5">
          Sun
        </div>
        <div id="date-header-monday" className="bg-slate-100 pt-5">
          Mon
        </div>
        <div id="date-header-tuesday" className="bg-slate-100 pt-5">
          Tue
        </div>
        <div id="date-header-wednesday" className="bg-slate-100 pt-5">
          Wed
        </div>
        <div id="date-header-thursday" className="bg-slate-100 pt-5" pt-5>
          Thu
        </div>
        <div id="date-header-friday" className="bg-slate-100 pt-5">
          Fri
        </div>
        <div id="date-header-saturday" className="bg-slate-100 pt-5">
          Sat
        </div>
        {day.map((number) => {
          if (number === 1) {
            return (
              <div
                key={number}
                className={`cell ${daysOfWeek[firstDay]} relative flex flex-col bg-white group hover:bg-slate-100`}
              >
                {number}
                <br />
                <CalendarDay
                  day={new Date(thisYear, currentMonth, number)}
                  calendarData={calendarData}
                />
              </div>
            );
          }
          return (
            <div
              key={number}
              className="cell relative flex flex-col bg-white group pb-10 hover:bg-slate-100"
            >
              {number}
              <br />
              <CalendarDay
                day={new Date(thisYear, currentMonth, number)}
                calendarData={calendarData}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

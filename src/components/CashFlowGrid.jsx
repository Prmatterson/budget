import React, { useState } from "react";

export default function CashFlowGrid({ cashFlowData }) {

  // Boundaries of Date Range of Grid (eventually have follow the month view changes made in Calendar)

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

  const columnChooser = [
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const thisYear = 2022;
  const currentMonth = new Date().getMonth();
  const thisMonthName = months[currentMonth];

  // Preparation to assign which column the first day goes into (following two lines select the 1st day of the relevant month (e.g. "6" = Sat))
  const selectFirstDay = new Date(thisYear, currentMonth, 1);
  const firstDay = selectFirstDay.getDay(); // the first column will be this index number (e.g. Saturday (or "6") will be mapped to the 7th column)\

  // Function to automatically determine number of days in current month
  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  const dateSpan = []

  // Replace below for loop with one that only pushes values onto dates that have data in the Calendar
  for (let x = 1; x <= daysInMonth(thisYear, currentMonth + 1); x++) {
    dateSpan.push(x);
  }
  
  
// Content of Grid

  const grid = [
    { accountName1: "acc 1", cost1: "100"},
    { accountName2: "acc 2", cost2: "50"},
    { accountName3: "acc 3", cost3: "10"},
  ]

  console.log(grid)
  
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1" id="cashflow-heading">
        Date
      </div>
      <div className="col-span-1" id="cashflow-heading">
        Acct 1
      </div>
      <div className="col-span-1" id="cashflow-heading">
        Acct 2
      </div>
      <div className="col-span-1" id="cashflow-heading">
        Acct 3
      </div>
      <div className="col-span-1" id="cashflow-heading">
        Total
      </div>
      {dateSpan.map(() => {
        return (
          <div>
            <div>Test</div>
          </div>
        )})}
      {/* Enter cashFlowData here for start and end dates, calendar Data for content */}
    </div>
  );
}

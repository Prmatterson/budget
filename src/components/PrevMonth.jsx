import React from "react";

export default function PrevMonth(test, months, todaysDate, thisYear, thisMonthNumber, thisMonthName, selectFirstDay, firstDay) {

  return (
    <button
      onClick={() => {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 1);
        const previousMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        );
        const thisMonthNumber = previousMonth;
        console.log(previousMonth.getMonth());
        console.log(test)
        // Alternative, find function to change thisMonthNumber to "thisMonthNumber - 1"
      }}
    >
      Previous
    </button>
  );
}

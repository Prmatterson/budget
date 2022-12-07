import React from "react";

export default function PrevMonth({}) {

  return (
      
    <button onClick={() => {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth()-1);
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        thisMonthNumber = previousMonth
        console.log(previousMonth.getMonth())
       // Alternative, find function to change thisMonthNumber to "thisMonthNumber - 1"
      }}
    >
      Previous
    </button>
  );
}

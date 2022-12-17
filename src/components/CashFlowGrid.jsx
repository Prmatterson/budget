import React, { useState } from 'react'
import CashFlowForm from './CashFlowForm'

export default function CashFlowGrid({ calendarData, cashFlowData, cashFlowForm, startDateCF }) {
const grid = []
for (let x = 1; x <= 20; x++) {
  grid.push(x);
  console.log(grid)
}

return (
  <div className="grid grid-cols-4">
  <div className="col-span-1" id="cashflow-heading">Date</div>
  <div className="col-span-1" id="cashflow-heading">Account 1</div>
  <div className="col-span-1" id="cashflow-heading">Account 2</div>
  <div className="col-span-1" id="cashflow-heading">Total</div>
  {grid.map((startDateCF) => {
    return (
    <div key={startDateCF}>
      <div>
        {startDateCF} 
      </div>
    </div>)
        console.log(startDateCF)
  })}
    {/* Enter cashFlowData here for start and end dates, calendar Data for content */}

  </div>

)

}
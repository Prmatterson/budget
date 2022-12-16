import React, { useState } from 'react'

export default function CashFlowGrid({ calendarData, cashFlowData, startDateCF }) {
const grid = []

return (
  <div className="grid grid-cols-4">
  <div className="col-span-1" id="cashflow-heading">Date</div>
  <div className="col-span-1" id="cashflow-heading">Account 1</div>
  <div className="col-span-1" id="cashflow-heading">Account 2</div>
  <div className="col-span-1" id="cashflow-heading">Total</div>
  {grid.map(() => {
    <div key={startDateCF}>
      {startDateCF} </div>
  })}
    {/* Enter cashFlowData here for start and end dates, calendar Data for content */}
  </div>
)

}
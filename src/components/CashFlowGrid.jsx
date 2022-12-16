
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CashFlowGrid({ calendarData, cashFlowData }) {

return (
  <div>
  <div className="col-span-1" id="cashflow-heading">Date</div>
  <div className="col-span-1" id="cashflow-heading">Account 1</div>
  <div className="col-span-1" id="cashflow-heading">Account 2</div>
  <div className="col-span-1" id="cashflow-heading">Total</div>
  </div>
)

}
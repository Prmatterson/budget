import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

// Collect data from calendarData and sort by account as per below example
// const fakeDataArray = [
//     { accountName: "BMO", costs: [50, 100, 200] },
//     { accountName: "Scotia", costs: [50, 100, 200] }
// ]

    
export default function CashFlow({ calendarData, cashFlowData, setCashFlowData }) {
    // Why do you need to click submit twice to have data show up in console log for cashFlowData (line 16)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data); 
      setCashFlowData((prev) => [...prev, data]);
      console.log(cashFlowData)
    };

// create formula to populate receipt statement using data taken from calendarData
    // const events = [];

// for (const event of cashFlowData) {
//     const startDate = new Date(`${event.startDate} 00:00:00`);
//     const endDate = new Date(`${event.endDate} 00:00:00`);

//     if (day < startDate || day > endDate) continue;
// // insert formula here
// }

return (
    <div className="grid grid-cols-3 " id='container'>
        <div className="col-span-4 align-center" id="cashflow-title">Cash Flow</div>
        <form className="col-span-4" id='from-to' onSubmit={handleSubmit(onSubmit)}>
            <label className="col-span- text-sm font-medium text-slate-700">Start Date</label>
            <input type="date" className="col-span-1 mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" {...register("startDateCF")} />
            <label className="col-span-1 text-sm font-medium text-slate-700">End Date</label>
            <input type="date" className="col-span-1 mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" {...register("endDateCF")} />
            <button type="submit" className="col-span 1mt-1 w-1/4 px-3 py-2 bg-white border border-4 border-slate-300 rounded-xl text-sm font-bold shadow-xl text-center hover:bg-slate-300">Submit</button>
        </form>
        {/* Have the account names populate from data automatically */}
        <div className="col-span-1" id="cashflow-heading">Date</div>
        <div className="col-span-1" id="cashflow-heading">Account 1</div>
        <div className="col-span-1" id="cashflow-heading">Account 2</div>
        <div className="col-span-1" id="cashflow-heading">Total</div>
        {/* Here will be an if statement like examples after line 19 in CalendarDay */}
    </div>
)

}
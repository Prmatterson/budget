import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const fakeDataArray = [
    { accountName: "BMO", costs: [50, 100, 200] },
    { accountName: "Scotia", costs: [50, 100, 200] }
]
    
export default function CashFlow() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data);
      setFakeData((prev) => [...prev, data]);
    };

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
        <div className="col-span-1" id="cashflow-heading">Date</div>
        <div className="col-span-1" id="cashflow-heading">BMO</div>
        <div className="col-span-1" id="cashflow-heading">Scotia</div>
        <div className="col-span-1" id="cashflow-heading">Total</div>
        {/* Here will be an if statement like examples after line 19 in CalendarDay */}
    </div>
)

}
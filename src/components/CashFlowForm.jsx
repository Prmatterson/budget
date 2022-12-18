import React, { useState } from 'react'
    
export default function CashFlowForm({ setCashFlowData, register, watch }) {
   
return (
    <div className="grid grid-cols-3 " id='container'>
        <div className="col-span-4 align-center" id="cashflow-title">Cash Flow Statement</div>
        <form className="col-span-4" id='from-to'>
            <label className="col-span- text-sm font-medium text-slate-700">Start Date</label>
            <input type="date" className="col-span-1 mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" {...register("startDateCF")} />
            <label className="col-span-1 text-sm font-medium text-slate-700">End Date</label>
            <input type="date" className="col-span-1 mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" {...register("endDateCF")} />
        </form>
    </div>
)
}
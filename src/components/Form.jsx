import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function Form({ setCalendarData }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    setCalendarData((prev) => [...prev, data]);
  };


  // Arrays of objects containing data for form fields
  let accounts = [
    { label: "Bank of Montreal Chequing", value: "Bank of Montreal Chequing" },
    { label: "Scotiabank Savings", value: "Scotiabank Savings" },
    { label: "Add New...", value: "Add New..." }
  ]

  let billers = [
    { label: "Mastercard", value: "Mastercard" },
    { label: "Visa", value: "Visa" },
    { label: "Mortgage", value: "Mortgage" },
    { label: "Paycheque", value: "Paycheque" },
    { label: "Add New...", value: "Add New..." }
  ]

  let frequencies = [
    { label: "Once", value: "Once" },
    { label: "Weekly", value: "Weekly" },
    { label: "Biweekly", value: "Biweekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Yearly", value: "Yearly" },
  ]

  // Main Form Component
  return (
    <div id="form" className="mx-10">
      <form className="col-span-2" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm font-medium text-slate-700">Amount Being Debited/Credited</label>
        <input type="text" {...register("amount")} className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" />
        <br />
        <br />

        <input type="radio" {...register("plusMinus")} value="plus" id="plus" />
        <label htmlFor="plus" className="text-sm font-medium text-slate-700 mr-10 ml-1">Income (Credit)</label>
        <input type="radio" {...register("plusMinus")} value="minus" id="minus" />
        <label htmlFor="minus" className="text-sm font-medium text-slate-700 mr-4 ml-1">Expense (Debit)</label>
        <br />
        <br />

        <label className="block text-sm font-medium text-slate-700">Bank Account Being Credited/Debited</label>
        <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" {...register("account")}>
          <option value=""></option>
          {accounts.map((account) => <option key={account.label} value={account.value}>{account.label}</option>)}
        </select>
        <br />
        <br />

        <label className="block text-sm font-medium text-slate-700">Payee or Payer</label>
        <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" {...register("biller")}>
          <option value=""></option>
          {billers.map((biller) => <option key={biller.label} value={biller.value}>{biller.label}</option>)}
        </select>
        <br />
        <br />

        <label className="w-1/2 text-sm font-medium text-slate-700">Frequency of Transaction</label>
        <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" {...register("frequency")}>
          <option value=""></option>
          {frequencies.map((frequency) => <option key={frequency.label} value={frequency.value}>{frequency.label}</option>)}
        </select>
        <br />
        <br />

        <label className="text-sm font-medium text-slate-700">Start Date</label>
        <input type="date" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" {...register("startDate")} />
        <br />
        <br />

        <label className="text-sm font-medium text-slate-700">End Date</label>
        <input type="date" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" {...register("endDate")} />
        <br />
        <br />

        <button type="submit" className="mt-1 w-1/4 px-3 py-2 bg-white border border-4 border-slate-300 rounded-xl text-sm font-bold shadow-xl text-center hover:bg-slate-300">Submit</button>

      </form>

    </div>
  )
}


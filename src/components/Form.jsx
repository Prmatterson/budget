import React, { useState } from 'react'

export default function Form() {

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
    { label: "Quarterly", value: "Quarterly" },
    { label: "Biannually", value: "Biannually" },
    { label: "Yearly", value: "Yearly" },
  ]

  // Using state to keep track of what the selected variable is
  let [amount, setAmount] = useState(" Select Amount")
  let [plusMinus, setPlusMinus] = useState("Set Plus Minus")
  let [account, setAccount] = useState("Select Account")
  let [biller, setBiller] = useState("Select Biller")
  let [frequency, setFrequency] = useState("Select Frequency")
  let [startDate, setStartDate] = useState("Select Start Date")
  let [endDate, setEndDate] = useState("Select End Date")

  // Using this function to update the state of variable
  // whenever a new option is selected from the dropdown
  let handleAmountChange = (e) => {
    setAmount(e.target.value)
  }
  let handlePlusMinusChange = (e) => {
    setPlusMinus(e.target.value)
  }
  let handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  let handleBillerChange = (e) => {
    setBiller(e.target.value)
  }
  let handleFrequencyChange = (e) => {
    setFrequency(e.target.value)
  }
  let handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }
  let handleEndDateChange = (e) => {
    setEndDate(e.target.value)
  }

  // Preventing Default Reloading Behaviour
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Main Form Component
  return (
    <div id="form" className="mx-10">
      <form className="col-span-2" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-slate-700">Amount Being Debited/Credited</label>
        <input type="text" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" required onChange={handleAmountChange} />
        <br />
        <br />

        <input type="radio" value="plus" id="plus" onChange={handlePlusMinusChange} name="plusMinus" required />
        <label for="plus" className="text-sm font-medium text-slate-700 mr-10 ml-1">Income (Credit)</label>
        <input type="radio" value="minus" id="minus" onChange={handlePlusMinusChange} name="plusMinus" required />
        <label for="minus" className="text-sm font-medium text-slate-700 mr-4 ml-1">Expense (Debit)</label>
        <br />
        <br />

        <label className="block text-sm font-medium text-slate-700">Bank Account Being Credited/Debited</label>
        <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" required onChange={handleAccountChange}>
          <option value="Select Account"></option>
          {accounts.map((account) => <option value={account.value}>{account.label}</option>)}
        </select>
        <br />
        <br />

        <label className="block text-sm font-medium text-slate-700">Payee or Payer</label>
        <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" required onChange={handleBillerChange}>
          <option value="Select Biller"></option>
          {billers.map((biller) => <option value={biller.value}>{biller.label}</option>)}
        </select>
        <br />
        <br />

        <label className="w-1/2 text-sm font-medium text-slate-700">Frequency of Transaction</label>
        <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" required onChange={handleFrequencyChange}>
          <option value="Select Account"></option>
          {frequencies.map((frequency) => <option value={frequency.value}>{frequency.label}</option>)}
        </select>
        <br />
        <br />

        <label className="text-sm font-medium text-slate-700">Start Date</label>
        <input type="date" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" onChange={handleStartDateChange} />
        <br />
        <br />

        <label className="text-sm font-medium text-slate-700">End Date</label>
        <input type="date" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl text-center" onChange={handleEndDateChange} />
        <br />
        <br />

        
        <button className="mt-1 w-1/4 px-3 py-2 bg-white border border-4 border-slate-300 rounded-xl text-sm font-bold shadow-xl text-center hover:bg-slate-300">Submit</button>

      </form>

    </div>
  )
}


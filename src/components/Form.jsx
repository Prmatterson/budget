import React, { useState } from 'react'

export default function Form() {

  // Array of objects containing data for form fields
  let accounts = [
    { label: "BMO", value: "Bank of Montreal" },
    { label: "SB", value: "Scotiabank" },
  ]

  let frequencies = [
    { label: "Once", value: "Once" },
    { label: "Monthly", value: "Monthly" },
    { label: "Biweekly", value: "Biweekly" },
    { label: "Weekly", value: "Weekly" },
    { label: "Yearly", value: "Yearly" },
    { label: "Quarterly", value: "Quarterly" },
    { label: "Biannually", value: "Biannually" },
    { label: "Custom", value: "Custom" },
  ]

  // Using state to keep track of what the selected account/frequency is
  let [account, setAccount] = useState("Select Account")
  let [frequency, setFrequency] = useState("Select Frequency")

  // Using this function to update the state of account/frequency
  // whenever a new option is selected from the dropdown
  let handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  let handleFrequencyChange = (e) => {
    setFrequency(e.target.value)
  }

  // Main Form Component
  return (
    <div id="form" className="mx-10">
      <form>
        <label>
          <label className="block text-sm font-medium text-slate-700">Amount</label>

          <br />
          <label className="block text-sm font-medium text-slate-700">Account</label>
          <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" onChange={handleAccountChange}>
            <option value="Select Account"></option>
            {accounts.map((account) => <option value={account.value}>{account.label}</option>)}
          </select>
          <br />
          <label className="w-1/2 text-sm font-medium text-slate-700">Frequency</label>
          <select className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl" onChange={handleFrequencyChange}>
            <option value="Select Account"></option>
            {frequencies.map((frequency) => <option value={frequency.value}>{frequency.label}</option>)}
          </select>
          <br />
        </label>
      </form>

    </div>
  )
}


import React from 'react'

export default function Form() {

function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}

  return (
    <div id="form" className="mx-10">
      <form>
        <label>
          <label className="block text-sm font-medium text-slate-700">Amount</label>
          <input type="number" name="amount-field" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl"/>
          <br/>
          <label className="block text-sm font-medium text-slate-700">Account</label>
          <input type="text" name="amount-field" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl"/>
          <br/>
          <label className="w-1/2 text-sm font-medium text-slate-700">Frequency</label>
          <select type="text" name="amount-field" className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm shadow-xl">
            <option id="option=once">Once</option>
            <option id="option=monthly">Monthly</option>
            <option id="option=biweekly">Biweekly</option>
            <option id="option-weekly">Weekly</option>
            <option id="option=yearly">Yearly</option>
            <option id="option=quarterly">Quarterly</option>
            <option id="option=biannually">Biannually</option>
            <option id="option=custom">Custom</option>
          </select>
          <br/>
        </label>
      </form>

    </div>
  )
}


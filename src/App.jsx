import { useState } from 'react'
import Calendar from './components/Calendar.jsx'
import Form from './components/Form.jsx'
import CashFlowForm from './components/CashFlowForm.jsx'
import CashFlowGrid from './components/CashFlowGrid'
import "tailwindcss/tailwind.css"

export default function App() {

const [calendarData, setCalendarData] = useState([]);
const [cashFlowData, setCashFlowData] = useState([]);

  return (
    <div className="grid grid-cols-4 grid-rows-2">
      <Form setCalendarData={setCalendarData}/>
      <Calendar calendarData={calendarData} />
      <CashFlowForm setCashFlowData={setCashFlowData} />
      <CashFlowGrid calendarData={calendarData} cashFlowData={cashFlowData}/>
    </div>
  );
};
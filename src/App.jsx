import { useState } from 'react'
import Calendar from './components/Calendar.jsx'
import Form from './components/Form.jsx'
import CashFlow from './components/CashFlow.jsx'
import "tailwindcss/tailwind.css"

export default function App() {

const [calendarData, setCalendarData] = useState([]);
const [cashFlowData, setCashFlowData] = useState([]);

  return (
    <div className="grid grid-cols-3">
      <Form setCalendarData={setCalendarData}/>
      <Calendar calendarData={calendarData} />
      <CashFlow calendarData={calendarData} cashFlowData={cashFlowData} setCashFlowData={setCashFlowData} />
    </div>
  );
};
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Calendar from './components/Calendar.jsx'
import Form from './components/Form.jsx'
import CashFlowForm from './components/CashFlowForm.jsx'
import CashFlowGrid from './components/CashFlowGrid'
import "tailwindcss/tailwind.css"

export default function App() {

const [calendarData, setCalendarData] = useState([]);
const [cashFlowData, setCashFlowData] = useState([]);
const { register, watch } = useForm();


  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <Form setCalendarData={setCalendarData}/>
      <Calendar watch={watch} calendarData={calendarData} cashFlowData={cashFlowData} />
      <CashFlowForm register={register} watch={watch} setCashFlowData={setCashFlowData} />
      <CashFlowGrid watch={watch} calendarData={calendarData} cashFlowData={cashFlowData}/>
    </div>
  );
};
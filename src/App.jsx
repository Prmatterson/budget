import { useState } from 'react'
import Calendar from './components/Calendar.jsx'
import Form from './components/Form.jsx'
import "tailwindcss/tailwind.css"

export default function App() {

const [calendarData, setCalendarData] = useState([]);

  return (
    <div className="grid grid-cols-2">
      <Form setCalendarData={setCalendarData} />
      <Calendar calendarData={calendarData} />
    </div>
  );
};
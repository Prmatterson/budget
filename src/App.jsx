import { useState } from 'react'
import Calendar from './components/Calendar.jsx'
import Form from './components/Form.jsx'
import "tailwindcss/tailwind.css"

export default function App() {
  return (
    <div className="grid grid-cols-2">
      <Form />
      <Calendar />
    </div>
  );
};
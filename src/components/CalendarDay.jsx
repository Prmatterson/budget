import React from "react";

const accountColourCodes = {
  "Bank of Montreal Chequing": "bg-blue-500 text-sky-400",
  "Scotiabank Savings": "bg-red-500 text-sky-400"
}

function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export default function CalendarDay({ day, calendarData }) {
  const events = [];

  for (const event of calendarData) {
    const startDate = new Date(`${event.startDate} 00:00:00`);
    const endDate = new Date(`${event.endDate} 00:00:00`);

    if (day < startDate || day > endDate) continue;
    switch (event.frequency) {
      case "Once":
        if (day === startDate) {
          events.push(event);
        }
        break;
      case "Weekly":
        if (
          day === startDate ||
          datediff(startDate, day) % 7 === 0
        ) {
          events.push(event);
        }
        break;
      case "Biweekly":
        if (
          day === startDate ||
          datediff(startDate, day) % 14 === 0
        ) {
          events.push(event);
        }
        break;
    }
  }
  return events.map(({ amount, biller, account }) => (
    <div className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${accountColourCodes[account]} rounded-full`}>
      {amount} {biller}
    </div>
  ));
}

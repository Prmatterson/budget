import React from "react";

function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export default function CalendarDay({ day, calendarData }) {
  const events = [];

  for (const event of calendarData) {
    const startDate = new Date(`${event.startDate} 00:00:00`);
    const endDate = new Date(`${event.endDate} 00:00:00`);

    if (day < startDate && day > endDate) continue;
    switch (event.frequency) {
      case "Once":
        console.log(day.getDate());
        console.log(event.startDate);
        if (day.getDate() === startDate.getDate()) {
          events.push(event);
        }
        break;
      case "Weekly":
        if (
          day.getDate() === startDate.getDate() ||
          datediff(startDate, day) % 7 === 0
        ) {
          events.push(event);
        }
        break;
      case "Biweekly":
        if (
          day.getDate() === startDate.getDate() ||
          datediff(startDate, day) % 14 === 0
        ) {
          events.push(event);
        }
        break;
    }
  }
  return events.map(({ amount, biller }) => (
    <div>
      {amount} {biller}
    </div>
  ));
}

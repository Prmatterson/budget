import React from 'react'

export default function CalendarData({ day, calendarData }) {
    const events = [];
    // Use switch statement to go between frequencies and do the math
    // calendarData is an array, so need to use for loop to get at data within it
    if (day.getDay() === 1) {
        events.push(<div key={day.getDay()}>Test</div>)
    }
    return events
}
import React from 'react'

export default function CalendarDay({ day, calendarData }) {
    const events = [];
    // Use switch statement to go between frequencies and do the math
    // calendarData is an array, so need to use for loop to get at data within it
    switch (calendarData) {
        case once:
        if (day.getDay() === startDate) {
            events.push(<div key={day.getDay()}>Test</div>)
        }
    }
}
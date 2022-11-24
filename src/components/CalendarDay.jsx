import React from 'react'
import calendarData from './Calendar'

export default function CalendarDay({ day, calendarData }) {
    const events = [];
    const frequency = calendarData.frequency

    // Destructuring calendarData to create frequency variables
    const once = calendarData.filter(calendarData =>
        calendarData.frequency === 'Once'
    );
    // console.log(once)

    const weekly = calendarData.filter(calendarData =>
        calendarData.frequency === 'Weekly'
    );
    // console.log(weekly)

    const biweekly = calendarData.filter(calendarData =>
        calendarData.frequency === 'Biweekly'
    );
    // console.log(biweekly)

    const bimonthly = calendarData.filter(calendarData =>
        calendarData.frequency === 'Bimonthly'
    );
    // console.log(bimonthly)

    const monthly = calendarData.filter(calendarData =>
        calendarData.frequency === 'Monthly'
    );
    // console.log(monthly)

    const quarterly = calendarData.filter(calendarData =>
        calendarData.frequency === 'Quarterly'
    );
    // console.log(quarterly)

    const biannually = calendarData.filter(calendarData =>
        calendarData.frequency === 'Biannually'
    );
    // console.log(biannually)

    const yearly = calendarData.filter(calendarData =>
        calendarData.frequency === 'Yearly'
    );
    // console.log(yearly)


    
    // Use switch statement to go between frequencies and do the math
    // calendarData is an array, so need to use for loop to get at data within it
    switch (frequency) {
        case "Once":
            if (day.getDay() === (startDate)) {
                events.push(<div key={day.getDay()}>Test</div>);
            };
    }
}
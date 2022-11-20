import React from 'react'
import { useForm } from 'react-hook-form'

export default function SubmitForm({ setCalendarData, calendarData } ) {
{day.map((number) => {
    const newDate = new Date(year, month, day)
    const eventsOnThisDay = calendarData.filter((range) => {
        return // If this should show up on this day or not (??)
    })}
)}}
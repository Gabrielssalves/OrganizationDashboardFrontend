import React, { useState, useEffect } from  'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Calendar.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const initialDay = value.clone().startOf("month");
    const finalDay = value.clone().endOf("month");

    
    useEffect(() => {
        const days = [];

        while(day.isBefore(endDay, "day")) {
            days.push(
                Array(7)
                .fill(0)
                .map(() => day.add(1, "day").clone())
            )
        }
        setCalendar(days)
    }, [value])

    function isSelected(day) {
        return day.isSame(value, "day")
    }

    function beforeInitialDay(day) {
        return day.isBefore(initialDay, "day")
    }

    function afterFinalDay(day) {
        return day.isAfter(finalDay, "day")
    }

    function isToday(day) {
        return day.isSame(new Date(), "day")
    }

    function dayStyles(day) {
        if (beforeInitialDay(day)) return "day out-of-month"
        if (afterFinalDay(day)) return "day out-of-month"        
        if (isToday(day)) return "day today"
        if (isSelected(day)) return "day selected"
        return "day"
    }

    function currDay() {
        return value.format("D")
    }

    function currMonth() {
        return value.format("MMMM")
    }

    function currYear() {
        return value.format("YYYY")
    }

    function prevMonth() {
        return value.clone().subtract(1, "month")
    }
    
    function nextMonth() {
        return value.clone().add(1, "month")
    }

    return (
        <div className="calendar-container">
            <div className="calendar">
                <div className="header">
                    <div className="arrow previous" onClick={() => setValue(prevMonth())}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className="current">
                        <div className="header-day">{currDay()}</div>
                        <div className="header-month">{currMonth()}</div>
                        <div className="header-year">{currYear()}</div>
                    </div>
                    <div className="arrow next" onClick={() => setValue(nextMonth())}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
                <div className="body"> 
                    {calendar.map((week, index ) => (
                        <div key={index}>
                            {week.map((day, index) => (
                                <div className="day-container" key={index}>
                                    <div className={dayStyles(day)}
                                        onClick={() => setValue(day.clone())}>                                                                                        
                                            {day.format("D").toString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}                   
                </div>
            </div>
        </div>        
    )
}
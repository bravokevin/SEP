import React from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const Calendar = () => {
    return (
        <div>
            <BigCalendar
                localizer={localizer}
            // // events={myEventsList}
            // startAccessor="start"
            // endAccessor="end"
            // style={{ height: 500 }}
            />
        </div>
    )
}

export default Calendar
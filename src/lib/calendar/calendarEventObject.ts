/**
 * Creates the event object with all the details about the workshop
 *
 * it evaluates whether the workshop is "Presencial" or "Virtual" to set up the virtual meeting or not
 *
 * If the platform of the workshop is 'Google Meet', it creates a meet meeting and add it to the event
 *
 * @param name - The name of the workshop
 * @param kindOfWorkshop
 * @param platform - platform of the workshop
 * @param calendarDescription - decsription with all the details of the workshop
 * @param start - the start hour of the workshop
 * @param end - the end hour of the workshop
 * @returns an event object
 *
 * @see {@link https://developers.google.com/calendar/api/v3/reference/events} for the event schema
 */
const createEventObject = (name: string, kindOfWorkshop: KindOfWorkshop, platform: Platform, calendarDescription: string, start: string, end: string, zoomUrl?: string) => {
    let event: calendar_v3.Schema$Event;
    if (kindOfWorkshop === "Presencial") {
        event = {
            summary: name,
            description: calendarDescription,
            location: platform,
            start: {
                dateTime: start
            },
            end: {
                dateTime: end
            },
            visibility: "public",
            guestsCanSeeOtherGuests: false,
            //sets a reminder 3 hours before the event 
            reminders: {
                useDefault: false,
                overrides: [
                    {
                        method: "popup",
                        minutes: 60
                    }
                ]
            },
        };
    }
    else {
        switch (platform) {
            case 'Google Meet':
                event = {
                    summary: name,
                    description: calendarDescription,
                    start: {
                        dateTime: start
                    },
                    end: {
                        dateTime: end
                    },
                    visibility: "public",
                    // Creates a google meet meeting 
                    conferenceData: {
                        createRequest: {
                            conferenceSolutionKey: {
                                type: "hangoutsMeet"
                            },
                            requestId: "7qxalsvy0e",
                        },
                    },
                    guestsCanSeeOtherGuests: false,
                    //sets reminders 30 and 5 minutes before the event
                    reminders: {
                        useDefault: false,
                        overrides: [
                            {
                                method: "popup",
                                minutes: 30
                            },
                            {
                                method: "popup",
                                minutes: 5
                            }
                        ]
                    },
                };
                break;
            case 'Zoom':
                event = {
                    summary: name,
                    description: calendarDescription,
                    location: zoomUrl,
                    start: {
                        dateTime: start
                    },
                    end: {
                        dateTime: end
                    },
                    visibility: "public",
                    // Creates a google meet meeting 
                    guestsCanSeeOtherGuests: false,
                    //sets reminders 30 and 5 minutes before the event
                    reminders: {
                        useDefault: false,
                        overrides: [
                            {
                                method: "popup",
                                minutes: 30
                            },
                            {
                                method: "popup",
                                minutes: 5
                            }
                        ]
                    },
                };
                break;
            case 'Otra':
                event = {
                    summary: name,
                    description: calendarDescription,
                    start: {
                        dateTime: start
                    },
                    end: {
                        dateTime: end
                    },
                    visibility: "public",
                    // Creates a google meet meeting 
                    guestsCanSeeOtherGuests: false,
                    //sets reminders 30 and 5 minutes before the event
                    reminders: {
                        useDefault: false,
                        overrides: [
                            {
                                method: "popup",
                                minutes: 30
                            },
                            {
                                method: "popup",
                                minutes: 5
                            }
                        ]
                    },
                };
                break;
            case 'Padlet':
                event = {
                    summary: name,
                    description: calendarDescription,
                    start: {
                        date: '2023-02-16'
                    },
                    end: {
                        date: '2023-02-19'
                    },
                    visibility: "public",
                    guestsCanSeeOtherGuests: false,
                    //sets reminders 30 and 5 minutes before the event
                    reminders: {
                        useDefault: false,
                        overrides: [
                            {
                                method: "popup",
                                minutes: 30
                            },
                            {
                                method: "popup",
                                minutes: 5
                            }
                        ]
                    },
                };
                break;
        }
    }
    return event;
};

export default createEventObject;
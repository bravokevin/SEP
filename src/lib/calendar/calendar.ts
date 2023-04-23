
import { Chat } from '@/types/Chat';
import { KindOfActivityTypes } from '@/types/General';
import { Volunteer } from '@/types/Volunteer';
import { Workshop } from '@/types/Workshop';
import { calendar_v3, calendar } from '@googleapis/calendar'
// // import { KindOfWorkshop, Workshop, Platform, Pensum } from '..';
// // import { CALENDAR_ID } from '../constants';
// // import { getAccessToken } from './oauth';
// // import createZoomMeeting from './zoom';

// // --------------------------------------------------- Auth related Functions ---------------------------------------------------
const CLIENT_ID = process.env.GOOGLE_API_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_API_CLIENT_SECRET;
const REDIRECT_URL = "http://localhost:3000/api/google/calendarCallback";

import { auth } from '@googleapis/oauth2';

const oauth2Client = new auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);

const CALENDAR_SCOPES = [
    "https://www.googleapis.com/auth/calendar.readonly",
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events.readonly",
    "https://www.googleapis.com/auth/calendar.events",
]

const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    // If you only need one scope you can pass it as a string
    scope: CALENDAR_SCOPES
});

const Calendar: calendar_v3.Calendar = calendar({ version: 'v3', auth: oauth2Client })
// // --------------------------------------------------- Calendar Utils Functions ---------------------------------------------------

// /**
//  * Sets an event in the calendar and gets the meeting created for that event and the 'add to my calendar' link
//  *
//  * @param workshop the data of a workshop
//  * @returns the meeting link and the 'add to my calendar' link
//  */
// const calendarMain = async (workshop: Workshop): Promise<string[]> => {
//     if (workshop.kindOfWorkshop === "Presencial") {
//         await createEvent(workshop);
//         const addUrl = await getPublicEventLink(workshop);
//         return [addUrl];
//     }
//     else {
//         if (workshop.platform === "Google Meet") {
//             const eventId = await createEvent(workshop) as string;
//             const [meetLink, meetId] = await getMeetEventLink(eventId);
//             const addUrl = await getPublicEventLink(workshop, meetLink!, meetId!);
//             return [addUrl, meetLink!, meetId!];
//         }
//         else if (workshop.platform === "Zoom") {
//             const [, join_url, id, password] = await createEvent(workshop);
//             const addUrl = await getPublicEventLink(workshop, join_url, id, password);
//             return [addUrl, join_url, id, password];
//         }
//         else if (workshop.platform === "Padlet") {
//             await createEvent(workshop);
//             const addUrl = await getPublicEventLink(workshop);
//             return [addUrl];
//         }
//         else {
//             return ["NONE"];
//         }
//     }
// };



/**
 * Evaluates wheter the calendar under the id exist or not. If exist returns that id, if not, returns the id of the users default calendar.
 *
 * @returns the deafults calendar id or {@linkcode CALENDAR_ID}
 */
const getCalendarId = async (calendarId: string): Promise<string> => {
    let calendar = await Calendar.calendars.get({ calendarId })
    let id = '';

    if (calendar.data.id === null || calendar.data.id === undefined) {
        calendar = await Calendar.calendars.get({ calendarId: "primary" })
        id = calendar.data.id!;
    }
    else {
        id = calendarId;
    }
    return id;
};


// /**
//  * it removes the spaces and the points from the string passed as argument
//  * @param str the string to remove the spaces and the points
//  * @returns
//  */
// const quite = (str: string): string => {
//     const withNoPoint = str.replace(/\./g, "")
//     return withNoPoint.replace(/\s/g, '')
// }

// /**
//  * it substracts the hours passed as argument to the date passed as argument
//  * @param date the date to substract the hours
//  * @param hours the number of hours to substract
//  * @returns the Date object with the hours substracted
//  */
// const subtractHours = (date: Date, hours: number): Date => {
//     date.setHours(date.getHours() - hours);
//     return date;
// }

/**
 * it formats the date passed as argument to the format needed by the calendar api
 *
 * @param date the date of the event
 * @param startingHour the start hour of the event
 * @param endHour the end hour of the event
 * @returns the date object of the start and end hour in ISO string format
 */
const getFormatedDate = (date: string, startingHour: string, endHour: string) => {
    const start = new Date(date + "," + startingHour)
    const end = new Date(date + "," + endHour);
    return [start.toISOString(), end.toISOString()];
};


// /**
//  * Creates the description for the calendar event
//  *
//  * @param pensum - the area in where the event goes in terms of the Pensum of AVAA
//  * @param speaker - the speaker of the event
//  * @param kindOfWorkshop
//  * @param platform - platform in where the event is going to happen
//  * @param description - The description of the event
//  * @returns a string with all the information about the event
//  */
// const createCalendarDescription = (pensum: Pensum,
//     speaker: string,
//     kindOfWorkshop: KindOfWorkshop,
//     platform: Platform,
//     description: string,
//     meetingLink?: string,
//     meetingId?: string,
//     meetingPassword?: string
// ): string => {
//     let calendarDescription: string;

//     switch (kindOfWorkshop) {

//         case "Presencial":
//             calendarDescription = `<b>Competencia Asociada:</b> ${pensum}
// <b>Facilitador:</b> ${speaker}
// <b>Modalidad:</b> ${kindOfWorkshop}
// <b>Lugar:</b> ${platform}

// ${description}`
//             break

//         case "Virtual":
//             calendarDescription = `<b>Competencia Asociada:</b> ${pensum}
// <b>Facilitador:</b> ${speaker}
// <b>Modalidad:</b> ${kindOfWorkshop}
// <b>Plataforma:</b> ${platform}
// <b>Link de la reunion:</b> ${meetingLink}
// <b>Id de la reunion:</b> ${meetingId}
// ${platform === 'Zoom' ? `<b>Contraseña de la reunion:</b> ${meetingPassword}` : ''}

// ${description}`
//             break

//         case "Asincrono":
//             calendarDescription = `<b>Competencia Asociada:</b> ${pensum}
// <b>Facilitador:</b> ${speaker}
// <b>Modalidad:</b> ${kindOfWorkshop}
// <b>Plataforma:</b> ${platform}

// Recuerda que: <b>a partir de la fehca del taller, tienes solo tienes 3 dias para completar los contenidos del taller.</b>

// ${description}`
//             break;

//     }
//     return calendarDescription;
// };
// // --------------------------------------------------- Calendar Main function ---------------------------------------------------
/**
 * creates an event with the Workshops values passed as parameter using the google calendar API v3
 *
 * @param values the information about the workshop
 * @see {@link https://developers.google.com/calendar/api/v3/reference/events/insert} for reference about the {insert} method
 * @returns the event id
 */
const createEvent = async (values: Workshop | Chat | Volunteer): Promise<string[] | string> => {

    const auth = await getAccessToken()
    // console.log(auth)
    // the calendar instance
    const Calendar: calendar_v3.Calendar = google.calendar({ version: 'v3', auth })
    //handler the case in where the calendar dosnt exist
    const { name, description, speaker, pensum, kindOfWorkshop, platform, date, startHour, endHour } = values;
    const calendarId = CALENDAR_ID;
    const [start, end] = getFormatedDate(date, startHour, endHour);
    let calendarDescription: string;
    let eventDetails: calendar_v3.Schema$Event;

    if (kindOfWorkshop === "Presencial" || platform === 'Padlet') {
        calendarDescription = createCalendarDescription(pensum, speaker, kindOfWorkshop, platform, description);
        eventDetails = createEventObject(name, kindOfWorkshop, platform, calendarDescription, start, end);
        // creates the event
        await Calendar.events.insert({ calendarId: calendarId, conferenceDataVersion: 1, requestBody: eventDetails, sendUpdates: "all" })
        return "NONE";
    }
    else {
        if (platform === 'Zoom') {
            const [join_url, id, password] = await createZoomMeeting(name, start);
            calendarDescription = createCalendarDescription(pensum, speaker, kindOfWorkshop, platform, description, join_url, id, password);
            eventDetails = createEventObject(name, kindOfWorkshop, platform, calendarDescription, start, end, join_url);
            // creates the event
            const event = await Calendar.events.insert({ calendarId: calendarId, conferenceDataVersion: 1, requestBody: eventDetails })
            return [event.data.id, join_url, id, password];
        }
        else if (platform === 'Google Meet') {
            calendarDescription = createCalendarDescription(pensum, speaker, kindOfWorkshop, platform, description);
            eventDetails = createEventObject(name, kindOfWorkshop, platform, calendarDescription, start, end);
            // creates the event
            const event = await Calendar.events.insert({ calendarId: calendarId, conferenceDataVersion: 1, requestBody: eventDetails })
            return event.data.id!;
        }
        else {
            return "NONE";
        }
    }
};


// // --------------------------------------------------- Function Related to Google Meet Meeting ---------------------------------------------------
// /**
//  * gets the meet meeting link of an specific event
//  *
//  * @param eventId the id of the event we want get the meet meeting
//  * @returns the meet link and its id
//  */
// const getMeetEventLink = async (eventId: string): Promise<string[]> => {
//     const auth = await getAccessToken()
//     // the calendar instance
//     const Calendar: calendar_v3.Calendar = google.calendar({ version: 'v3', auth })
//     const calendarId = await getCalendarId();
//     const event = await Calendar.events.get({ calendarId, eventId });
//     const meetLink = event.data.hangoutLink!;
//     const index = meetLink.lastIndexOf('/');
//     const meetId = meetLink.slice(index + 1);
//     return [meetLink, meetId];
// };


// /**
//  * it adds a specific number of `days` to a date
//  * @param date the date of the event
//  * @param days the number of days we want to add to the date
//  * @returns the date with the days added in ISO format
//  */
// const addDays = (date: string, days: number) => {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result.toISOString();
// }

// // --------------------------------------------------- Function Related to "Add to my calendar" link ---------------------------------------------------
/**
 * It creates an 'Add to my calendar' Link so all the registrant can add the specific event for a workshops to its calendar
 *
//  * @see {link https://stackoverflow.com/questions/5831877/how-do-i-create-a-link-to-add-an-entry-to-a-calendar} for more information about how to create the link
//  * @param workshop the details of a workshop
//  * @param meetingLink the meeting link
//  * @param meetingId the meeting id
//  * @returns an 'Add to my calendar' link
//  */
// const getPublicEventLink = async (workshop: Workshop, meetingLink?: string, meetingId?: string, meetingPasword?: string) => {
//     const { name, description, speaker, pensum, kindOfWorkshop, platform, date, startHour, endHour } = workshop;
//     const location = meetingLink ? meetingLink : platform;
//     const calendarName = encodeURIComponent(name);
//     const NDescription = createCalendarDescription(pensum, speaker, kindOfWorkshop, platform, description, meetingLink, meetingId, meetingPasword);
//     const [startDate, endDate] = getFormatedDate(date, startHour, endHour);
//     const encodedLocation = encodeURIComponent(location);
//     const encodeDescription = encodeURIComponent(NDescription);
//     const calendarStartDate = startDate.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '');
//     const calendarEndDate = endDate.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '');
//     let addUrl = '';
//     if (kindOfWorkshop === "Asincrono") {
//         const startDay = startDate.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '').slice(0, -11);
//         const endDayISO = addDays(endDate, 3)
//         const endDay = endDayISO.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '').slice(0, -11)
//         addUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${calendarName}&dates=${startDay}/${endDay}&details=${encodeDescription}&location=${encodedLocation}`;
//     }
//     else {
//         addUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${calendarName}&dates=${calendarStartDate}/${calendarEndDate}&details=${encodeDescription}&location=${encodedLocation}`;
//     }
//     return await shortenLink(addUrl);
// };




/**
 * Lists the events of a calendar in the last 3 months.
 * @see link https://developers.google.com/calendar/v3/reference/events/list - for more information about the API
 * @param calendarId - The ID of the calendar to retrieve events from.
 */
export const getCalendarEvents = async (calendarId: string = 'primary') => {
    let eventst;
    Calendar.events.list(
        {
            calendarId: calendarId,
            timeMin: substractMonths(3),
            orderBy: 'startTime',

        },
        (err, res) => {
            if (err) return console.error('The API returned an error: ' + err);
            if (res === null || res === undefined) return console.error('No events found.');
            const events = res.data.items;
            eventst = events;
        }
    );
}

// export default getEvents;



import { Workshop } from '@/types/Workshop';
import { calendar_v3 } from '@googleapis/calendar';
import axios, { AxiosRequestConfig } from 'axios';
/**
 * Generates a short url link by using the firebase Dynamic links API
 *
 * @see link https://firebase.google.com/docs/dynamic-links/rest for details about the firebase dynamic links API
 * It uses the rest API of firebase dynamic links to create a shortn link
 * @param link the link we want to shorten
 * @returns the shortened link
 * */
const shortenLink = async (link: string): Promise<string> => {
    const webApiKey = process.env.GOOOGLE_WEB_API_KEY;
    const data = {
        dynamicLinkInfo: {
            domainUriPrefix: 'https://proexcelencia.page.link',
            link
        },
        suffix: {
            option: 'SHORT'
        }
    }
    const config: AxiosRequestConfig = {
        headers: {
            "content-type": 'application/json',
        },
    }
    const response = await axios.post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${webApiKey}`, data, config);

    return response.data.shortLink;
}


/**
 * Substracts the specified number of months from the current date.
 * @param montsTosubstract - The number of months to substract.
 * @returns The date in ISO string format.
 */
export const substractMonths = (montsTosubstract: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() - montsTosubstract);
    return date.toISOString();
}

/**
 * It creates an 'Add to my calendar' Link so all the registrant can add the specific event for a workshops to its calendar
 *
//  * @see {link https://stackoverflow.com/questions/5831877/how-do-i-create-a-link-to-add-an-entry-to-a-calendar} for more information about how to create the link
//  * @param workshop the details of a workshop
//  * @param meetingLink the meeting link
//  * @param meetingId the meeting id
//  * @returns an 'Add to my calendar' link
//  */
export const getPublicEventLink = async (workshop: Workshop, meetingLink?: string, meetingId?: string, meetingPasword?: string) => {
    const { name, description, speaker, pensum, kindOfWorkshop, platform, date, startHour, endHour } = workshop;
    const location = meetingLink ? meetingLink : platform;
    const calendarName = encodeURIComponent(name);
    const NDescription = createCalendarDescription(pensum, speaker, kindOfWorkshop, platform, description, meetingLink, meetingId, meetingPasword);
    const [startDate, endDate] = getFormatedDate(date, startHour, endHour);
    const encodedLocation = encodeURIComponent(location);
    const encodeDescription = encodeURIComponent(NDescription);
    const calendarStartDate = startDate.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '');
    const calendarEndDate = endDate.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '');
    let addUrl = '';
    if (kindOfWorkshop === "Asincrono") {
        const startDay = startDate.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '').slice(0, -11);
        const endDayISO = addDays(endDate, 3)
        const endDay = endDayISO.replaceAll('-', '').replaceAll(':', '').replaceAll('.', '').slice(0, -11)
        addUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${calendarName}&dates=${startDay}/${endDay}&details=${encodeDescription}&location=${encodedLocation}`;
    }
    else {
        addUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${calendarName}&dates=${calendarStartDate}/${calendarEndDate}&details=${encodeDescription}&location=${encodedLocation}`;
    }
    return await shortenLink(addUrl);
};

/**
 * gets the meet meeting link of an specific event
 *
 * @param eventId the id of the event we want get the meet meeting
 * @returns the meet link and its id
 */
const getMeetEventLink = async (eventId: string): Promise<string[]> => {
    const auth = await getAccessToken()
    // the calendar instance
    const Calendar: calendar_v3.Calendar = google.calendar({ version: 'v3', auth })
    const calendarId = await getCalendarId();
    const event = await Calendar.events.get({ calendarId, eventId });
    const meetLink = event.data.hangoutLink!;
    const index = meetLink.lastIndexOf('/');
    const meetId = meetLink.slice(index + 1);
    return [meetLink, meetId];
};

/**
 * it formats the date passed as argument to the format needed by the calendar api
 *
 * @param date the date of the event
 * @param startingHour the start hour of the event
 * @param endHour the end hour of the event
 * @returns the date object of the start and end hour in ISO string format
 */
export const getFormatedDate = (date: string, startingHour: string, endHour: string) => {
    const start = new Date(date + "," + startingHour)
    const end = new Date(date + "," + endHour);
    return [start.toISOString(), end.toISOString()];
};
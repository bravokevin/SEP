
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const auth = new OAuth2Client(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URL'
);

auth.setCredentials({
  access_token: 'ACCESS_TOKEN',
  refresh_token: 'REFRESH_TOKEN',
});

const calendar = google.calendar({ version: 'v3', auth });

const calendarId = 'primary';
const timeZone = 'America/Los_Angeles';
const startTime = new Date('2023-05-05T09:00:00-07:00');
const endTime = new Date('2023-05-05T10:00:00-07:00');

calendar.events.list(
  {
    calendarId,
    timeZone,
    timeMin: startTime.toISOString(),
    timeMax: endTime.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  },
  (err, res) => {
    if (err) return console.error('The API returned an error:', err.message);

    const events = res.data.items;
    if (!events.length) {
      console.log('No events found for this time range.');
    } else {
      console.log('Events for this time range:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });
    }
  }
);
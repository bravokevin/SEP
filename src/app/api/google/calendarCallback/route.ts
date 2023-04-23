import { auth } from '@googleapis/oauth2';
const CLIENT_ID = process.env.GOOGLE_API_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_API_CLIENT_SECRET;
const REDIRECT_URL = "http://localhost:3000/api/google/calendarCallback";

const oauth2Client = new auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);

export async function GET(request: Request, res: Response) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    if (code) {
        oauth2Client.getToken(code, (err, tokens) => {
            if (err) {
                console.log('Error retrieving access token', err);
                return;
            }
            if (tokens) {
                console.log('Access token:', tokens.access_token);
                console.log('Refresh token:', tokens.refresh_token);
                console.log('Token type:', tokens.token_type);
                oauth2Client.setCredentials(tokens);
                res.redirect('/success');
            }
        });
    }
}
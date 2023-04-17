import { auth } from '@googleapis/oauth2';

const oAuth2Client = new auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

export async function GET(request: Request, res: Response) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  if (code) {
    oAuth2Client.getToken(code, (err, tokens) => {
      if (err) {
        console.log('Error retrieving access token', err);
        return;
      }
      if (tokens) {
        console.log('Access token:', tokens.access_token);
        console.log('Refresh token:', tokens.refresh_token);
        console.log('Token type:', tokens.token_type);
        oAuth2Client.setCredentials(tokens);
        res.redirect('/success');
      }
    });
  }
}

// app.get('/auth/google/callback', (req, res) => {
//   const code = req.query.code;
//   if (code) {
//     oAuth2Client.getToken(code, (err, tokens) => {
//       if (err) {
//         console.log('Error retrieving access token', err);
//         return;
//       }
//       console.log('Access token:', tokens.access_token);
//       console.log('Refresh token:', tokens.refresh_token);
//       console.log('Token type:', tokens.token_type);
//       console.log('Expires in:', tokens.expires_in);
//       oAuth2Client.setCredentials(tokens);
//       res.redirect('/success');
//     });
//   }
// });
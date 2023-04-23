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

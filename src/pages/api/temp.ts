import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
const callTempFunction = async (workshop: any, subject: string, group: string): Promise<{ formUrl: string, shortenFormUrl: string; sheetUrl: string }> => {
    const baseUrl = "https://script.google.com/macros/s/AKfycbxP3GmILfFEG1Xdo8vk7BrjNLVjuE0lGinkxEWK_vrzKLMCZRNYxOFfeXfvMup5fYO0_Q/exec";
    const data = {
        workshop,
        subject,
        group
    }
    const response = await axios.post(baseUrl, data)
    return response.data
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { workshops, subject, group } = req.body;
    const w = await callTempFunction(workshops, subject, group);
    res.send(w)
    return
}

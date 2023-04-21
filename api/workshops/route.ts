import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(req: NextRequest, res: NextResponse) {
    // const { workshops, subject, group } = req.body;
    console.log("adfdsfsdf")
    // const w = await callTempFunction(workshops, subject, group);
    // console.log(w)
    return
}
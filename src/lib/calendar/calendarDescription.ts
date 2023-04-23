import { ChatLevel } from "@/types/Chat"
import { KindOfActivity, Platform, activityMode } from "@/types/General"
import { AsociatedProject } from "@/types/Volunteer"
import { Pensum } from "@/types/Workshop"

/**
 * Creates the description for a workshop event 
 * 
 * @param defaultCalendarDescription the backbone description of the calendar event 
 * @param pensum 
 * @param activityMode 
 * @param platform 
 * @param description 
 * @param meetingLink 
 * @param meetingId 
 * @param meetingPassword 
 * @returns The desciption of the workshop event
 */
const createWorkshopCalendarDescription = (
    defaultCalendarDescription: string,
    pensum: Pensum,
    activityMode: activityMode,
    platform: Platform,
    description: string,
    meetingLink?: string,
    meetingId?: string,
    meetingPassword?: string,

) => {
    let workshopCalendarDescription = ''
    switch (activityMode) {
        case "presencial":
            workshopCalendarDescription = `${defaultCalendarDescription}
<b>Competencia Asociada:</b> ${pensum}

${description}`
            break

        case "virtual":
            workshopCalendarDescription = `${defaultCalendarDescription}
<b>Competencia Asociada:</b> ${pensum}
<b>Link de la reunion:</b> ${meetingLink}
<b>Id de la reunion:</b> ${meetingId}
${platform === 'zoom' ? `<b>Contraseña de la reunion:</b> ${meetingPassword}` : ''}

${description}`
            break
        case "asincrona":
            workshopCalendarDescription = `${defaultCalendarDescription}
<b>Competencia Asociada:</b> ${pensum}
<b>Link de Padlet:</b> ${meetingLink} 

Recuerda que: <b>a partir de la fecha del taller, solo tienes 3 dias para completar los contenidos del mismo.</b>

${description}`
            break;
    }
    return workshopCalendarDescription;
}

/**
 * Creates the description for the calendar event
 * 
 * @param kindOfActivity 
 * @param pensum 
 * @param speaker 
 * @param activityMode 
 * @param platform 
 * @param description 
 * @param meetingLink 
 * @param meetingId 
 * @param meetingPassword 
 * @param chatLevel 
 * @param asociatedProject 
 * @returns a html string with all the information about the event
 */
const createCalendarDescription = (
    kindOfActivity: KindOfActivity,
    pensum: Pensum,
    speaker: string,
    activityMode: activityMode,
    platform: Platform,
    description: string,
    meetingLink?: string,
    meetingId?: string,
    meetingPassword?: string,
    chatLevel?: ChatLevel,
    asociatedProject?: AsociatedProject
): string | undefined => {
    let calendarDescription: string = '';

    const defaultCalendarDescription = `<b>Modalidad:</b> ${activityMode}
<b>Facilitador:</b> ${speaker}
${activityMode === "virtual" ? `<b>Plataforma:</b> ${platform}` : `<b>Lugar:</b> ${platform}`}`

    if (kindOfActivity === 'workshop') {
        calendarDescription = createWorkshopCalendarDescription(
            defaultCalendarDescription,
            pensum,
            activityMode,
            platform,
            description,
            meetingLink,
            meetingId,
            meetingPassword
        )
    }

    else if (kindOfActivity === 'chat') {
        calendarDescription = `${defaultCalendarDescription}
<b>Nivel del Chat:</b> ${chatLevel}

${description}`
        return calendarDescription
    }

    else if (kindOfActivity === 'volunteer') {
        calendarDescription = `${defaultCalendarDescription}
<b>Proyecto a cargo:</b> ${asociatedProject}

${description}`
        return calendarDescription
    }

    else {
        throw ('Error: No se especifico un tipo de actividad valido')
    }
}

export default createCalendarDescription;
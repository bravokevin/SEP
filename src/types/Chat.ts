import shortUUID from "short-uuid";

export type KindOfChat = 'Presencial' | 'Virtual';

export type ChatLevel = "Basico" | "Intermedio" | "Avanzado";

export type ChatTurn = "A" | "B" | "C";

export type Platform = 'Zoom' | 'Google Meet' | 'Otra' | 'Padlet' | 'Oficinas de AVAA' | 'Teams' | 'Discord' | 'Jitsi';

export interface Chat {
    id: shortUUID.SUUID;
    name: string;
    level: ChatLevel;
    date: string;
    startHour: string;
    endHour: string;
    speaker: string
    numberOfParticipants: number;
    kindOfChat: KindOfChat;
    platform: Platform;
    description: string;
    turn: ChatTurn;
}
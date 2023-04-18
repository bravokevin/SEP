
import shortUUID from "short-uuid";

export type Pensum = 'Liderazgo' | 'Ejercicio Ciudadano' | 'Gerencia de si mismo' | 'TICs' | 'Emprendimiento';
export type KindOfWorkshop = 'Presencial' | 'Virtual' | 'Asincrono' | 'Hibrido';
export type Platform = 'Zoom' | 'Google Meet' | 'Otra' | 'Padlet' | 'Oficinas de AVAA' | 'Teams' | 'Discord' | 'Jitsi';

export type Workshop = {
    id: shortUUID.SUUID;
    name: string;
    pensum: Pensum;
    date: string;
    startHour: string;
    endHour: string;
    speaker: string
    numberOfParticipants: number;
    kindOfWorkshop: KindOfWorkshop;
    platform: Platform;
    description: string;
    avaaYear: string[];
}
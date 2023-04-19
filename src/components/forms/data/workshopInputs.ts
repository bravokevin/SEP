const WORKSHOP_INPUT_ELEMENTS = [
    {
        title: "Nombre del taller",
        placeHolder: "Liderazgo para el siglo 21",
        type: "text",
        inputType: "complete",
        inputId: "name",
        autoFocus: true,
        required: true
    },
    {
        title: "Competencia asociada",
        placeHolder: "Liderazgo",
        type: "text",
        inputOptions: ['Liderazgo', 'Ejercicio Ciudadano', 'Gerencia de sí mismo', 'TIC', 'Emprendimiento'],
        inputType: 'selection',
        inputId: "pensum",
        required: true
    },
    {
        title: "Fecha ",
        placeHolder: "03/20/2023",
        type: "date",
        inputType: 'date',
        inputId: "date",
        required: true

    },
    {
        title: "Hora de inicio",
        placeHolder: "02:00PM",
        type: "time",
        inputType: 'date',
        inputId: "startHour",
        required: true
    },
    {
        title: "Hora de finalización",
        placeHolder: "04:00PM",
        type: "time",
        inputType: 'normal',
        inputId: "endHour",
        required: true
    },
    {
        title: "Nombre del Facilitador",
        placeHolder: "Luis Lopéz",
        type: "text",
        inputType: 'normal',
        inputId: "speaker",
        required: true
    },
    {
        title: "Cupos disponibles",
        placeHolder: "20",
        type: "number",
        inputType: 'normal',
        inputId: "numberOfParticipants",
        required: true
    },
    {
        title: "Modalidad",
        placeHolder: "Presencial",
        type: "text",
        inputOptions: ['Presencial', 'Virtual', 'Asincrono'],
        inputType: 'selection',
        inputId: "kindOfWorkshop",
        required: true
    },
    {
        title: "Plataforma",
        placeHolder: "Oficinas de AVAA",
        type: "text",
        inputOptions: ['Zoom', 'Google Meet', 'Otra', 'Padlet'],
        inputType: 'allowedSelection',
        inputId: "platform",
        required: true
    },
    {
        title: "Año del taller",
        placeHolder: "II",
        type: "text",
        inputOptions: ['I', 'II', 'III', 'IV', 'V', '+V', 'Todos'],
        inputType: 'checkbox',
        inputId: "avaaYear",
        required: true
    },
    {
        title: "Descripcion",
        placeHolder: "Este taller...",
        type: "textarea",
        inputType: 'textArea',
        inputId: "description",
        required: false
    },

]

export default WORKSHOP_INPUT_ELEMENTS;
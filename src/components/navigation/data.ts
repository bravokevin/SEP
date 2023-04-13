export const SIDEBAR_ACTIVITIES_ACTIONS = [
    {
        icon: "bx bxs-dashboard",
        buttonName: "Talleres",
        itemList: [
            { name: "Crear Taller", link: "/talleres/crearTaller" },
            { name: "Estadísticas de talleres", link: "/talleres/estadisticas" },
            { name: "Lista de talleres", link: "/talleres/lista" },
        ]
    },
    {
        icon: "bx bxs-user-voice",
        buttonName: "Chats",
        itemList: [
            { name: "Crear Chat", link: "/chats/crearChats" },
            { name: "Estadísticas de chats", link: "/chats/estadisticas" },
            { name: "Lista de chats", link: "/chats/lista" },

        ]
    },
    {
        icon: "bx bx-run",
        buttonName: "Voluntariado",
        itemList: [
            { name: "Crear Voluntariado", link: "voluntariado/crearVoluntariado" },
            { name: "Estadísticas de talleres", link: "voluntariado/estadisticas" },
            { name: "Lista de voluntariado", link: "/voluntariado/lista" },

        ]
    }
]
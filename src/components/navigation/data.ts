export const SIDEBAR_ACTIVITIES_ACTIONS = [
    {
        icon: "bx bxs-dashboard",
        buttonName: "Talleres",
        itemList: [
            { name: "Crear Taller", link: "/talleres/crear" },
            // { name: "Estadísticas de talleres", link: "/talleres/estadisticas" },
            // { name: "Lista de talleres", link: "/talleres/lista" },
        ]
    },
    {
        icon: "bx bxs-user-voice",
        buttonName: "Chats",
        itemList: [
            { name: "Crear Chat", link: "/chats/crear" },
            // { name: "Estadísticas de chats", link: "/chats/estadisticas" },
            // { name: "Lista de chats", link: "/chats/lista" },

        ]
    },
    {
        icon: "bx bx-run",
        buttonName: "Voluntariado",
        itemList: [
            { name: "Crear Voluntariado", link: "voluntariado/crear" },
            // { name: "Estadísticas de talleres", link: "voluntariado/estadisticas" },
            // { name: "Lista de voluntariado", link: "/voluntariado/lista" },

        ]
    }
]
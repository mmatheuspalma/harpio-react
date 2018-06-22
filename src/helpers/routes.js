const api = {
    default: 'http://localhost:5000'
}

export default {
    comic: {
        list: {
            title: `Comics`,
            url: `/`,
            route: `/:search?`
        },
        internal: {
            title: `:title`,
            url: `/comic/:comic/:id`,
            route: `/comic/:comic/:id`
        },
        api: `${api.default}/comics`
    },
}
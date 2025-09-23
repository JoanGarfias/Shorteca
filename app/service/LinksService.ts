export const Linkservice = {
    getData() {
        return [
            {
                id: 1,
                originalUrl: "https://www.apple.com/iphone-15-proxcjklvhjklcxhljkvxchjklvhjkxchjvlxchjklvhklcxhjlvkhjxcvhjklxchjklvhjklcxhklvhklxchvklsdklfyureioufgy89oisryre90uuopwiosapd{ñalsdkasñldñajskdjkasjklñd/",
                shortenedUrl: "https://shorteca.com/iphone15pro",
                visits: 3542,
                createdAt: "2024-09-22"
            },
            {
                id: 2,
                originalUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                shortenedUrl: "https://shorteca.com/rickroll",
                visits: 981,
                createdAt: "2024-09-20"
            },
            {
                id: 3,
                originalUrl: "https://github.com/vuejs/core",
                shortenedUrl: "https://shorteca.com/vue-core",
                visits: 5210,
                createdAt: "2024-09-15"
            },
            {
                id: 4,
                originalUrl: "https://tailwindcss.com/docs/installation",
                shortenedUrl: "https://shorteca.com/tailwind-docs",
                visits: 125,
                createdAt: "2024-09-18"
            },
            {
                id: 5,
                originalUrl: "https://laravel.com/docs/11.x/deployment",
                shortenedUrl: "https://shorteca.com/laravel-deploy",
                visits: 23,
                createdAt: "2024-09-10"
            }
        ];
    },

    getLinksSmall() {
        return Promise.resolve(this.getData().slice(0, 5));
    },

    getLinksMedium() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getLinksLarge() {
        return Promise.resolve(this.getData().slice(0, 20));
    },

    getLinksXLarge() {
        return Promise.resolve(this.getData());
    }
};

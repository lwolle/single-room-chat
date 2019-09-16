export const api = {
    login: async () => ({
        ok: true,
        body: {
            userId: 'harhar',
        },
    }),
    getMessages: async () => ({
        ok: true,
        body: {
            messages: [
                {
                    id: 1,
                    creatorId: 2,
                    text: 'the-message',
                },
                {
                    id: 2,
                    creatorId: 2,
                    text: 'the-message2',
                },
                {
                    id: 3,
                    creatorId: 2,
                    text: 'the-message3',
                },
            ],
        },
    }),
};

import moment from 'moment'
const start = moment();

const messages = [
    {
        id: 'ecade2c8-3bc1-420e-84c0-3bf1020c68e0',
        userId: 1,
        content: 'Hey, anyone seen that Joker movie? is it any good?',
        sentAt: moment(start).subtract(12, 'minutes'),
        thread: [
            {
                id: '5219119a-faee-4ae3-8d67-0075185f90db',
                userId: 2,
                content: `it's... weird. but p good overall`,
                sentAt: moment(start).subtract(10, 'minutes').subtract(43, 'seconds'),
                upvotes: [1],
            }
        ],
        upvotes: [],
        topic: 3,
    },
    {
        id: '9ced083a-7fca-4066-8f9d-0e66b2077c2f',
        userId: 2,
        content: 'I guess this is one of THOSE days... Anyone else could use a cheer-me-up right now?',
        sentAt: moment(start).subtract(6, 'minutes').subtract(11, 'seconds'),
        thread: [
            {
                id: '8dfa9a5a-928d-4617-b27e-53b8ca239f38',
                userId: 1,
                content: 'hang in there. you just need 1 win to get right back on the horse. you got it ;)',
                sentAt: moment(start).subtract(1, 'minutes').subtract(44, 'seconds'),
                upvotes: [],
            }
        ],
        upvotes: [1, 3],
        topic: 2,
    },
    {
        id: '6d08dbfb-9720-4f15-94c8-ce33089c6f2d',
        userId: 3,
        content: `I can't find my deals... :(`,
        sentAt: moment(start).subtract(5, 'minutes').subtract(35, 'seconds'),
        thread: [],
        upvotes: [],
        topic: 2,
    }, {
        id: 'e88911be-bf36-44a8-80aa-b59c32e9c705',
        userId: 3,
        content: 'Nevermind, got it :)',
        sentAt: moment(start).subtract(5, 'minutes').subtract(10, 'seconds'),
        thread: [],
        upvotes: [],
        topic: 2,
    }, {
        id: '776df791-4f32-463f-b5e4-ed12b41b5a24',
        userId: 3,
        content: `Wow, Pipedrive has added something new !!`,
        sentAt: moment(start).subtract(3, 'minutes').subtract(58, 'seconds'),
        thread: [
            {
                id: '44e7155a-431a-40a2-8a18-b53e6a4277ed',
                userId: 2,
                content: `'The ONE thing' - definitely`,
                sentAt: moment(start).subtract(2, 'minutes').subtract(11, 'seconds'),
                upvotes: [],
            },
            {
                id: '663dc4cc-a814-41f5-8050-e7205f829938',
                userId: 1,
                content: `i would recommend "why we sleep". dont get confused by the title -
                    its what any person in todays hectic world should have in their home library`,
                sentAt: moment(start).subtract(1, 'minutes').subtract(1, 'seconds'),
                upvotes: [2, 3, 4, 5],
            },
        ],
        upvotes: [],
        topic: 1,
    }
]

export default messages;

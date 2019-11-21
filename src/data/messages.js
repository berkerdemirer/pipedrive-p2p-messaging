import moment from 'moment'
const start = moment();

const messages = [
    {
        userId: 1,
        content: 'Hey, anyone seen that Joker movie? is it any good?',
        sentAt: moment(start).subtract(12, 'minutes'),
        thread: [
            {
                userId: 2,
                content: `it's... weird. but p good overall`,
                sentAt: moment(start).subtract(10, 'minutes').subtract(43, 'seconds'),
                upvotes: [1],
            }
        ],
        upvotes: [],
    },
    {
        userId: 2,
        content: 'I guess this is one of THOSE days... Anyone else could use a cheer-me-up right now?',
        sentAt: moment(start).subtract(6, 'minutes').subtract(11, 'seconds'),
        thread: [
            {
                userId: 1,
                content: 'hang in there. you just need 1 win to get right back on the horse. you got it ;)',
                sentAt: moment(start).subtract(1, 'minutes').subtract(44, 'seconds'),
                upvotes: [],
            }
        ],
        upvotes: [1, 3],
    },
    {
        userId: 3,
        content: `I can't find my deals... :(`,
        sentAt: moment(start).subtract(5, 'minutes').subtract(35, 'seconds'),
        thread: [],
        upvotes: [],
    }, {
        userId: 3,
        content: 'Nevermind, got it :)',
        sentAt: moment(start).subtract(5, 'minutes').subtract(10, 'seconds'),
        thread: [],
        upvotes: [],
    }, {
        userId: 4,
        content: `What's a good book on time managment you've read recently??`,
        sentAt: moment(start).subtract(3, 'minutes').subtract(58, 'seconds'),
        thread: [
            {
                userId: 2,
                content: `'The ONE thing' - definitely`,
                sentAt: moment(start).subtract(2, 'minutes').subtract(11, 'seconds'),
                upvotes: [],
            },
            {
                userId: 1,
                content: `i would recommend "why we sleep". dont get confused by the title -
                    its what any person in todays hectic world should have in their home library`,
                sentAt: moment(start).subtract(1, 'minutes').subtract(1, 'seconds'),
                upvotes: [2, 3, 4, 5],
            }
        ],
        upvotes: [],
    }
]

export default messages;

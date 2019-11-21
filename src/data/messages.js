import moment from 'moment'
const demoStart = moment();

const messages = [
    {
        userId: 1,
        content: 'hey, anyone seen that Joker movie? is it any good?',
        sentAt: demoStart.subtract(12, 'minutes'),
        thread: [
            {
                userId: 2,
                content: `it's... weird. but p good overall`,
                sentAt: demoStart.subtract(10, 'minutes').subtract(43, 'seconds'),
            }
        ]
    },
    {
        userId: 2,
        content: 'I guess this is one of THOSE days... Anyone else could use a cheer-me-up right now?',
        sentAt: demoStart.subtract(6, 'minutes').subtract(11, 'seconds'),
        thread: [
            {
                userId: 1,
                content: 'hang in there. you just need 1 win to get right back on the horse. you got it ;)',
                sentAt: demoStart.subtract(1, 'minutes').subtract(44, 'seconds'),
            }
        ],
    },
    {
        userId: 3,
        content: `I can't find my deals... :(`,
        sentAt: demoStart.subtract(5, 'minutes').subtract(35, 'seconds'),
        thread: [],
    }, {
        userId: 3,
        content: 'Nevermind, got it :)',
        sentAt: demoStart.subtract(5, 'minutes').subtract(10, 'seconds'),
        thread: [],
    }, {
        userId: 4,
        content: `What's a good book on time managment you've read recently??`,
        sentAt: demoStart.subtract(3, 'minutes').subtract(58, 'seconds'),
        thread: [
            {
                userId: 2,
                content: `'The ONE thing' - definitely`,
                sentAt: demoStart.subtract(2, 'minutes').subtract(11, 'seconds'),
            },
            {
                userId: 1,
                content: `i would recommend "why we sleep". dont get confused by the title -
                    its what any person in todays hectic world should have in their home library`,
                sentAt: demoStart.subtract(1, 'minutes').subtract(1, 'seconds'),
            }
        ]
    }
]

export default messages;

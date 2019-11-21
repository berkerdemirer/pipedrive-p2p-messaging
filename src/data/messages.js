const moment = require('moment');
const demoStart = moment.now();

module.exports = [
    {
        user_id: 1,
        content: 'hey, anyone seen that Joker movie? is it any good?',
        sent_at: demoStart.subtract(12, 'minutes'),
        thread: [
            {
                user_id: 2,
                content: `it's... weird. but p good overall`,
                sent_at: demoStart.subtract(10, 'minutes').subtract(43, 'seconds'),
            }
        ]
    },
    {
        user_id: 2,
        content: 'I guess this is one of THOSE days... Anyone else good use a cheer-me-up right now?',
        sent_at: demoStart.subtract(6, 'minutes').subtract(11, 'seconds'),
        thread: [
            {
                user_id: 1,
                content: 'hang in there. you just need 1 win to get right back on the horse. you got it ;)',
                sent_at: demoStart.subtract(1, 'minutes').subtract(44, 'seconds'),
            }
        ],
    },
    {
        user_id: 3,
        content: `I can't find my deals... :(`,
        sent_at: demoStart.subtract(5, 'minutes').subtract(35, 'seconds'),
        thread: [],
    }, {
        user_id: 3,
        content: 'Nevermind, got it :)',
        sent_at: demoStart.subtract(5, 'minutes').subtract(10, 'seconds'),
        thread: [],
    }, {
        user_id: 4,
        content: `What's a good book on time managment you've read recently??`,
        sent_at: demoStart.subtract(3, 'minutes').subtract(58, 'seconds'),
        thread: [
            {
                user_id: 2,
                content: `'The ONE thing' - definitely`,
                sent_at: demoStart.subtract(2, 'minutes').subtract(11, 'seconds'),
            },
            {
                user_id: 1,
                content: `i would recommend "why we sleep". dont get confused by the title -
                    its what any person in todays hectic world should have in their home library`,
                sent_at: demoStart.subtract(1, 'minutes').subtract(1, 'seconds'),
            }
        ]
    }


]

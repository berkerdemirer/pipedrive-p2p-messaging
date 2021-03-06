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
        content: 'Closing deals with new clients can be hectic but I am getting good at this!',
        sentAt: moment(start).subtract(6, 'minutes').subtract(11, 'seconds'),
        thread: [
            {
                id: '5219119a-faee-4ae3-8d67-0075185f9090',
                userId: 1,
                content: `Coffee is for closers.Since, I’m not closing
                Can I buy you a cup?
                `,
                sentAt: moment(start).subtract(4, 'minutes').subtract(43, 'seconds'),
                upvotes: [1],
            },
            {
                id: '5219119a-faee-4ae3-8d67-0075185f9091',
                userId: 2,
                content: `I’m booked today,But please free to book  a meeting using my
                Scheduler link
                `,
                sentAt: moment(start).subtract(3, 'minutes').subtract(12, 'seconds'),
                upvotes: [1],
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
        topic: 3,
    }, {
        id: 'e88911be-bf36-44a8-80aa-b59c32e9c705',
        userId: 3,
        content: 'Nevermind, got it :)',
        sentAt: moment(start).subtract(5, 'minutes').subtract(10, 'seconds'),
        thread: [],
        upvotes: [],
        topic: 3,
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
        ],
        upvotes: [],
        topic: 1,
    },
    {
        id: '776df791-4f32-463f-b5e4-ed12dwb41b5a534',
        userId: 4,
        content: `Getting better at pipedrive pipelines :)`,
        sentAt: moment(start).subtract(3, 'minutes').subtract(58, 'seconds'),
        thread: [
            {
                id: '44e7155a-431a-40a2-8a18-b53eee6a4277ed',
                userId: 2,
                content: `This helped me a lot`,
                sentAt: moment(start).subtract(2, 'minutes').subtract(11, 'seconds'),
                upvotes: [],
            }
        ],
        upvotes: [],
        topic: 1,
    }
]

export default messages;

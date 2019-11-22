import delay from 'delay';
import moment from 'moment';
import { addTopMessage, addThreadMessage } from '../utils/messages';

const seconds = s => s * 1000

const addMessages = async (setMessages) => {
    await delay(seconds(2));

    setMessages(messages => addTopMessage(messages, {
        id: 'b43e4921-392e-4bb2-b711-7ff357e82f12',
        userId: 5,
        content: `What's good my fellow sales peeps?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 3,
    }));

    await delay(seconds(1));

    setMessages(messages => addTopMessage(messages, {
        id: 'd32fb16b-b268-4ea1-87c1-9a99463fc9ec',
        userId: 3,
        content: `Does anyone know how to close a deal? :)`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(4));

    setMessages(messages => addTopMessage(messages, {
        id: '0904cef1-db68-4157-8853-3d27d4697d37',
        userId: 3,
        content: `Where did I leave my keys???`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));
};


export default addMessages;

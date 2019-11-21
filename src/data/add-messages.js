import delay from 'delay';
import moment from 'moment';

const seconds = s => s * 1000

const addTopMessage = (setMessages, message) => {
    setMessages(messages => [...messages, message]);
};

const addThreadMessage = (setMessages, topMessageIdx, message) => {
    setMessages(messages => {
        const topMessage = messages[topMessageIdx]
        return [
            ...messages.slice(0, topMessageIdx),
            {
                ...topMessage,
                thread: [...topMessage.thread, message],
            },
            ...messages.slice(topMessageIdx + 1),
        ]
    });
}

const addMessages = async (setMessages) => {
    await delay(seconds(3));

    addTopMessage(setMessages, {
        userId: 5,
        content: `What's good my fellow sales peeps?`,
        sentAt: moment(),
        threads: []
    });

    await delay(seconds(1));

    addTopMessage(setMessages, {
        userId: 3,
        content: `Does anyone know how to close a deal? :)`,
        sentAt: moment(),
    });

    await delay(seconds(4));

    addTopMessage(setMessages, {
        userId: 3,
        content: `Where did I leave my keys???`,
        sentAt: moment(),
    });
};


export default addMessages;

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
    await delay(seconds(7));

    addTopMessage(setMessages, {
        user_id: 5,
        content: `What's good my fellow sales peeps?`,
        sent_at: moment(),
        threads: []
    });

    await delay(seconds(2));

    addTopMessage(setMessages, {
        user_id: 3,
        content: `Does anyone know how to close a deal? :)`,
        sent_at: moment(),
    });

    await delay(seconds(3));

    addTopMessage(setMessages, {
        user_id: 3,
        content: `Where did I leave my keys???`,
        sent_at: moment(),
    });
};


export default addMessages;

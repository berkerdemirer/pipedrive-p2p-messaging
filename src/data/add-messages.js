import delay from 'delay';
import moment from 'moment';
import { animateScroll } from "react-scroll";
import { addTopMessage, addThreadMessage } from '../utils/messages';

const seconds = s => s * 1000

const addTopMessageAndScroll = (setMessages, message) => {
    setMessages(messages => addTopMessage(messages, message));
    animateScroll.scrollToBottom({
        containerId: "messages-list"
    });
};

const addMessages = async (setMessages) => {
    await delay(seconds(2));

    addTopMessageAndScroll(setMessages, {
        userId: 5,
        content: `What's good my fellow sales peeps?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
    });

    await delay(seconds(1));

    addTopMessageAndScroll(setMessages, {
        userId: 3,
        content: `Does anyone know how to close a deal? :)`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
    });

    await delay(seconds(4));

    addTopMessageAndScroll(setMessages, {
        userId: 3,
        content: `Where did I leave my keys???`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
    });
};


export default addMessages;

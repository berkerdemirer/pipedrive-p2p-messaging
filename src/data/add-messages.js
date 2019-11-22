import delay from 'delay';
import moment from 'moment';
import { addTopMessage, addThreadMessage } from '../utils/messages';

const seconds = s => s * 1000

const addMessages = async (setMessages) => {
    await delay(seconds(5));

    setMessages(messages => addTopMessage(messages, {
        id: '2cae70c3-503c-40a8-85f9-f06a27b396d3',
        userId: 3,
        content: `What's the best calling feature to use with Pipedrive?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(4));

    setMessages(messages => addTopMessage(messages, {
        id: '06823467-37b7-4c15-8de6-9a4eef3bb2a3',
        userId: 3,
        content: `How should I setup a pipeline for subscription-based deals?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(6));

    setMessages(messages => addTopMessage(messages, {
        id: '82f8c266-1391-4fb8-a167-ea7a4b7d3fe7',
        userId: 2,
        content: `How should I setup a pipeline for subscription-based deals?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(4));

    setMessages(messages => addTopMessage(messages, {
        id: '95773409-ce4f-4d63-a1d8-deb8d003e857',
        userId: 4,
        content: `I'm an Electrician trying to grow my business with Pipedrive - any advice?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(3));

    setMessages(messages => addTopMessage(messages, {
        id: '99120c6e-0154-4126-a529-5c2333a05bd1',
        userId: 5,
        content: `Project Managers! What integrations in Pipedrive help make your job easier?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(7));

    setMessages(messages => addTopMessage(messages, {
        id: '728978f1-4d98-40ca-b231-7a15aee7cb17',
        userId: 2,
        content: `Any Dentists here? If so, do you use Web Forms in Pipedrive for your waiting room services?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(4));

    setMessages(messages => addTopMessage(messages, {
        id: '618903ed-e25e-4725-a803-42de4a4d1156',
        userId: 3,
        content: `Anybody have some Workflow Automation templates for the Construction industry?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(12));

    setMessages(messages => addTopMessage(messages, {
        id: '686a3aed-4ddc-49d1-8bd9-98e79bb16098',
        userId: 3,
        content: `Who here knows how to use Pipedrive in the Hospitality industry?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(5));

    setMessages(messages => addTopMessage(messages, {
        id: 'cbd6b66d-88c3-41d1-9267-7fe3b0f125cd',
        userId: 4,
        content: `Is there some sort of magically position on a website to place my Web Form?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));

    await delay(seconds(18));

    setMessages(messages => addTopMessage(messages, {
        id: '1ff12954-df61-40c9-994f-fa8a02b28378',
        userId: 2,
        content: `How do I best manage recurring deals in my pipelines?`,
        sentAt: moment(),
        thread: [],
        upvotes: [],
        topic: 2,
    }));
};


export default addMessages;

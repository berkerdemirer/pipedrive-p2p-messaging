export const addTopMessage = (messages, message) => {
	return [...messages, message];
};

export const addThreadMessage = (messages, threadMessageId, newMessage) => {
	return messages.map(message => {
        if (message.id === threadMessageId) {
            return {
                ...message,
                thread: [...message.thread, newMessage],
            };
        }
        return message;
    });
};

export const updateMessage = (messages, id, threadMessageId, updateFunc) => {
    return messages.map(message => {
        if (message.id === id) {
            return updateFunc(message);
        } else if (message.id === threadMessageId) {
            return {
                ...message,
                thread: message.thread.map(subMessage => {
                    if (subMessage.id === id) {
                        return updateFunc(subMessage);
                    }
                    return subMessage;
                })
            }
        }
        return message;
    });
}


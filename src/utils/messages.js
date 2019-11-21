export const addTopMessage = (messages, message) => {
	return [...messages, message];
};

export const addThreadMessage = (messages, id, message) => {
	const topMessage = messages[id];
	return [
		...messages.slice(0, id),
		{
			...topMessage,
			thread: [...topMessage.thread, message],
		},
		...messages.slice(id + 1),
	];
};


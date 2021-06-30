const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
		{id: 1, name: 'Dima'},
		{id: 2, name: 'Sasha'},
		{id: 3, name: 'Lera'},
		{id: 4, name: 'Povch'},
		{id: 5, name: 'Jan'},
		{id: 6, name: 'Lyovaz'},
	],
	messages: [
		{id: 1, message: "Hi!"},
		{id: 2, message: "How is your day?"},
		{id: 3, message: "Yo, man!"},
		{id: 4, message: "Fine. And you?"},
	],
	newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let newMessage = {id: 5, message: state.newMessageBody}
			state.newMessageBody = '';
			state.messages.push(newMessage);
			return state;
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
	({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
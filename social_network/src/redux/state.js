import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: "Hi, how are you?", likesCount: 15},
				{id: 2, message: "It's my first post!", likesCount: 23},
				{id: 3, message: "It's my second post!", likesCount: 12},
				{id: 4, message: "It's my third post!", likesCount: 9},
			],
			newPostText: 'it-kamasutra.com',
			wallpaperPath: "https://getawayzante.com/wp-content/uploads/2020/05/by-the-sea.jpg",
		},
		dialogsPage: {
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
		},
		sidebar: {},
	},
	_callSubscriber() {
		console.log("State changed");
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer; // pattern observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state)
	},
}

export default store;
window.store = store;
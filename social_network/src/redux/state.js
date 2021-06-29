const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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
		messagesPage: {
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
		},
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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			}
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else {
			if (action.type === UPDATE_NEW_POST_TEXT) {
						this._state.profilePage.newPostText = action.newText;
						this._callSubscriber(this._state);
					}
		}
	},
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
	({type: UPDATE_NEW_POST_TEXT, newText: text})


export default store;
window.store = store;
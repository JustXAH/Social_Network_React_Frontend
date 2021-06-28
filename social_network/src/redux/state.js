import {renderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	renderEntireTree(state);
}

export default state;
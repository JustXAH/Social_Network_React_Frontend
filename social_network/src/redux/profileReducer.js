const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
	posts: [
		{id: 1, message: "Hi, how are you?", likesCount: 15},
		{id: 2, message: "It's my first post!", likesCount: 23},
		{id: 3, message: "It's my second post!", likesCount: 12},
		{id: 4, message: "It's my third post!", likesCount: 9},
	],
	newPostText: 'it-kamasutra.com',
	wallpaperPath: "https://getawayzante.com/wp-content/uploads/2020/05/by-the-sea.jpg",
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			return  {
				...state,
				newPostText: action.newText
			};
		case ADD_POST:
			let newPost =  {id: 5, message: state.newPostText, likesCount: 0};
			return  {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
	({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
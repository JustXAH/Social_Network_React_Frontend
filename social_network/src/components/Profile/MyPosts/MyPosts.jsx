import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
	let posts = [
		{id: 1, message: "Hi, how are you?", likesCount: 15},
		{id: 2, message: "It's my first post!", likesCount: 23},
		{id: 3, message: "It's my second post!", likesCount: 12},
		{id: 4, message: "It's my third post!", likesCount: 9},
	]

	let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={style.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;
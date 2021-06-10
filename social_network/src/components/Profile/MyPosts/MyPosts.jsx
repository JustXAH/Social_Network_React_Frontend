import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div>
				<Post message='Hi, how are you?' likeCount='15' />
				<Post message="It's my first name" likeCount='20' />
			</div>
		</div>
	)
}

export default MyPosts;
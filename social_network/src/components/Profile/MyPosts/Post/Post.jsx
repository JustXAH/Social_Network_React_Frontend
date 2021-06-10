import style from './Post.module.css';

const Post = (props) => {
	console.log(props.message)
	return (
		<div className={style.item}>
			<img id={style.avatar} alt='avatar' src='https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'/>
			<span>{props.message}</span>
			<div>
				<img id={style.like} alt='like' src='https://www.freepnglogos.com/uploads/like-png/facebook-favorite-favourite-like-thumbs-thumbs-20.png'/>
				<span>{props.likeCount}</span>
			</div>
		</div>
	)
}

export default Post;
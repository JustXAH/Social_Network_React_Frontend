import style from'./Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
	return (
		<div>
			<div className={style.wallpaper}>
				<img alt='wallpaper' src='https://getawayzante.com/wp-content/uploads/2020/05/by-the-sea.jpg'/>
			</div>
			<div>
				ava + description
			</div>

			<MyPosts />
		</div>
	)
}

export default Profile;
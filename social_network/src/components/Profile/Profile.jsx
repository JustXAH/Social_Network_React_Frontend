import style from'./Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className={style.content}>
			<div>
				<img src='https://getawayzante.com/wp-content/uploads/2020/05/by-the-sea.jpg'/>
			</div>
			<div>
				ava + description
			</div>

			<MyPosts />
		</div>
	)
}

export default Profile;
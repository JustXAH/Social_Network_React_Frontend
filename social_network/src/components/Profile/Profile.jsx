import style from'./Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo wallpaperPath={props.wallpaperPath}/>
			<MyPosts posts={props.posts}/>
		</div>
	)
}

export default Profile;
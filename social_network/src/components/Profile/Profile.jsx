import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsConteiner";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
}

export default Profile;
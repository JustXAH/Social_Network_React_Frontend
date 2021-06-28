import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo wallpaperPath={props.profilePage.wallpaperPath}/>
			<MyPosts
				posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				updateNewPostText={props.updateNewPostText}
				addPost={props.addPost}
			/>
		</div>
	)
}

export default Profile;
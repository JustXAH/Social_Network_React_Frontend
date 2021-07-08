import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			{/*<div className={style.wallpaper}>*/}
			{/*	<img alt='wallpaper' src="https://getawayzante.com/wp-content/uploads/2020/05/by-the-sea.jpg"/>*/}
			{/*</div>*/}
			<div className={style.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;
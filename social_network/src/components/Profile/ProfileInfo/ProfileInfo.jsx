import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div className={style.wallpaper}>
				<img alt='wallpaper' src={props.wallpaperPath}/>
			</div>
			<div className={style.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;
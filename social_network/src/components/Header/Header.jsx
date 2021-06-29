import style from './Header.module.css';

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.headerBlocks}>
				<img alt="logo" src="https://live.staticflickr.com/7114/7689006198_7b3b870321_b.jpg"/>
			</div>
			<div className={style.headerBlocks}>
				Moonlight
				{/*<span className={style.networkName}>Social network Moonlight</span>*/}
			</div>
		</header>
	)
}

export default Header;
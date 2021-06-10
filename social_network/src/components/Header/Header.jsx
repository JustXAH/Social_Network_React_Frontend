import style from './Header.module.css';

const Header = (props) => {
	return (
		<header className={style.header}>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayJtFhoIQBQHejkbrFJ25blduDKwh8JuEig&usqp=CAU'/>
		</header>
	)
}

export default Header;
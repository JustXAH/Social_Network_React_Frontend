import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id

	return (
		<div className={style.dialog + ' ' + style.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={style.message}>{props.message}!</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={style.dialogs}>
			<div className={style.dialogItems}>
				<DialogItem  name="Dima" id="1"/>
				<DialogItem  name="Sasha" id="2"/>
				<DialogItem  name="Lera" id="3"/>
				<DialogItem  name="Povch" id="4"/>
				<DialogItem  name="Jan" id="5"/>
				<DialogItem  name="Lyova" id="6"/>
			</div>
			<div className={style.messages}>
				<Message message="Hi"/>
				<Message message="How is your day?"/>
				<Message message="Yo, man!"/>
			</div>
		</div>
	)
}

export default Dialogs
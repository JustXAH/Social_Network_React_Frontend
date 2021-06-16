import style from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

	let dialogs = [
		{id: 1, name: 'Dima'},
		{id: 2, name: 'Sasha'},
		{id: 3, name: 'Lera'},
		{id: 4, name: 'Povch'},
		{id: 5, name: 'Jan'},
		{id: 6, name: 'Lyovaz'},
	]

	let messages = [
		{id: 1, message: "Hi!"},
		{id: 2, message: "How is your day?"},
		{id: 3, message: "Yo, man!"},
		{id: 4, message: "Fine. And you?"},
	]

	let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let messagesElements = messages.map(m => <Message message={m.message}/>);

	return (
		<div className={style.dialogs}>
			<div className={style.dialogItems}>
				{dialogsElements}
			</div>
			<div className={style.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs
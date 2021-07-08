import style from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
	let newMessageBody = props.dialogsPage.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

	return (
		<div className={style.dialogs}>
			<div className={style.dialogItems}>
				{dialogsElements}
			</div>
			<div className={style.messages}>
				<div>{messagesElements}</div>
				<div>
					<div><textarea value={newMessageBody}
					               onChange={onNewMessageChange}
					               placeholder='Enter your message'/>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
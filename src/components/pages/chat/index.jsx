import React from 'react';
import DialogList from './dialogs/DialogList';
import MessageList from './messages/MessageList';

const messages = [{
	sender: 'Egorka',
	message: 'eee rock',
	time: '17:20',
	isReceived: false,
},
{
	sender: 'Deniska',
	message: 'eee rock',
	time: '17:21',
	isReceived: true,
},
{
	sender: 'Egorka',
	message: 'piska',
	time: '17:22',
	isReceived: false,
}];

const dialogs = [{}];

export default class ChatContainer extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="page">
				<div className="main_container">
					<div className="chat_list_container">
						<DialogList dialogs={dialogs} />
					</div>

					<div className="message_list_container">
						<MessageList messages={messages} />
					</div>
				</div>
			</div>
		);
	}
}


import React from 'react';
import LeftMenu from './leftMenu/LeftMenu';
import Chat from './messages/Chat';

const messages = () => [{
	name: 'Deniska',
	messages: [{
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
	},
	{
		sender: 'Deniska',
		message: 'are you kidding me??',
		time: '17:23',
		isReceived: true,
	},
	{
		sender: 'Egorka',
		message: 'no. sry, man. it"s my dog',
		time: '17:24',
		isReceived: false,
	},
	{
		sender: 'Deniska',
		message: 'ok, no problems (<3)',
		time: '18:55',
		isReceived: true,
	}],
}, {
	name: 'Anton',
	messages: [{
		sender: 'Egorka',
		message: 'eee rock',
		time: '17:20',
		isReceived: false,
	},
	{
		sender: 'Anton',
		message: 'hello',
		time: '18:59',
		isReceived: true,
	},

	{
		sender: 'Egorka',
		message: 'Hi',
		time: '09:01',
		isReceived: false,
	},
	],
}];

const getDialogs = () => [{ name: 'Deniska' }, { name: 'Anton' }];
const getMessagesById = name => (messages().find(item => item.name === name) || { messages: [], name });

export default class ChatContainer extends React.Component {
	constructor(props) {
		super(props);

		this.selectDialog = this.selectDialog.bind(this);

		this.state = {
			dialogs: {},
			currentDialogId: null,
			currentMessages: [],
		};
	}

	componentWillMount() {
		this.setState({ dialogs: getDialogs() });
	}

	selectDialog(event) {
		const userName = event.target.id;
		const messageObj = getMessagesById(userName);
		this.setState({ currentDialogId: userName, currentMessages: messageObj.messages });
	}

	render() {
		return (
			<div className="page">
				<div className="ui">
					<LeftMenu dialogs={this.state.dialogs} selectDialog={this.selectDialog} />
					<Chat messages={this.state.currentMessages} user={this.state.currentDialogId} />
				</div>
			</div>
		);
	}
}


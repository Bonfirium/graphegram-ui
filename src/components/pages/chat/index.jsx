import React from 'react';
import LeftMenu from './leftMenu/LeftMenu';
import Chat from './messages/Chat';

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
}];

const dialogs = [{ name: 'Deniska' },{ name: 'Anton' }];

export default class ChatContainer extends React.Component {
	render() {
		return (
			<div className="page">
				<div className="ui">
					<LeftMenu dialogs={dialogs} />
					<Chat messages={messages} user="Deniska" />
				</div>
			</div>
		);
	}
}


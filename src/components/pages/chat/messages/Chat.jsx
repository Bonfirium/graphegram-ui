import React from 'react';
import MessageList from './MessageList';
import WriteForm from './WriteForm';
import ChatHeader from './ChatHeader';

export default class Chat extends React.Component {
	render() {
		return (
			<div className="chat">
				<ChatHeader user={this.props.user} />
				<MessageList messages={this.props.messages} />
				<WriteForm />
			</div>
		);
	}
}

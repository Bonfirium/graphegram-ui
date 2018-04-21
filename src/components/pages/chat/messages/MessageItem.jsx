import React from 'react';

export default class MessageItem extends React.Component {
	render() {
		// TODO message css
		// TODO isOwnMessage
		const {
			sender, message, time, isReceived,
		} = this.props.info;
		const messageCommonClass = `message_item_container ${isReceived ? 'darker' : ''}`;

		return (
			<div className={messageCommonClass}>
				<div className="message_name">{ sender }</div>
				<div className="message_avatar">{ sender[0] }</div>
				<p>{ message }</p>
				<span className="message_time-right">{ time }</span>
			</div>
		);
	}
}

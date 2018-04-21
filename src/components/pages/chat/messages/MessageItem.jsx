import React from 'react';

export default class MessageItem extends React.Component {
	render() {
		const {
			sender, message, time, isReceived,
		} = this.props.info;

		return (
			<div className={`message_item_container ${isReceived ? 'message_item_darker' : ''}`}>
				<div className="message_name">{ sender }</div>
				<div className={`message_avatar ${isReceived ? 'send_msg' : 'recv_msg'}`}>{ sender[0] }</div>
				<p>{ message }</p>
				<span
					className={`${isReceived ? 'message_item_time-right ' : 'message_item_time-left '}`}
				>{ time }
				</span>
			</div>
		);
	}
}

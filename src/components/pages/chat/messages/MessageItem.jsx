import React from 'react';

export default class MessageItem extends React.Component {
	render() {
		const {
			sender, message, time, isReceived,
		} = this.props.info;
		const messageCommonClass = isReceived ? 'friend-with-a-SVAGina' : 'i';

		return (
			<li className={messageCommonClass}>
				<div className="head">
					<span className="time">{ time }</span>
					<span className="name">{ sender }</span>
				</div>
				<div className="message">{ message }</div>
			</li>
		);
	}
}

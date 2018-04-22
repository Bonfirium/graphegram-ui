import React from 'react';

export default class WriteForm extends React.Component {
	render() {
		return (
			<div className="write-form">
				<textarea placeholder="Type your message" name="e" id="texxt" rows="2" />
				<i className="fa fa-picture-o" />
				<i className="fa fa-file-o" />
				<span className="send">Send</span>
			</div>
		);
	}
}

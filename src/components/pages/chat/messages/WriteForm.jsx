import React from 'react';

export default class WriteForm extends React.Component {
	constructor(props) {
		super(props);

		this.sendClick = this.sendClick.bind(this);
		this.sendEnterUp = this.sendEnterUp.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			message: '',
		};
	}

	onChange(e) {
		this.setState({ message: e.target.value });
	}

	afterSend() {
		this.setState({ message: '' });
		this.nameInput.focus();
	}

	sendClick(e) {
		if (this.state.message.length !== 0) {
			this.props.sendMessage(this.state.message);
			this.afterSend();
		}
	}

	sendEnterUp(e) {
		if (e.key === 'Enter' && this.state.message.length !== 0) {
			this.props.sendMessage(this.state.message);
			this.afterSend();
		}
	}

	render() {
		return (
			<div className="write-form">
				<textarea
					ref={(input) => { this.nameInput = input; }}
					placeholder="Type message..."
					id="texxt"
					rows="2"
					onChange={this.onChange}
					onKeyUp={this.sendEnterUp}
					value={this.state.message}
				/>
				<i className="fa fa-picture-o" />
				<i className="fa fa-file-o" />
				<span className="send" onClick={this.sendClick}>Send</span>
			</div>
		);
	}
}

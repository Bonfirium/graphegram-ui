import React from 'react';

export default class ChatContainer extends React.Component {
	render() {
		return (
		  <div className="dialog_item">
			  {this.props.user}
		  </div>
		);
	}
}

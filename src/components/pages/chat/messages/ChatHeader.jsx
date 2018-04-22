import React from 'react';

export default class ChatHeader extends React.Component {
	render() {
		return (
			<div className="top">
				<div className="info">
					<div className="name">{ this.props.user }</div>
				</div>
				<i className="fa fa-star" />
			</div>
		);
	}
}

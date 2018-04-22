import React from 'react';

export default class MenuUserItem extends React.Component {
	render() {
		return (
			<li>
				<div className="info">
					<div className="user">{this.props.info.name}</div>
				</div>
			</li>
		);
	}
}

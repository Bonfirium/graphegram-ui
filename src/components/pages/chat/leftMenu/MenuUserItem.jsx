import React from 'react';

export default class MenuUserItem extends React.Component {
	render() {
		const { name } = this.props.info;
		return (
			<li>
				<div className="info">
					<div className="user"onClick={this.props.selectDialog} id={name}>{ name }</div>
				</div>
			</li>
		);
	}
}

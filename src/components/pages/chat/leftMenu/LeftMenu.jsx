import React from 'react';
import MenuUserItem from './MenuUserItem';

export default class LeftMenu extends React.Component {
	_renderList(items, handler) {
		return (items.map((item, index) => <MenuUserItem  key={index} info={item} selectDialog = {handler}/>));
	}

	render() {
		return (
			<div className="left-menu">
				<menu className="list-friends">
					{ this._renderList(this.props.dialogs, this.props.selectDialog) }
				</menu>
			</div>
		);
	}
}

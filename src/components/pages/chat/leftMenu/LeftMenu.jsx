import React from 'react';
import MenuUserItem from './MenuUserItem';
import { Element } from 'react-scroll';

export default class LeftMenu extends React.Component {
	_renderList(items) {
		return (items.map((item, index) => <MenuUserItem info={item} />));
	}

	render() {
		return (
			<div className="left-menu">
				<Element style={{
				  height: '100%',
				  width: '100%',
				  overflow: 'scroll',
			  }}
				>
					<menu className="list-friends">

						{ this._renderList(this.props.dialogs) }
					</menu>

				</Element>
			</div>

		);
	}
}

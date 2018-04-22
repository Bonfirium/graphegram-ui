import React from 'react';
import MessageItem from './MessageItem';
import { Element } from 'react-scroll';

export default class Chat extends React.Component {
	_renderList(items) {
		return (<div>{ items.map((item, index) => <MessageItem info={item} />) }</div>);
	}

	render() {
		return (
			<div className="messages">
				<Element style={{
					height: '100%',
					overflow: 'scroll',
				}}
				>
					{ this._renderList(this.props.messages) }
				</Element>
			</div>
		);
	}
}

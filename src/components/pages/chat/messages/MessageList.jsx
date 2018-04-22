import React from 'react';
import MessageItem from './MessageItem';

export default class Chat extends React.Component {
	_renderList(items) {
		return (<div>{ items.map((item, index) => <MessageItem info={item} />) }</div>);
	}

	render() {
		return (
			<div className="messages">
				{ this._renderList(this.props.messages) }
			</div>
		);
	}
}

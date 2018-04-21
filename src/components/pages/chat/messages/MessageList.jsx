import React from 'react';
import MessageItem from './MessageItem';

export default class ChatContainer extends React.Component {
	_renderList(items) {
		return (<div>
			{
				items.map((item, index) => <MessageItem info={item} />)
			}
		</div>);
	}

	render() {
		return (
			<div className="message_main_container">
				<div className="message_list_wrap">
					{ this._renderList(this.props.messages) }
				</div>
			</div>
		);
	}
}

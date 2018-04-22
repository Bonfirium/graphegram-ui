import React from 'react';
import MessageItem from './MessageItem';
import { Element, animateScroll } from 'react-scroll';

export default class Chat extends React.Component {
	componentDidUpdate() {
		animateScroll.scrollToBottom({
			containerId: 'message_container_scroll',
		});
	}

	_renderList(items) {
		return (<div>{ items.map((item, index) => <MessageItem key={ index } info={ item }/>) }</div>);
	}

	render() {
		return (
		  <div className="messages">
			  <Element id="message_container_scroll" style={ {
				  height: '100%',
				  width: '100%',
				  overflow: 'auto'
			  } }
			  >
				  { this._renderList(this.props.messages) }
			  </Element>
		  </div>
		);
	}
}

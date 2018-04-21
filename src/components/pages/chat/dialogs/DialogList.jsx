import React from 'react';
import DialogItem from './DialogItem';

export default class ChatContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	_renderList(items) {
		return (<ul>
			{
				items.map((item, index) => <DialogItem user={ item.user}/>)
			}
		</ul>);
	}

	render() {
		return (
		  <div className="dialog_main_container">
			  <div className="dialog_list_wrap">
				  { this._renderList(this.props.dialogs) }
			  </div>
		  </div>
		);
	}
}

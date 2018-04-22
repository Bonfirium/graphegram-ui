import React from 'react';
import PropTypes from 'prop-types';

class UserName extends React.PureComponent {
	static get propTypes() {
		return {
			name: PropTypes.string.isRequired,
			online: PropTypes.bool,
		};
	}

	static get defaultProps() {
		return {
			online: false,
		};
	}

	render() {
		return (
			<span className={`status ${this.props.online ? 'on' : 'off'}`}>{this.props.name}</span>
		);
	}
}
export default UserName;

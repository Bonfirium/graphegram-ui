import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
	constructor(props){
		super(props);
		this.state = {focused: false};
	}
	static get propTypes() {
		return {
			className: PropTypes.string,
			autoComplete: PropTypes.string,
			label: PropTypes.string,
			name: PropTypes.string,
			type: PropTypes.string,
			id: PropTypes.string,
		};
	}

	static get defaultProps() {
		return {
			className: '',
			autoComplete: 'off',
			label: '',
			name: '',
			type: 'text',
			id: '',
		};
	}

	render() {
		return (
			<div className={`md-input-group md-input-animated${this.state.focused ? ' md-input-focused md-input-has-value' : ''}`}>
				<label className="md-input-label">{this.props.label}</label>   {/* todo add for */}
				<input
					type={this.props.type}
					id={this.props.id}
					autoComplete={this.props.autoComplete}
					className={`md-input ${this.props.className}`}
					name={this.props.name}
					onFocus={() => this.setState({focused: true})}
					onBlur={() => this.setState({focused: false})}
					value={this.props.value}
				/>
			</div>
		);
	}
}
export default Input;

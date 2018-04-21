import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
	componentWillMount() {
		this.setState({
			focused: false,
		});
	}

	static get propTypes() {
		return {
			className: PropTypes.string,
			autoComplete: PropTypes.string,
			label: PropTypes.string,
			name: PropTypes.string,
			type: PropTypes.string,
			id: PropTypes.string,
			defaultValue: PropTypes.string,
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
			defaultValue: '',
		};
	}

	render() {
		let className = 'md-input-group md-input-animated';
		if (this.state.focused) className += ' md-input-focused';
		if (this.value) className += ' md-input-has-value';
		return (
			<div className={className}>
				<label htmlFor={this.props.id} className="md-input-label">{this.props.label}</label>
				<input
					type={this.props.type}
					id={this.props.id}
					autoComplete={this.props.autoComplete}
					className={`md-input ${this.props.className}`}
					name={this.props.name}
					onFocus={() => { this.setState({ focused: true }); }}
					onBlur={() => { this.setState({ focused: false }); }}
					defaultValue={this.props.defaultValue}
					onChange={this.props.onChange}
				/>
			</div>
		);
	}
}
export default Input;

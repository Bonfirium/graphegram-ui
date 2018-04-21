import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
	componentWillMount() {
		this.getValue = () => (this.node ? this.node.value : null);
		this.validate = (value, needToSetState = false) => {
			const error = this.props.validation(value);
			if (needToSetState) { this.setState({ error }); }
			this.isValid = !error;
			return error;
		};
		this.validate(this.props.defaultValue);
		this.setState({
			focused: false,
			hasValue: false,
			error: null,
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
			validation: PropTypes.func,
		};
	}

	static get defaultProps() {
		return {
			className: '',
			autoComplete: 'off',
			label: '',
			name: '',
			type: 'text',
			id: undefined,
			defaultValue: '',
			validation: () => null, //  should return string on error or null on success
		};
	}

	handleKeyDown(event) {
		const { target } = event;
		setTimeout(() => {
			this.setState({
				error: this.validate(target.value),
				hasValue: !!target.value.length,
			});
		}, 0);
	}

	render() {
		let className = 'md-input-group md-input-animated';
		if (this.state.focused) className += ' md-input-focused';
		if (this.state.hasValue) className += ' md-input-has-value';
		if (this.state.error) className += ' md-input-error';
		return (
			<div className={className}>
				<label htmlFor={this.props.id} className="md-input-label">{this.state.error ? this.state.error : this.props.label}</label>
				<input
					type={this.props.type}
					id={this.props.id}
					autoComplete={this.props.autoComplete}
					className={`md-input ${this.props.className}`}
					name={this.props.name}
					defaultValue={this.props.defaultValue}
					onFocus={() => { this.setState({ focused: true }); }}
					onBlur={() => { this.setState({ focused: false }); }}
					onKeyDown={(event) => { this.handleKeyDown(event); }}
					ref={(node) => {
						this.node = node;
					}}
				/>
			</div>
		);
	}
}
export default Input;

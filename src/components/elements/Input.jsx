import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
	componentWillMount() {
		this.validate({ value: this.props.defaultValue, needToSetState: true });

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
			required: PropTypes.bool,
		};
	}

	static get defaultProps() {
		return {
			className: '',
			autoComplete: 'off',
			label: '',
			name: undefined,
			type: 'text',
			id: undefined,
			defaultValue: '',
			required: false,
			validation: () => null, //  should return string on error or null on success
		};
	}

	get value() {
		return this.node ? this.node.value : null;
	}

	validate(params) {
		params = { ...{ value: this.value, needToSetState: false }, ...params };
		const error = this.props.validation(params.value);
		if (params.needToSetState) { this.setState({ error }); }
		this.isValid = !error;
		return error;
	}

	handleKeyDown() {
		setTimeout(() => {
			this.setState({
				error: this.validate({ value: this.value }),
				hasValue: !!this.value.length,
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
					required={this.props.required}
					className={`md-input ${this.props.className}`}
					name={this.props.name}
					defaultValue={this.props.defaultValue}
					onFocus={() => { this.setState({ focused: true }); }}
					onBlur={() => { this.setState({ focused: false }); }}
					onKeyDown={() => { this.handleKeyDown(); }}
					ref={(node) => {
						this.node = node;
					}}
				/>
			</div>
		);
	}
}
export default Input;

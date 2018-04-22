import React from 'react';
import Input from '../../elements/Input';
import { validateName, validatePassword } from '../../../helpers/auth';
import GrapheGramActions from '../../../actions/GrapheGramActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../../App';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		const validateParams = { needToSetState: true };
		if (this.name.validate(validateParams)
		  || this.password.validate(validateParams)
		) {
			e.preventDefault();
			return;
		}

		const name = this.name.value;
		const password = this.password.value;

		this.props.signIn(name, password);
	}

	render() {
		return (
			<div className="auth-page">
				<div className="auth-wrap">
					<form onSubmit={this.handleSubmit} action="/chat">
						<h3 className="auth-wrap-head">Sign in</h3>
						<p className="auth-wrap-lead">Please enter your login and password.</p>

						<div className="clearfix">

							<Input
								label="Golos nickname"
								ref={(node) => {
									this.name = node;
								}}
								validation={validateName}
							/>
							<Input
								label="Password"
								type="password"
								ref={(node) => {
									this.password = node;
								}}
								validation={validatePassword}
							/>
						</div>
						<button type="submit" className="auth-btn-submit"><span>Sign In</span></button>
					</form>
				</div>
			</div>
		);
	}
}


SignIn.propTypes = {
	signIn: PropTypes.func.isRequired,
};

App.defaultProps = {
	signIn: null,
};


export default connect(
	state => ({
	}),
	dispatch => ({
	  signIn: (name, privateKey) => dispatch(GrapheGramActions.signIn(name, privateKey)),
	}),
)(SignIn);

import React from 'react';
import Input from '../../elements/Input';
import { validateName, validatePassword } from '../../../helpers/auth';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.nodes = {};
	}

	submit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="auth-page">
				<div className="auth-wrap">
					<form>
						<h3 className="auth-wrap-head">Sign in</h3>
						<p className="auth-wrap-lead">Please enter your login and password.</p>

						<div className="clearfix">

							<Input
								label="Golos nickname"
								ref={(node) => {
									this.nodes.name = node;
								}}
								validation={validateName}
							/>
							<Input
								label="Password"
								type="password"
								ref={(node) => {
									this.nodes.password = node;
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

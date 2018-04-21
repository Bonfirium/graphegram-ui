import React from 'react';
import Input from '../../elements/Input';

export default class SignUp extends React.Component {
	render() {
		return (
			<div className="wrap">
				<form>
					<h3 className="login_form_head">Sign in</h3>
					<p className="login_form_lead">Please choose your country and enter your full phone number.</p>

					<div className="clearfix">
						<Input label="Golos name" />
						<Input label="Password" type="password" />
						<Input label="Confirm password" type="password" />
					</div>
				</form>
			</div>
		);
	}
}

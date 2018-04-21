import React from 'react';
import Input from '../../elements/Input';

export default class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.nodes = {};
	}

	handleClick() {
		console.log(this.nodes);
	}

	render() {
		return (
			<div className="wrap">
				<form>
					<h3 className="login_form_head">Sign in</h3>
					<p className="login_form_lead">Please choose your country and enter your full phone number.</p>

					<div className="clearfix">
						<Input
							label="Golos nickname"
							// type="te"
							ref={(node) => {
								this.nodes.name = node;
							}}
							validation={(name) => {
								if (!name || name.length < 3) { return 'Too short name'; }
								if (name.length > 16) { return 'Too long name'; }
								if ((name.match(/-/g) || []).length > 1) { return 'Name must have only one dash'; }
								if (/^\W/.test(name)) { return 'Name must start with a letter'; }
								if (/[^\d\w-]/.test(name)) { return 'Name must consist only of letters, numbers, or dash.'; }
								return null;
							}}
						/>
						<Input
							label="Password"
							type="password"
							ref={(node) => {
								this.nodes.password = node;
							}}
							validation={(password) => {
								if (this.nodes.confirmPassword) {
									this.nodes.confirmPassword.validate(this.nodes.confirmPassword.getValue(), true);
								}
								if (!password || password.length < 9) { return 'Too short password'; }
								if (/[^A-Za-z0-9!@#$%_-]/.test(password)) { return 'Password should only consists of: A-Za-z0-9!@#$%_-'; }
								return null;
							}}
						/>
						<Input
							label="Confirm password"
							type="password"
							ref={(node) => {
								this.nodes.confirmPassword = node;
							}}
							validation={(value) => {
								if (this.nodes.password === undefined) return null;
								const password = this.nodes.password.getValue();
								if (!password) return 'Empty password';
								if (value !== password) { return 'Passwords are different'; }
								return null;
							}}
						/>
						<input type="button" onClick={() => this.handleClick()} />
					</div>
				</form>
			</div>
		);
	}
}

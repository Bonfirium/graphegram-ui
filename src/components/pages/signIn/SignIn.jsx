import React from 'react';
import Input from '../../elements/Input';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			password: ''
		};

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	handleChangeName(event){
		this.setState({name: event.target.value});
	}

	handleChangePassword(event){
		this.setState({password: event.target.value});
	}

	submit(e) {
		e.preventDefault();
		console.log(this.state.name);
		console.log(this.state.password);
	}

	render() {
		return (
			<div className="login_page_wrap">
				<div className="login_form_wrap">

					<form name="mySendCodeForm">
						<h3 className="login_form_head" my-i18n="login_sign_in">Sign in</h3>
						<p className="login_form_lead" my-i18n="login_enter_number_description">Please enter your
						  login and
						  passoword.
						</p>

						<div className="login_phone_groups_wrap clearfix">

							<Input
								label="Name"
								onChange={this.handleChangeName}
							/>

							<Input
								label="Password"
								onChange={this.handleChangePassword}
							/>
						</div>


						<button className="login_head_submit_btn" onClick={this.submit.bind(this)}>Login</button>
					</form>


				</div>
			</div>
		);
	}
}

import React from 'react';
import SignInPassword from './SignInPassword';
import SignInName from './SignInName';

export default class App extends React.Component {
	render() {
		return (
			<div className="login_page_wrap">
				<div className="login_form_wrap">

					<form
						name="mySendCodeForm"
						ng-if="!credentials.phone_code_hash"
						ng-submit="sendCode()"
						className="ng-pristine ng-invalid ng-invalid-required"
					>
						<h3 className="login_form_head" my-i18n="login_sign_in">Sign in</h3>
						<p className="login_form_lead" my-i18n="login_enter_number_description">Please enter your
						  login and
						  passoword.
						</p>


						<div className="login_phone_groups_wrap clearfix">

							<SignInName />
							<SignInPassword />

						</div>
						<div
							className="login_form_messaging ng-hide"
							ng-show="progress.enabled"
							my-i18n="login_generating_keys_info"
						>
						  Keys are only generated once. This can take a few minutes on
						  slower devices, please be patient.


						</div>

						<button className="login_head_submit_btn">Login</button>
					</form>


				</div>
			</div>
		);
	}
}

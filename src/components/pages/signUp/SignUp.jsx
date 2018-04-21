import React from 'react';

export default class App extends React.Component {

	render() {
		return (
			<div className="auth-wrap">
				<form name="mySendCodeForm" className="ng-pristine ng-invalid ng-invalid-required">
					<h3 className="login_form_head">Sign in</h3>
					<p className="login_form_lead">Please choose your country and enter your full phone number.</p>

					<div className="md-input-group md-input-has-value login_phone_country_input_group" >
						<label className="md-input-label">Country</label>
						<div className="md-input">Belarus</div>
					</div>

					<div className="login_phone_groups_wrap clearfix">

						<div className="md-input-group login_phone_code_input_group md-input-has-value md-input-animated">
							<label className="md-input-label">Code</label>
							<input className="md-input ng-pristine ng-valid ng-not-empty ng-touched" name="phone_country" type="tel"/>
						</div>

						<div className="md-input-group login_phone_num_input_group md-input-animated">
							<label className="md-input-label" >Phone number</label>
							<input required="" className="md-input ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" name="phone_number" type="tel"/>
						</div>

					</div>
					<div className="login_form_messaging ng-hide" >Keys are only generated once. This can take a few minutes on slower devices, please be patient.</div>
				</form>
			</div>
		);
	}

}

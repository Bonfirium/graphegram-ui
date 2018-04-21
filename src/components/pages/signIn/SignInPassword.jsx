import React from 'react';

export default class SignInPassword extends React.Component {
	render() {
		return (

			<div
				className="md-input-group login_phone_num_input_group md-input-animated"
				ng-class="{'md-input-error': error.field == 'phone'}"
				my-labeled-input=""
				ng-switch="error.field == 'phone'"
			>
				<label ng-switch-default="" className="md-input-label" my-i18n="login_tel_input_placeholder">Password
				</label>
				<input
					required=""
					autoComplete="off"
					my-submit-on-enter=""
					className="md-input ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
					my-focus-on="country_selected"
					name="phone_number"
					type="tel"
					ng-model="credentials.phone_number"
				/>
			</div>

		);
	}
}

import React from 'react';

export default class SignInName extends React.Component {
	render() {
		return (

			<div
				className="md-input-group login_phone_code_input_group md-input-has-value md-input-animated"
				ng-class="{'md-input-error': error.field == 'phone'}"
				my-labeled-input=""
			>
				<label className="md-input-label" my-i18n="login_code_input_placeholder">Name</label>
				<input
					autoComplete="off"
					className="md-input ng-pristine ng-valid ng-not-empty ng-touched"
					my-focused=""
					name="phone_country"
					type="tel"
					ng-model="credentials.phone_country"
				/>
			</div>

		);
	}
}

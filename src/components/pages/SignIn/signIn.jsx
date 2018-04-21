import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SomeActions from '../../../actions/SignInAction';

class SignIn extends React.Component {
	render() {
		console.log('koko');

		return (
		  <div>
			  <Heading>Your Phone</Heading>
			  <p>
				  Please confirm your country code and enter your phone number.
			  </p>
			  <RowFormGroup>
				  <input
					onChange={ change }
					name="phoneCode"
					className={ `${s.phoneCode} col-xs-2 form-control form-control-lg` }
					value={ phoneCode } type="tel"/>
				  <input
					onChange={ change }
					name="phoneNumber"
					className="col-xs-10 form-control form-control-lg"
					placeholder="--- --- -- --" type="tel"/>
			  </RowFormGroup>
			  { error && <div>Error type: { error.message }</div> }
			  <Button onClick={ nextStep } primary>Next</Button>
		  </div>
		);
	}
}

SignIn.propTypes = {
	someField: PropTypes.number.isRequired,
	setSomeField: PropTypes.func.isRequired,
};

export default connect(
  state => ({
	  someField: state.some.someField,
  }),
  dispatch => ({
	  setSomeField: maxNumber => dispatch(SomeActions.setSomeField(maxNumber)),
  }),
)(SignIn);

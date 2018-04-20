import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SomeActions from '../../../actions/SomeActions';

class SomePage extends React.Component {
	render() {
		return (
			<div>
				<h1 className="someClassName">Some content</h1>
				<div>Some field: {this.props.someField}</div>
				<button onClick={() => this.props.setSomeField(123)}>Change someField</button>
			</div>
		);
	}
}

SomePage.propTypes = {
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
)(SomePage);

import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import React from 'react';

class Header extends React.PureComponent {
	render() {
		return (
			<header>
				<NavLink to="/" exact activeClassName="active">
					Index Link
				</NavLink>
				<NavLink to="/sign-up" exact activeClassName="active">
					Sign Up
				</NavLink>
			</header>
		);
	}
}

export default compose(
	// withRouter,
	connect(
		state => ({}),
		dispatch => ({}),
	),
)(Header);


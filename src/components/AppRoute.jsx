import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from './App';

const AppRoute = ({
	component, authChecked, isAuth, ...rest
}) => (
	<Route
		{...rest}
		render={(props) => {
			if (!authChecked) {
				return null;
			}
			if (!isAuth) {
				return <Redirect to="/sign-in" />;
			}
			return React.createElement(App, {
				...props,
			}, React.createElement(component, props));
		}}
	/>
);

AppRoute.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	authChecked: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

export default connect(state => ({
	isAuth: true,
	authChecked: true,
}))(AppRoute);

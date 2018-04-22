import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from './App';

const AppRoute = ({
	 isAuth, ...rest, component
}) => (
	<Route
		{...rest}
		render={(props) => {
			console.log(isAuth);
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
	isAuth: PropTypes.string,
};

export default connect(state => ({
	isAuth: state.isAuth,
}))(AppRoute);

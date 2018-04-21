import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import SomePage from './components/pages/some/SomePage';
import AppRoute from './components/AppRoute';
import SignInPage from './components/pages/SignIn/signIn';

export default class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={() => <Redirect to="/some" />} />
				<AppRoute exact path="/sign-in" component={SignInPage} />
				<AppRoute exact path="/some" component={SomePage} />
			</Switch>
		);
	}
}

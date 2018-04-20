import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import SomePage from './components/pages/some/SomePage';
import AppRoute from './components/AppRoute';

export default class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={() => <Redirect to="/some" />} />
				<AppRoute exact path="/some" component={SomePage} />
			</Switch>
		);
	}
}

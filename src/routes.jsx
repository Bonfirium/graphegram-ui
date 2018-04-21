import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AppRoute from './components/AppRoute';
import SignUp from './components/pages/signUp/SignUp';
import Home from './components/pages/home/Home';

export default class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<AppRoute exact path="/" component={Home}/>
				<Route exact path="/sign-up" component={SignUp} />
			</Switch>
		);
	}
}

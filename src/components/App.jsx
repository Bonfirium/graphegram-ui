import React from 'react';
import PropTypes from 'prop-types';

import Footer from './layout/Footer';
import Header from './layout/Header';

export default class App extends React.Component {

	render() {
		return (
			<div className="global-wrap">
				<main className="inner">
					<Header />
					{this.props.children}
				</main>
				<Footer />
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.element.isRequired,
};

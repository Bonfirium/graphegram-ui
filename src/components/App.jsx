import React from 'react';
import PropTypes from 'prop-types';

import Footer from './layout/Footer';
import Header from './layout/Header';

export default class App extends React.Component {

	render() {
		return (
			<div className="global-wrap">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.element,
};

App.defaultProps = { children: null };

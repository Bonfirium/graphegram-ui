import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.PureComponent {

	static get propTypes() {
		return {};
	}

	static get defaultProps() {
		return {};
	}

	render() {
		return (
			<form action="#" className="md-search">
				<input placeholder="search..." type="search" />
				<input type="submit" value="&#xf002;" />
			</form>
		);
	}
}
export default Search;

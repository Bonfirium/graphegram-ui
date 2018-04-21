import React from 'react';
import ImgGolos from '../../assets/images/golos.png';

class MainFooter extends React.PureComponent {
	render() {
		const currentYear = new Date().getFullYear();
		return (
			<footer>
				<div>
					<img height={16} src={ImgGolos} alt="" />
					{currentYear} Graphigram
				</div>
			</footer>
		);
	}
}

export default MainFooter;
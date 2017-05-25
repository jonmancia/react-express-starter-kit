import React from 'react';

class Header extends React.Component {
	render() {
		return(
		<div className="header">
			<div id="title">
				<h1 id="title-text">Armando Automotive</h1>
			</div>
			<div id="subheading">
				<h4 id="subheading-text">Dallas, TX</h4>
			</div>
		</div>
		)
		}
};

export default Header;
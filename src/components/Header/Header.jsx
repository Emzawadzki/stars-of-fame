import React from "react";

import Container from "../common/Container";

const Header = () => {
	return (
		<header className="header">
			<Container>
				<h1 className="header__brand">
					Stars<span className="header__distinction">Of</span>Fame
				</h1>
			</Container>
		</header>
	);
};

export default Header;

import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Container } from "./container";
import { Footer } from "./footer";

export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Container />
			<Footer />
		</div>
	);
}

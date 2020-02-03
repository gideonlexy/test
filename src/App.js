import React, { Component } from 'react';
import Card from './components/card/card.component';

import './App.css';

const App = () => (
	<div>
		<nav className="nav">
			<h2 className="wrapper">InnRoad</h2>
		</nav>
		<div className="wrapper">
			<Card />
		</div>
	</div>
);

export default App;

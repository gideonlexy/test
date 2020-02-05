import React, { Component } from 'react';
import './card.styles.css';

class Card extends Component {
	state = {
		comments: [],
		headings: [
			'Small Features',
			'Booking Engine',
			'Rates',
			'CC Gateway',
			'CRM/Email Marketing'
		]
	};

	render() {
		const { headings } = this.state;
		const { comments } = this.props;

		return (
			<div>
				<div className="heading">
					{headings.map((heading, index) => (
						<h3 key={index}>{heading}</h3>
					))}
				</div>
				<div className="App">
					<div className="main">
						{comments.map(({ id, name, body }) => (
							<div key={id} className="card">
								<h3>{name}</h3>
								{body}
							</div>
						))}
					</div>
					<div className="aside">
						{comments.slice(0, 2).map((element, index) => (
							<div key={index} className="card">
								<h3>{element.name}</h3>
								{element.body}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default Card;

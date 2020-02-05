import React, { Component } from 'react';
import Card from './components/card/card.component';

import './App.css';

import { connect } from 'react-redux';
import fetchCommentsAction from './redux/actions/fetchComments';
import {
	getFetchCommentsPending,
	getCommentsFailed,
	getComments
} from './redux/reducer/reducer';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
	componentDidMount() {
		const { fetchComments } = this.props;
		fetchComments();
	}

	render() {
		const { comments, pending, error } = this.props;
		return (
			<div>
				<nav className="nav">
					<h2 className="wrapper">InnRoad</h2>
				</nav>
				<div className="wrapper">
					{pending ? (
						<div className="loader">
							<Loader type="Circles" color={'#123abc'} timeout={10000} />>
						</div>
					) : null}

					<Card comments={comments} />
					{error ? <div className="error">Error retrieving data...</div> : null}
				</div>
			</div>
		);
	}
}

const maStateToProps = state => {
	return {
		pending: getFetchCommentsPending(state),
		comments: getComments(state),
		error: getCommentsFailed(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchComments: () => dispatch(fetchCommentsAction())
	};
};

export default connect(maStateToProps, mapDispatchToProps)(App);

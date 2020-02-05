import axios from 'axios';
import * as actionCreators from '../actions/actionCreators';

const fetchComments = () => async dispatch => {
	dispatch(actionCreators.fetchCommentsPending());

	try {
		const res = await axios.get(
			'https://jsonplaceholder.typicode.com/comments?_limit=15'
		);

		const comments = res.data;

		dispatch(actionCreators.fetchCommentsSucceeded(comments));
	} catch (error) {
		dispatch(actionCreators.fetchCommentsFailed(error));
	}
};
export default fetchComments;

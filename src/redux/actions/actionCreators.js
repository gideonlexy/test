import * as actionTypes from './actions';

export const fetchCommentsPending = () => {
	return {
		type: actionTypes.FETCH_COMMENTS_PENDING
	};
};
export const fetchCommentsSucceeded = comments => {
	return {
		type: actionTypes.FETCH_COMMENTS_SUCCEEDED,
		payload: comments
	};
};

export const fetchCommentsFailed = error => {
	return {
		type: actionTypes.FETCH_COMMENTS_FAILED,
		payload: error
	};
};

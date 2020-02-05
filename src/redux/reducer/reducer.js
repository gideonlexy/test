import * as actionTypes from '../actions/actions';

//Initial Redux state
export const initialState = {
	pending: false,
	comments: [],
	error: null
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_COMMENTS_PENDING:
			return {
				...state,
				pending: true
			};
		case actionTypes.FETCH_COMMENTS_SUCCEEDED:
			return {
				...state,
				comments: action.payload,
				pending: false
			};
		case actionTypes.FETCH_COMMENTS_FAILED:
			return {
				...state,
				error: action.payload,
				pending: false
			};
		default:
			return state;
	}
};

//We create selectors for storing the initial state
export const getFetchCommentsPending = state => state.pending;
export const getComments = state => state.comments;
export const getCommentsFailed = state => state.error;

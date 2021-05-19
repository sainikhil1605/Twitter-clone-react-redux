import {
	ADD_TWEET,
	RECIEVE_TWEETS,
	TOGGLE_TWEET,
} from "../actions/tweetAction";

const tweetReducer = (state = {}, action) => {
	switch (action.type) {
		case RECIEVE_TWEETS:
			return {
				...state,
				...action.tweets,
			};

		case ADD_TWEET:
			const { tweet } = action;

			let replyingTo = {};
			if (tweet.replyingTo !== null) {
				replyingTo = {
					[tweet.replyingTo]: {
						...state[tweet.replyingTo],
						replies: state[tweet.replyingTo].replies.concat([
							tweet.id,
						]),
					},
				};
			}

			return {
				...state,
				[action.tweet.id]: action.tweet,
				...replyingTo,
			};
		case TOGGLE_TWEET:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					likes:
						action.hasLiked === true
							? state[action.id].likes.filter(
									(uid) => uid !== action.authReducer
							  ) //if has liked, remove it (dislike it)
							: state[action.id].likes.concat([
									action.authReducer,
							  ]),
				},
			};
		default:
			return state;
	}
};
export default tweetReducer;

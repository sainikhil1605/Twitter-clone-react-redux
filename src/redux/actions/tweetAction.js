import { saveLikeToggle, saveTweet } from "../../assets/api";

export const ADD_TWEET = "ADD_TWEET";
export const RECIEVE_TWEETS = "RECIEVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const addTweet = (tweet) => {
	return {
		type: ADD_TWEET,
		tweet: tweet,
	};
};
export const recieveTweets = (tweets) => {
	console.log("from action" + tweets);
	return {
		type: RECIEVE_TWEETS,
		tweets,
	};
};
export function handleAddTweet(text, replyingTo) {
	//using getState to get the current state of our store
	return (dispatch, getState) => {
		const { authReducer } = getState();
		console.log(authReducer);
		return saveTweet({
			text,
			author: authReducer,
			replyingTo,
		}).then((tweet) => dispatch(addTweet(tweet)));
	};
}

//functions for toggling tweet likes
function toggleTweet({ id, authReducer, hasLiked }) {
	console.log(id, authReducer, hasLiked);
	return {
		type: TOGGLE_TWEET,
		id,
		authReducer,
		hasLiked,
	};
}
//assynchronous action creator (which is exported)
export function handleToggleTweet(info) {
	return (dispatch) => {
		console.log("Hi");
		//using optimistic updates here, so first we toggle the tweet and then update the backend (server)
		dispatch(toggleTweet(info));

		//now update inside server and watch for possible errors
		return saveLikeToggle(info).catch((e) => {
			console.warn("Error in handleToggleTweet ", e);
			dispatch(toggleTweet(info)); //resetting back to what it was initially
			alert("There was an error liking the tweet. Try again!");
		});
	};
}

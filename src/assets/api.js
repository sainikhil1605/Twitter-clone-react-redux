import { _getUsers, _getTweets, _saveTweet, _saveLikeToggle } from "./DATA.js";

export function getInitialData() {
	return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
		users,
		tweets,
	}));
}
export function saveLikeToggle(info) {
	return _saveLikeToggle(info);
}

export function saveTweet(info) {
	return _saveTweet(info);
}

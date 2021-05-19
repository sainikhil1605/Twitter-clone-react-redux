import { hideLoading, showLoading } from "react-redux-loading";
import { getInitialData } from "../../assets/api";
import { setAuthedUser } from "./authUserAction";
import { recieveTweets } from "./tweetAction";
import { recieveUsers } from "./usersAction";
export function handler() {
	console.log("hi");
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, tweets }) => {
			dispatch(recieveUsers(users));
			dispatch(recieveTweets(tweets));
			dispatch(setAuthedUser("robert_downey_jr"));
			dispatch(hideLoading());
		});
	};
}

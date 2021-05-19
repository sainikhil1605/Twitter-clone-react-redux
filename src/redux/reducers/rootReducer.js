import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
	tweetReducer,
	userReducer,
	authReducer,
	loadingBar: loadingBarReducer,
});

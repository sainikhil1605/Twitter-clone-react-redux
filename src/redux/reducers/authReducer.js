import { SET_AUTHED_USER } from "../actions/authUserAction";

export default function authReducer(state = null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;

		default:
			return state;
	}
}

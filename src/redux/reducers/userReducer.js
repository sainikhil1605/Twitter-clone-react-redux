import { RECIEVE_USERS } from "../actions/usersAction";

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case RECIEVE_USERS:
			return {
				...state,
				...action.users,
			};
		default:
			return state;
	}
};
export default userReducer;

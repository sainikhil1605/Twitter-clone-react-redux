import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);

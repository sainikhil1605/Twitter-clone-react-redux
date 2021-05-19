import React, { Component } from "react";
import { handler } from "../redux/actions/mixedAction";
class UserContainer extends Component {
	render() {
		return <div>Hi{console.log(this.props.tweetIds)}</div>;
	}
	mapStateToProps({ tweets }) {
		return {
			tweetsIds: tweets,
		};
	}
}

export default UserContainer;

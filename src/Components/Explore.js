import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class Explore extends Component {
	render() {
		console.log(this.props);
		return (
			<div style={{ backgroundColor: "black" }}>
				<h3 className="center">Your Timeline</h3>
				<ul>
					{this.props.tweetsIds.map((id) => {
						return (
							<li>
								<Tweet id={id} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		users: state.userReducer,
		tweetsIds: Object.keys(state.tweetReducer).sort(
			(a, b) =>
				state.tweetReducer[b].timestamp -
				state.tweetReducer[a].timestamp
		),
	};
}

export default connect(mapStateToProps)(Explore);

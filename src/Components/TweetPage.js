import React, { Component } from "react";
import { connect } from "react-redux";

import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import Nav from "./Nav";

class TweetPage extends Component {
	render() {
		const { id, replies } = this.props;

		return (
			<div
				style={{
					backgroundColor: "black",
					minHeight: "100vh",
				}}
			>
				<Nav />
				<Tweet id={id} />
				{/* passing the parent tweet id */}
				<NewTweet id={id} />

				{replies.length !== 0 && <h3 className="center">Replies</h3>}
				<ul>
					{replies.map((replyId) => (
						<li key={replyId}>
							<Tweet id={replyId} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ authReducer, tweetReducer, userReducer }, props) {
	const { id } = props.match.params;

	return {
		id,
		replies: !tweetReducer[id]
			? [] //if oesn't exist a tweet with this id, the reply will be an empty array
			: tweetReducer[id].replies.sort(
					(a, b) =>
						tweetReducer[b].timestamp - tweetReducer[a].timestamp
			  ),
	};
}

export default connect(mapStateToProps)(TweetPage);

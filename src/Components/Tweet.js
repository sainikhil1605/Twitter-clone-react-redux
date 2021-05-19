import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate, formatTweet } from "../assets/helpers";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

import { Link } from "react-router-dom";
import { handleToggleTweet } from "../redux/actions/tweetAction";
import { FaCommentsDollar } from "react-icons/fa";
class Tweet extends Component {
	toParent = (e, id) => {
		e.preventDefault();
		//todo: redirect to parent tweet
		this.props.history.push(`/tweet/${id}`);
	};

	handleLike = (e) => {
		e.preventDefault();

		const { authReducer, dispatch, tweet } = this.props;
		// console.log(this.props);
		// console.log(authReducer);
		// console.log(tweet);
		// console.log(dispatch);
		console.log("insde handlelike");
		console.log(authReducer);
		dispatch(
			handleToggleTweet({
				id: tweet.id,
				authReducer,
				hasLiked: tweet.hasLiked,
			})
		);
	};

	render() {
		console.log("Inside tweet");
		console.log(this.props);
		const { tweet } = this.props;

		if (tweet === null) {
			return <p>This tweet doesn't exist</p>;
		}

		const {
			name,
			avatar,
			timestamp,
			text,
			hasLiked,
			likes,
			replies,
			id,
			parent,
		} = tweet;
		console.log("has Liked");
		console.log(hasLiked);
		return (
			<div className="tweet">
				<img
					src={avatar}
					alt={`Avatar of ${name}`}
					className="avatar"
				/>

				<div className="tweet-info">
					<div style={{ textAlign: "left" }}>
						<Link
							style={{ color: "white" }}
							to={`/profile/${this.props.tweets}`}
						>
							<span>{name}</span>
						</Link>
						<div>{formatDate(timestamp)} </div>
						{parent && (
							<button
								className="replying-to"
								onClick={(e) => this.toParent(e, parent.id)}
							>
								Replying to @{parent.author}
							</button>
						)}
						<Link to={`/tweet/${id}`}>
							<p style={{ color: "white" }}>{text}</p>

							<div className="tweet-icons">
								<TiArrowBackOutline className="tweet-icon" />
								{/* show number only if it's not zero */}
								<span>{replies !== 0 && replies} </span>
								<button
									className="heart-button"
									onClick={this.handleLike}
								>
									{hasLiked === true ? (
										<TiHeartFullOutline
											color="#e0245e"
											className="tweet-icon"
										/>
									) : (
										<TiHeartOutline className="tweet-icon" />
									)}
								</button>
								<span>{likes !== 0 && likes} </span>
							</div>
						</Link>
					</div>
				</div>
			</div>
			// </Link>
		);
	}
}
function mapStateToProps({ authReducer, userReducer, tweetReducer }, { id }) {
	const tweet = tweetReducer[id]; //getting the specific tweet by its id
	const parentTweet = tweet ? tweetReducer[tweet.replyingTo] : null; //check if the specific tweet is a reply to another one. If so, get information about that parent tweet
	return {
		authReducer,
		tweet: tweet
			? formatTweet(
					tweet,
					userReducer[tweet.author],
					authReducer,
					parentTweet
			  )
			: null,
		tweets: tweetReducer[id].author,
	};
}
export default connect(mapStateToProps)(Tweet);

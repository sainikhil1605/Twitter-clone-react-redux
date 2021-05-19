import "./App.css";
import { connect } from "react-redux";
import React from "react";
import { handler } from "./redux/actions/mixedAction";
import { Route } from "react-router-dom";
import Home from "./Components/Profile";
import NewTweet from "./Components/NewTweet";
import Explore from "./Components/Explore";
import LoadingBar from "react-redux-loading";
import TweetPage from "./Components/TweetPage";
import Nav from "./Components/Nav";

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(handler());
	}
	render() {
		console.log(this.props);
		return (
			<>
				<LoadingBar />
				{this.props.tweet.authReducer === null ? null : (
					<div>
						<Nav />
						<Route exact path="/" component={Explore} />
						<Route exact path="/tweet/:id" component={TweetPage} />
						<Route exact path="/newTweet" component={NewTweet} />
						<Route path="/profile/:id" component={Home} />
					</div>
				)}
			</>
		);
	}
}
function mapStateToProps(state) {
	return {
		tweet: state,
	};
}
export default connect(mapStateToProps)(App);

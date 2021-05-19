import React, { Component } from "react";

import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import back from "../assets/background.jpeg";
import profile from "../assets/profile.jpg";
import { handler } from "../redux/actions/mixedAction";
import { FaArrowLeft } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import Tweet from "./Tweet";
import { Link } from "react-router-dom";
import { usePramas } from "react-router-dom";
class Home extends Component {
	async componentDidMount() {
		await this.props.dispatch(handler());
	}
	render() {
		console.log("In profile");
		console.log(this.props);
		console.log(this.props.match.params.id);
		return (
			<div style={{ display: "flex", height: "100%" }}>
				<div className="main" style={{ flex: "3" }}>
					<h3 style={{ float: "left", fontSize: "20px" }}>
						<Link style={{ color: "white" }} to="/">
							<FaArrowLeft />
						</Link>
						{this.props.name[this.props.match.params.id].name}
						<GoVerified />
					</h3>
					<img
						src={
							this.props.name[this.props.match.params.id]
								.background
						}
						alt="BackGround"
						height="199px"
						width="598px"
					/>
					<Row>
						<Col>
							<img
								style={{
									position: "absolute",
									top: "200px",
									left: "7px",
									border: "black",
									borderStyle: "solid",
									borderTopRightRadius: "9999px",
									borderTopLeftRadius: "9999px",
									borderBottomLeftRadius: "9999px",
									borderBottomRightRadius: "9999px",
									display: "inline",
								}}
								src={
									this.props.name[this.props.match.params.id]
										.avatarURL
								}
								alt="Profile"
								height="136"
								width="136"
							/>
						</Col>
					</Row>
					<Row>
						<Col
							style={{
								padding: "100px",
								marginLeft: "0px",
								textAlign: "left",
								fontSize: "20px",
								paddingLeft: "20px",
								paddingBottom: "0px",
							}}
						>
							<p
								style={{
									marginBottom: "0px",
								}}
							>
								{
									this.props.name[this.props.match.params.id]
										.name
								}
								<GoVerified />
							</p>
							<span
								style={{
									color: "rgb(110, 118, 125)",
									fontSize: "15px",
								}}
							>
								@{this.props.match.params.id}
							</span>
							<p style={{ fontSize: "15px" }}>
								{
									this.props.users[this.props.match.params.id]
										.about
								}
							</p>
						</Col>
					</Row>
					<div style={{ backgroundColor: "black" }}>
						<ul className="tweetInfo">
							{this.props.tweets.map((id) => {
								return (
									<li>
										<Tweet id={id} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div style={{ flex: "1" }}>
					<h1>Hi</h1>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state, id) {
	return {
		users: state.userReducer,
		tweets: Object.keys(state.tweetReducer).filter((tweet) => {
			return state.tweetReducer[tweet].author === id.match.params.id;
		}),
		name: state.userReducer,
	};
}
export default connect(mapStateToProps)(Home);

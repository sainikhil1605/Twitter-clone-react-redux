import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddTweet } from "../redux/actions/tweetAction";

class NewTweet extends Component {
	state = {
		text: "",
		toHome: false,
	};

	handleChange = (e) => {
		const text = e.target.value;

		this.setState(() => ({
			text,
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { text } = this.state;

		const { dispatch, id } = this.props;
		console.log(id);

		dispatch(handleAddTweet(text, id));
		// console.log("New Tweet: ", text);

		//reset state to default
		this.setState((prevState) => ({
			text: "",
			toHome: prevState.toHome ? false : true,
		}));
	};

	render() {
		const { text, toHome } = this.state;
		console.log("INside new Tweet");
		console.log(this.state);
		const tweetLeft = 280 - text.length;
		if (toHome === true) {
			return <Redirect to="/"></Redirect>;
		}

		return (
			<div style={{ backgroundColor: "black", height: "100vh" }}>
				<h3 className="center">Compose new Tweet </h3>
				<form className="new-tweet" onSubmit={this.handleSubmit}>
					<textarea
						style={{ backgroundColor: "white" }}
						placeholder="Add Your Thoughts"
						value={text}
						onChange={this.handleChange}
						className="textarea"
						maxLength={280}
					/>

					{tweetLeft <= 100 && (
						<div className="tweet-length">{tweetLeft}</div>
					)}

					<button
						className="btn"
						type="submit"
						disabled={text === ""}
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(NewTweet);

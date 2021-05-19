import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import { FiHash } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
function Nav() {
	return (
		<div>
			<div className="sideNav">
				<ListGroup type="unstyled">
					<li>
						<Link to="/">
							<FaTwitter style={{ fontSize: "50px" }} />
						</Link>
					</li>
					<li>
						<Link to="/">
							<FiHash style={{ fontSize: "30px" }} /> Explore
						</Link>
					</li>
					<li>
						<Link to="/newTweet">New Tweet</Link>
					</li>
					<li>
						<Link to="/profile/robert_downey_jr">Profile</Link>
					</li>
				</ListGroup>
			</div>
		</div>
	);
}

export default Nav;

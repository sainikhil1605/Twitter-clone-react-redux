import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Mylink = styled(Link)`
	color: black;
	text-decoration: none;
	:hover {
		color: gray;
	}
`;
function Home() {
	const [store, setStore] = useState([]);
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			console.log(resp);
			setStore(resp.data);
		});
	}, []);
	return (
		<SkeletonTheme color="#202020" highlightColor="#444">
			{store.length !== 0 ? (
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{store.map((product) => {
						return (
							<div
								style={{
									flex: "1",
									boxShadow:
										"rgba(0, 0, 0, 0.25) 0px 4px 8px",
									margin: "30px 30px",
									backgroundColor: "white",
								}}
							>
								<Mylink to={`/product/${product["id"]}`}>
									<img
										width="200px"
										height="200px"
										src={product["image"]}
										alt="product"
									/>
									<div>{product["title"]}</div>
									<div style={{ fontSize: "25px" }}>
										${product["price"]}
									</div>
								</Mylink>
							</div>
						);
					})}
				</div>
			) : (
				<Skeleton height={10} />
			)}
		</SkeletonTheme>
	);
}

export default Home;

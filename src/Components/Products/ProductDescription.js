import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ImgDiv, Outdiv, ProdImg, TextDiv } from "./ProductElements";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function ProductDescription(props) {
	const [store, setStore] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			console.log(resp);
			setStore(resp.data[id - 1]);
		});
	}, []);
	return (
		<SkeletonTheme color="#202020" highlightColor="#444">
			{store.length !== 0 ? (
				<Outdiv>
					<ImgDiv>
						<ProdImg src={store["image"]} alt="product" />
					</ImgDiv>
					<TextDiv>
						<h4>{store["title"]}</h4>
						<p>{store["description"]}</p>
						<p>Price:${store["price"]}</p>
					</TextDiv>
				</Outdiv>
			) : (
				<Skeleton height={10} />
			)}
		</SkeletonTheme>
	);
}

export default ProductDescription;

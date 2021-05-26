import "./App.css";
import Home from "./Components/Home/Home";

import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDescription from "./Components/Products/ProductDescription";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/product/:id" component={ProductDescription} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;

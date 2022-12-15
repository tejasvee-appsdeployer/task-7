import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

const Layout = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link to="/">Home</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/a">A</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/b">B</Link>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

const Home = ({ a, b, incA, incB }) => {
	return (
		<div>
			{a} {b}
			<br />
			<Button variant="primary" onClick={incA}>
				Increment A
			</Button>{" "}
			<Button variant="primary" onClick={incB}>
				Increment B
			</Button>
		</div>
	);
};

const PageA = ({ a, b, incA, decB }) => {
	return (
		<div>
			{a} {b}
			<br />
			<Button variant="primary" onClick={incA}>
				Increment A
			</Button>{" "}
			<Button variant="secondary" onClick={decB}>
				Decrement B
			</Button>
		</div>
	);
};
const PageB = ({ a, b, decA, incB }) => {
	return (
		<div>
			{a} {b}
			<br />
			<Button variant="secondary" onClick={decA}>
				Decrement A
			</Button>{" "}
			<Button variant="primary" onClick={incB}>
				Increment B
			</Button>
		</div>
	);
};
function App() {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const incA = () => setA(a + 1);
	const incB = () => setB(b + 1);
	const decA = () => setA(a - 1);
	const decB = () => setB(b - 1);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home a={a} b={b} incA={incA} incB={incB} />} />
					<Route
						path="/a"
						element={<PageA a={a} b={b} incA={incA} decB={decB} />}
					/>
					<Route
						path="/b"
						element={<PageB a={a} b={b} decA={decA} incB={incB} />}
					/>
					<Route path="*" element={<>404</>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

import "./App.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Root</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/a">A</Nav.Link>
						<Nav.Link href="/b">B</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default App;

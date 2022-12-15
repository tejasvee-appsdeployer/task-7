import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

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

export default Layout;

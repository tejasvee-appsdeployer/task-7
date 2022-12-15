import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link to="/">Home</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/a">A</Nav.Link>
						<Nav.Link href="/b">B</Nav.Link>
						<Nav.Link href="/form">Form Page</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};

export default Layout;

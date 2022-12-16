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
					<Nav className="row text-center me-auto">
						<Link className="m-auto col" to="/a">
							A
						</Link>
						<Link className="m-auto col" to="/b">
							B
						</Link>
						<Link className="m-auto col" to="/form">
							Form Page
						</Link>
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

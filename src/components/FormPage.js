import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function FormPage() {
	const handleSubmit = () => {
		alert("Form Submitted");
	};
	const [showA, setShowA] = useState(false);

	const toggleShowA = () => setShowA(!showA);
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress2">
					<Form.Label>Address 2</Form.Label>
					<Form.Control placeholder="Apartment, studio, or floor" />
				</Form.Group>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>State</Form.Label>
						<Form.Select defaultValue="Choose...">
							<option>Choose...</option>
							<option>...</option>
						</Form.Select>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control />
					</Form.Group>
				</Row>

				<Button className="mb-2" type="submit">
					Submit
				</Button>
				<Toast show={showA} onClose={toggleShowA}>
					<Toast.Header>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded me-2"
							alt=""
						/>
						<strong className="me-auto">Bootstrap</strong>
						<small>11 mins ago</small>
					</Toast.Header>
					<Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
				</Toast>
			</Form>
		</Container>
	);
}

export default FormPage;

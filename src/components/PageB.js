import { Button } from "react-bootstrap";

const PageB = ({ a, b, decA, incB }) => {
	return (
		<div>
			A:{a} B:{b}
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

export default PageB;

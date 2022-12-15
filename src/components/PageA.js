import { Button } from "react-bootstrap";

const PageA = ({ a, b, incA, decB }) => {
	return (
		<div>
			A:{a} B:{b}
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
export default PageA;

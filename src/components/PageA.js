import { Button } from "react-bootstrap";
import Header from "./Header";

const PageA = ({ a, b, incA, decB }) => {
	return (
		<div>
			<Header name={"A"} />
			<p className="fs-2">
				A:{a} B:{b}
			</p>
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

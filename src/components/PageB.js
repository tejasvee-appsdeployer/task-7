import { Button } from "react-bootstrap";
import Header from "./Header";

const PageB = ({ a, b, decA, incB }) => {
	return (
		<div>
			<Header name={"B"} />
			<p className="fs-2">
				A:{a} B:{b}
			</p>
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

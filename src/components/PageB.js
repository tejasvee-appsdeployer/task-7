import { Button } from "react-bootstrap";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Header from "./Header";

const PageB = ({ a, b, decA, incB }) => {
	return (
		<div>
			<Header name={"B"} />
			<div className="position">
				<ComponentA a={a} />
				<ComponentB b={b} />
			</div>
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

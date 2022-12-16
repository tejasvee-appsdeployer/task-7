import { Button } from "react-bootstrap";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Header from "./Header";

function PageA({ a, b, incA, decB }) {
	return (
		<div>
			<Header name={"A"} />
			<div className="position">
				<ComponentA a={a} />
				<ComponentB b={b} />
			</div>
			<Button variant="primary" onClick={incA}>
				Increment A
			</Button>{" "}
			<Button variant="secondary" onClick={decB}>
				Decrement B
			</Button>
		</div>
	);
}
export default PageA;

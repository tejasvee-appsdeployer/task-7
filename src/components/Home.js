import { Button } from "react-bootstrap";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Header from "./Header";

const Home = ({ a, b, setA, setB }) => {
	return (
		<div>
			<Header name={"HOME"} />
			<div className="position">
				<ComponentA a={a} />
				<ComponentB b={b} />
			</div>
			<Button
				variant="primary"
				onClick={() => {
					setA(a + 1);
				}}
			>
				Increment A
			</Button>{" "}
			<Button
				variant="primary"
				onClick={() => {
					setB(b + 1);
				}}
			>
				Increment B
			</Button>
		</div>
	);
};
export default Home;

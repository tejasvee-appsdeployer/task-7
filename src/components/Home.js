import { Button } from "react-bootstrap";
import Header from "./Header";

const Home = ({ a, b, incA, incB }) => {
	return (
		<div>
			<Header name={"HOME"} />
			<p className="fs-2">
				A:{a} B:{b}
			</p>
			<br />
			<Button variant="primary" onClick={incA}>
				Increment A
			</Button>{" "}
			<Button variant="primary" onClick={incB}>
				Increment B
			</Button>
		</div>
	);
};
export default Home;

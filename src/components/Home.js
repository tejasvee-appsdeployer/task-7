import { Button } from "react-bootstrap";

const Home = ({ a, b, incA, incB }) => {
	return (
		<div>
			A:{a} B:{b}
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

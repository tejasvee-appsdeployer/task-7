import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormPage from "./components/FormPage";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PageA from "./components/PageA";
import PageB from "./components/PageB";

function App() {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const incA = useCallback(() => {
		setA(a + 1);
	}, [a]);
	const incB = useCallback(() => {
		setB(b + 1);
	}, [b]);
	const decB = useCallback(() => {
		setB(b - 1);
	}, [b]);
	const decA = useCallback(() => {
		setA(a - 1);
	}, [a]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home a={a} b={b} setA={setA} setB={setB} />} />
					<Route
						path="/a"
						element={<PageA a={a} b={b} incA={incA} decB={decB} />}
					/>
					<Route
						path="/b"
						element={<PageB a={a} b={b} decA={decA} incB={incB} />}
					/>
					<Route path="/form" element={<FormPage />} />
					<Route path="*" element={<>404</>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

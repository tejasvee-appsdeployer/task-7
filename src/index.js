import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageA from "./routes/A";
import PageB from "./routes/B";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/a",
		element: <PageA />,
	},
	{
		path: "/b",
		element: <PageB />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

import React, { useEffect, useRef } from "react";

function ComponentB({ b }) {
	const prevValue = useRef(b);
	useEffect(() => {
		prevValue.current = b;
	}, [b]);
	return (
		<div>
			<p className="fs-2">
				B: {b} Previous: {prevValue.current}
			</p>
		</div>
	);
}

export default ComponentB;

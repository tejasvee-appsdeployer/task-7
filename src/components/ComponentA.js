import React, { useEffect, useRef } from "react";

function ComponentA({ a }) {
	const prevValue = useRef(a);
	useEffect(() => {
		prevValue.current = a;
	}, [a]);

	return (
		<div>
			<p className="fs-2">
				A: {a} Previous: {prevValue.current}
			</p>
		</div>
	);
}

export default ComponentA;

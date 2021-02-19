import React, { useState, useEffect, useRef } from 'react';
export default function UpdatePost(props) {
	const [list, setList] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/lists/${props.match.params.id}`);
				const data = await response.json();
				setList(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [list]);

	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
}
